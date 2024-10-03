const { prisma } = require('../config/prisma');

async function getMeso(req, res) {

    const userId = req.user.id;

    try {
        const meso = await prisma.program.findMany({
            where: {
              users: {
                some: {
                  id: userId, 
                },
              },
            },
            include: {
                Week: {
                    include: {
                    Workout: {
                        include: {
                        Excercise: {
                            include: {
                            sets: true,
                            MuscleGroup: true,
                            },
                        },
                        },
                    },
                    },
            }
          }});

        res.status(200).json(meso);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function createMeso(req, res) {

    const userId = req.user.id;
    const { days, length, name, weeks } = req.body;

    weeks[0].workouts.forEach(workout => {
        workout.excercises.forEach((excercise, index) => {
            // Directly add the sets to the existing excercise object
            workout.excercises[index] = {
                ...excercise,
                sets: [
                    { reps: 0, weight: 0 },
                    { reps: 0, weight: 0 }
                ]
            };
        });
    });
    
    try {
      // Create or update the Program
      const createdProgram = await prisma.program.create({
        data: {
          name,
          length,
          days,
          users: {
            connect: [{ id: userId }],
          },
        },
      });
    
      for (const [weekIndex, week] of weeks.entries()) {
        // Create or update Week
        const createdWeek = await prisma.week.upsert({
          where: {
            programId_weekNumber: {
              programId: createdProgram.id,
              weekNumber: weekIndex + 1,
            },
          },
          update: {
            updatedAt: new Date(),
          },
          create: {
            weekNumber: weekIndex + 1,
            programId: createdProgram.id,
          },
        });
    
        for (const workout of week.workouts) {
          // Create or update Workout
          const createdWorkout = await prisma.workout.upsert({
            where: {
              weekId_name: {
                weekId: createdWeek.id,
                name: workout.name,
              },
            },
            update: {
              updatedAt: new Date(),
            },
            create: {
              name: workout.name,
              weekId: createdWeek.id,
            },
          });
    
          for (const excercise of workout.excercises) {

            console.log(excercise);

            // Ensure the MuscleGroup exists or create it if necessary
            const muscleGroup = await prisma.muscleGroup.upsert({
              where: { name: excercise.muscle },
              update: {},
              create: { name: excercise.muscle },
            });
    
            // Create or update Excercise
            const createdExcercise = await prisma.excercise.upsert({
              where: {
                workoutId_name: {
                  workoutId: createdWorkout.id,
                  name: excercise.excercise,
                },
              },
              update: {
                updatedAt: new Date(),
              },
              create: {
                name: excercise.excercise,
                workoutId: createdWorkout.id,
                muscleGroupId: muscleGroup.id,
              },
            });
    
            // Add Sets to the Excercise
            for (const set of excercise.sets) {
              await prisma.set.create({
                data: {
                  excerciseId: createdExcercise.id,
                  weight: set.weight,
                  reps: set.reps,
                },
              });
            }
          }
        }
      }

      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          currentProgramId: createdProgram.id,
        }
      })
    
      res.status(200).json({ message: 'Program saved successfully' });
    } catch (error) {
      console.error('Error saving program:', error);
      res.status(500).json({ error: 'An error occurred while saving the program' });
    }

}

module.exports = {
    getMeso,
    createMeso
}
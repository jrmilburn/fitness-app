const { prisma } = require('../config/prisma');

async function getWorkout(req, res) {

    const userId = req.user.id;
    const { workoutid } = req.params;

    try {

        const workout = await prisma.workout.findMany({
            where: {
                id: workoutid
            }
        });

        res.status(200).json(workout);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

async function getWorkouts(req, res) {

    const userId = req.user.id;

    try {

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        const currentProgram = await prisma.program.findUnique({
            where: {
                id: user.currentProgramId
            }
        })

        const programWorkouts = await prisma.program.findMany({
            where: {
              id: currentProgram.id,
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
          },
          orderBy: {
            name: 'asc'
          }
        });



            res.json(programWorkouts);

    } catch(error) {

        console.error(error);
        res.status(500).json({ message: 'Internal server error' });

    }

}

async function completeWorkout(req, res) {

    const userId = req.user.id;
    const { workoutId } = req.body;

    try {

        const program = await prisma.program.findFirst({
            where: {
                Week: {
                    some: {
                        Workout: {
                            some: {
                                id: workoutId
                            }
                        }
                    }
                }
            }
        });
        
        // Mark the current workout as completed
        const completedWorkout = await prisma.workout.update({
            where: {
                id: workoutId
            },
            data: {
                completed: true
            }
        });
        
        // Get the current week
       // Retrieve the first week and its exercises
const firstWeek = await prisma.week.findFirst({
    where: {
        programId: currentWeek.programId, // Assuming currentWeek is the completed week
        weekNumber: currentWeek.weekNumber // The current completed week
    },
    include: {
        Workout: {
            include: {
                Excercise: {
                    include: {
                        sets: true // Include sets for each exercise
                    }
                }
            }
        }
    }
});

// Retrieve the second week (or the next week after the current one)
const secondWeek = await prisma.week.findFirst({
    where: {
        programId: currentWeek.programId, 
        weekNumber: currentWeek.weekNumber + 1 // Assuming next week comes sequentially
    },
    include: {
        Workout: {
            include: {
                Excercise: true // We need to update the exercises in the second week
            }
        }
    }
});

// Increment the number of sets in the second week's exercises based on the first week
if (firstWeek && secondWeek) {
    // Loop through each workout in the second week
    for (let workout of secondWeek.Workout) {
        // Loop through each exercise in the workout
        for (let exercise of workout.Excercise) {
            // Find the corresponding exercise in the first week by matching exercise names or ids
            const correspondingExerciseInFirstWeek = firstWeek.Workout
                .flatMap(w => w.Excercise)
                .find(ex => ex.name === exercise.name); // Assuming exercise name is the same

            if (correspondingExerciseInFirstWeek) {
                // Increment the number of sets by 1
                const newSetsCount = correspondingExerciseInFirstWeek.sets.length + 1;

                // Update the number of sets for the exercise in the second week
                await prisma.set.updateMany({
                    where: {
                        excerciseId: exercise.id
                    },
                    data: {
                        setCount: newSetsCount // Assuming you're storing the count of sets in reps or as a separate field
                    }
                });

                console.log(`Updated ${exercise.name} in Week ${secondWeek.weekNumber} to have ${newSetsCount} sets.`);
            }
        }
    }
} else {
    console.log('Either the first week or the second week was not found.');
}


        res.json({completedWorkout, program, currentWeek});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    getWorkout,
    getWorkouts,
    completeWorkout
}
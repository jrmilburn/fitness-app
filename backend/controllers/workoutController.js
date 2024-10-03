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
          }});



            res.json(programWorkouts);

    } catch(error) {

        console.error(error);
        res.status(500).json({ message: 'Internal server error' });

    }

}

module.exports = {
    getWorkout,
    getWorkouts
}
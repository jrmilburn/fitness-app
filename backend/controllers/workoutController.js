const { prisma } = require('../config/prisma');

async function getWorkout(req, res) {

    const userId = req.user.id;

    try {

        const workout = await prisma.workout.findMany({
            where: {
                userId: userId
            }
        });

        res.status(200).json(workout);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    getWorkout
}
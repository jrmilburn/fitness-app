const { prisma } = require('../config/prisma');

async function getMuscleGroups(req, res) {

    const muscleGroups = await prisma.muscleGroup.findMany();

    res.json(muscleGroups);

}

module.exports = { 
    getMuscleGroups
}
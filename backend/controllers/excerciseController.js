const { prisma } = require("../config/prisma");

async function getExcercises(req, res) {

    const { musclegroup } = req.params;

    const excercises = await prisma.muscleGroup.findUnique({
        where: {
            name: musclegroup
        },
        select: {
            excercises: true
        }
    });

    res.json(excercises);

}

module.exports = {
    getExcercises
}
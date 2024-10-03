const { prisma } = require('./prisma');

async function clearDb() {

    try {

        await prisma.set.deleteMany();
        await prisma.excercise.deleteMany();
        await prisma.muscleGroup.deleteMany();
        await prisma.workout.deleteMany();
        await prisma.week.deleteMany();
        await prisma.program.deleteMany();


    } catch (error) {
        console.error(error);
    }



}

clearDb();
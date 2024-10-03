const { prisma } = require('../config/prisma');

async function getUserData(req, res) {

    const userId = req.user.id;

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                programs: {
                    include: {
                        week: {
                            include: {
                                workout: {
                                    include: {
                                        excercise: {
                                            include: {
                                                sets: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                currentProgramId: true,
            }
        })

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

async function updateUser(req, res) {

    const userId = req.user.id;
    const { programId } = req.body;
    
    try {
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                currentProgramId: programId
            }
        })
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    getUserData,
    updateUser
}
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
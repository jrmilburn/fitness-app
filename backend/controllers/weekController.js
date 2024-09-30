async function getWeek(req, res) {
    
        const userId = req.user.id;
    
        try {
            const week = await prisma.week.findMany({
                where: {
                    userId: userId
                }
            });
    
            res.status(200).json(week);
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
}

async function createWeek(req, res) {

    const userId = req.user.id;

    const { programId } = req.params;
    const { weekNumber } = req.body;

}
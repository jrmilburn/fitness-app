async function getMeso(req, res) {

    const userId = req.user.id;

    try {
        const meso = await prisma.program.findMany({
            where: {
                userId: userId
            },

        });

        res.status(200).json(meso);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function createMeso(req, res) {

    const userId = req.user.id;

    const { name, length } = req.body;

    try {

        const meso = await prisma.program.create({
            data: {
                name: name,
                length: length,
                userId: userId
            }
        })

        res.status(201).json(meso);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    getMeso,
    createMeso
}
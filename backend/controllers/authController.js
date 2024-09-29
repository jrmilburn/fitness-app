const { prisma } = require('../config/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function register(req, res) {

    const { firstName, lastName, email, username, password } = req.body;

    try {

        const userExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                username,
                password: hashedPassword
            }
        })
        
        res.status(201).json(user);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

async function login(req, res) {


    const { email, password } = req.body;

    try {

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        

        if(!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const passwordMatch = bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const payload = {
            id: user.id,
            email: user.email,
            username: user.username
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({
            message: "Login successful",
            token
        })

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    register,
    login
}
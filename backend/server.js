const passport = require('passport');

require("dotenv").config();
require('./config/passport')(passport);

const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.use('/user', userRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

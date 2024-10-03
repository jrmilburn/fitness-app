const { Router } = require('express');
const { passport } = require('../config/passport');

const userRouter = Router();

const userController = require('../controllers/userController');

userRouter.put('/', passport.authenticate('jwt', {session: false}), userController.updateUser);

module.exports = userRouter;
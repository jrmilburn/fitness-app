const { Router } = require('express');
const { passport } = require('../config/passport');

const workoutController = require('../controllers/workoutController');

const workoutRouter = Router();

workoutRouter.get('/:workoutid', workoutController.getWorkout);
workoutRouter.get('/', passport.authenticate('jwt', {session: false}), workoutController.getWorkouts);

workoutRouter.put('/', passport.authenticate('jwt', {session: false}), workoutController.completeWorkout);

module.exports = workoutRouter;
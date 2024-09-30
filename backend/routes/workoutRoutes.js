const { Router } = require('express');

const workoutController = require('../controllers/workoutController');

const workoutRouter = Router();

workoutRouter.get('/', workoutController.getWorkout);

module.exports = workoutRouter;
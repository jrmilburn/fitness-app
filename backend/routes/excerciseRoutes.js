const { Router } = require('express');

const excerciseController = require('../controllers/excerciseController');

const excerciseRouter = Router();

excerciseRouter.get('/:musclegroup', excerciseController.getExcercises);

module.exports = excerciseRouter;
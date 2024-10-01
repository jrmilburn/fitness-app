const { Router } = require("express");

const muscleGroupController = require("../controllers/muscleGroupController");

const muscleGroupRouter = Router();

muscleGroupRouter.get("/", muscleGroupController.getMuscleGroups);

module.exports = muscleGroupRouter;
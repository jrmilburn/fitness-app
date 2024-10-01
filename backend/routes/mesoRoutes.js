const { Router } = require("express");
const { passport } = require("../config/passport");

const mesoController = require("../controllers/mesoController");

const mesoRouter = Router();
const weekRouter = require("./weekRoutes");

mesoRouter.get("/", mesoController.getMeso);
mesoRouter.post("/", mesoController.createMeso);

mesoRouter.use('/:programId', weekRouter);

module.exports = mesoRouter;
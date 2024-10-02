const { Router } = require("express");
const { passport } = require('../config/passport');

const mesoController = require("../controllers/mesoController");

const mesoRouter = Router();
const weekRouter = require("./weekRoutes");

mesoRouter.get("/", passport.authenticate('jwt', {session: false}), mesoController.getMeso);
mesoRouter.post("/", passport.authenticate('jwt', {session: false}),mesoController.createMeso);

mesoRouter.use('/:programId', weekRouter);

module.exports = mesoRouter;
const { Router } = require("express");
const { passport } = require('../config/passport');

const mesoController = require("../controllers/mesoController");

const mesoRouter = Router();
const weekRouter = require("./weekRoutes");

mesoRouter.get("/", passport.authenticate('jwt', {session: false}), mesoController.getMesos);
mesoRouter.post("/", passport.authenticate('jwt', {session: false}),mesoController.createMeso);

mesoRouter.get('/:programId', mesoController.getMeso);

module.exports = mesoRouter;
const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events.controller");
const createRoutes = require("./base.routes");

const eventsRoutes = createRoutes(eventsController);

router.use("/events", eventsRoutes);

module.exports = router;

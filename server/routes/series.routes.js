const express = require("express");
const router = express.Router();
const seriesController = require("../controllers/series.controller");
const createRoutes = require("./base.routes");

const seriesRoutes = createRoutes(seriesController);

router.use("/series", seriesRoutes);

module.exports = router;

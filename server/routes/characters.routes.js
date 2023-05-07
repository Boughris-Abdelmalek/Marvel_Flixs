const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/characters.controller");
const createRoutes = require("./base.routes");

const charactersRoutes = createRoutes(charactersController);

router.use("/characters", charactersRoutes);

module.exports = router;

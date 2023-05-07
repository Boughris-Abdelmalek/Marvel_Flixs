const express = require("express");
const router = express.Router();
const storiesController = require("../controllers/stories.controller");
const createRoutes = require("./base.routes");

const storiesRoutes = createRoutes(storiesController);

router.use("/stories", storiesRoutes);

module.exports = router;

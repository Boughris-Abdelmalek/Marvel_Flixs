const express = require("express");
const router = express.Router();
const comicsController = require("../controllers/comics.controller");
const createRoutes = require("./base.routes");

const comicsRoutes = createRoutes(comicsController);

router.use("/comics", comicsRoutes);

module.exports = router;

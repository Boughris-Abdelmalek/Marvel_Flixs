const express = require("express");
const router = express.Router();
const creatorsController = require("../controllers/creators.controller");
const createRoutes = require("./base.routes");

const creatorsRoutes = createRoutes(creatorsController);

router.use("/creators", creatorsRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();

const { cacheMiddleware } = require("../middleware/base.cache");

const createRoutes = (controller) => {
    router.get("/", cacheMiddleware, controller.getAll);
    router.get("/:id", cacheMiddleware, controller.getById);
    router.get("/:id/:filter", cacheMiddleware, controller.getFiltered);

    return router;
};

module.exports = createRoutes;
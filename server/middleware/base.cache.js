const Cache = require("node-cache");
const cache = new Cache({ stdTTL: 60 * 60 * 24 });

// reusable middleware function
const cacheMiddleware = (req, res, next) => {
    let key = req.baseUrl;
    if (req.path !== "/") {
        key += req.path;
    }
    try {
        if (cache.has(key)) {
            console.info(`Using cached data for ${key}`);
            const data = cache.get(key);
            return res.send(data).status(200);
        }
        console.info(`base.cache: ${key}`);
        return next();
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};

module.exports = {
    cache,
    cacheMiddleware,
};

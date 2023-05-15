const { cache } = require("../middleware/base.cache");
const {
    getAllItems,
    getItemById,
    getFilteredItems,
} = require("../services/api.service");

const getAll = async (req, formatResponse = (data) => data) => {
    const path = req.baseUrl;
    const { offset, limit, nameStartsWith } = req.query;
    const filters = {
        offset: parseInt(offset) || 0,
        limit: parseInt(limit) || 20,
        nameStartsWith: nameStartsWith || "",
    };

    const data = await getAllItems(path, filters);
    const cacheKey = req.originalUrl;
    cache.set(cacheKey, data);

    return formatResponse(data);
};

const getById = async (req, formatResponse = (data) => data) => {
    const path = req.baseUrl;
    const id = req.params.id;
    const key = `${path}/${id}`;

    const data = await getItemById(path, id);
    cache.set(key, data);

    return formatResponse(data);
};

const getFiltered = async (req, formatResponse = (data) => data) => {
    const path = req.baseUrl;
    const id = req.params.id;
    const filter = req.params.filter;

    const key = `${path}/${id}/${filter}`;

    const data = await getFilteredItems(path, id, filter);
    cache.set(key, data);

    return formatResponse(data);
};

module.exports = {
    getAll,
    getById,
    getFiltered,
};

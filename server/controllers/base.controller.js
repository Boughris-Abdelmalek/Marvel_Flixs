const { cache } = require("../middleware/base.cache");
const {
    getAllItems,
    getItemById,
    getFilteredItems,
} = require("../services/api.service");

const getAll = async (req, formatResponse = (data) => data) => {
    const path = req.baseUrl;

    const data = await getAllItems(path);
    cache.set(path, data);

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

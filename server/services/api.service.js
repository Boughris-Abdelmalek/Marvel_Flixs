const axios = require("../utils/axios");

const getAllItems = async (
    url,
    filters = { offset: 0, limit: 20, nameStartsWith: "" }
) => {
    // Fetch all items for a given endpoint
    try {
        const { offset, limit, nameStartsWith } = filters;
        const params = {
            offset,
            limit,
        };

        if (nameStartsWith !== "") {
            params.nameStartsWith = nameStartsWith;
        }

        const response = await axios.get(url, { params });
        const items = await response.data;

        return items;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};

const getItemById = async (url, id) => {
    // Fetch item by id for a given endpoint
    try {
        const response = await axios.get(`${url}/${id}`);
        const item = await response.data;

        return item;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};

const getFilteredItems = async (url, id, filter) => {
    // Fetch all items by ID and apply filter
    try {
        const response = await axios.get(`${url}/${id}/${filter}`);
        const items = await response.data;

        return items;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};

module.exports = {
    getAllItems,
    getItemById,
    getFilteredItems,
};

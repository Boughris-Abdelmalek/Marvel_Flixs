const axios = require("../utils/axios");

const getAllItems = async (url) => {
    // Fetch all items for a given endpoint
    try {
        const response = await axios.get(url);
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

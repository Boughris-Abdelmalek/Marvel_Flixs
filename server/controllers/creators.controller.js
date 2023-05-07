const { getAll, getById, getFiltered } = require("./base.controller");

const getAllCreators = async (req, res) => {
    try {
        const comics = await getAll(req);
        res.status(200).json(comics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

const getCreatorById = async (req, res) => {
    try {
        const comic = await getById(req);
        res.status(200).json(comic);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

const getFilteredCreator = async (req, res) => {
    try {
        const results = await getFiltered(req);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

module.exports = {
    getAll: getAllCreators,
    getById: getCreatorById,
    getFiltered: getFilteredCreator,
};

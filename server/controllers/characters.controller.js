const { getAll, getById, getFiltered } = require("./base.controller");

const getAllCharacters = async (req, res) => {
    try {
        const comics = await getAll(req);
        res.status(200).json(comics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

const getCharacterById = async (req, res) => {
    try {
        const comic = await getById(req);
        res.status(200).json(comic);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

const getFilteredCharacter = async (req, res) => {
    try {
        const results = await getFiltered(req);
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

module.exports = {
    getAll: getAllCharacters,
    getById: getCharacterById,
    getFiltered: getFilteredCharacter,
};

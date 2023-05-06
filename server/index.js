const express = require("express");
const morgan = require("morgan");
const IP = require('ip');
const axios = require("axios");
const crypto = require("crypto");
const timestamp = new Date().getTime().toString();
require("dotenv").config();

// Creating express server
const app = express();

// Log the requests
app.use(morgan("tiny"));

const PORT = process.env.PORT || 3000;
const IP_ADDRESS = IP.address();
const HOST = "localhost";
const API_BASE_URL = process.env.API_BASE_URL;
const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY;

const hash = crypto
    .createHash("md5")
    .update(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY)
    .digest("hex");

// Include the hash, public key, and timestamp as query parametter
const params = new URLSearchParams({
    apikey: API_PUBLIC_KEY,
    ts: timestamp,
    hash: hash,
});

app.use("/", async (req, res) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/v1/public/characters?${params}`
        );
        const characters = await response.data;

        res.status(200).json(characters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}\n\t➡️  Host:   http://${HOST}:${PORT}\n\t➡️  Local:   http://${IP_ADDRESS}:${PORT}`);
});

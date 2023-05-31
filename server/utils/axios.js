const axios = require("axios");
const crypto = require("crypto");
require('dotenv').config()

const API_BASE_URL = process.env.API_BASE_URL;
const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY;

const timestamp = new Date().getTime().toString();
const hash = crypto
    .createHash("md5")
    .update(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY)
    .digest("hex");

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // Include the hash, public key, and timestamp as query parametter
    params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
    },
});

module.exports = axiosInstance;

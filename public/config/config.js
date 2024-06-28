// config/config.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const router = express.Router();

module.exports = {
    express,
    router,
    path,
    app,
    fs
};

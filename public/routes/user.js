const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');

router.get('/', homeController.getHome); // Home sayfası

module.exports = router;

const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');

router.get('/', homeController.getAdminHome); // Admin ana sayfası

module.exports = router;

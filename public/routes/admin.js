const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminHome');

router.get('/', adminController.getAdminHome); // Admin ana sayfası

module.exports = router;

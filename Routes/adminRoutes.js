const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//get admin
router.post('/admin', adminController.getAdmin);

//create an admin
// router.post('/admin', adminController.createAdmin);

module.exports = router;
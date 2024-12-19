const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');

//add inquiry
router.post('/add-inquiry', inquiryController.addInquiry);

// get all inquiries
router.get('/inquiries', inquiryController.getAllInquiries);

module.exports = router;

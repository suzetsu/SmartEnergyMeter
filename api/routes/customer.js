var express = require('express');
var router = express.Router();
var customerController=require('../controller/customer');
router.get('/fetchcustomer',customerController.fetchCustomer)
router.post('/signup',customerController.addCustomer)
router.post('/login',customerController.customerLogin)
module.exports = router;

const express = require('express');
const { testController } = require('../controllers/testController');


//router object 
const router = express.Router();

// routers
router.get('/', testController)

//export - es5
module.exports = router;
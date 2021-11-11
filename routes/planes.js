var express = require('express');
const planes_controlers= require('../controllers/planes'); 
var router = express.Router();

/* GET home page. */
router.get('/', planes_controlers.plane_view_all_Page);

module.exports = router;
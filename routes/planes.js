var express = require('express');
const planes_controlers= require('../controllers/planes'); 
var router = express.Router();

/* GET home page. */
router.get('/', planes_controlers.plane_view_all_Page);
router.get('/detail', planes_controlers.plane_view_one_Page);
/* GET create costume page */
router.get('/create', planes_controlers.plane_create_Page);
/* GET create update page */
router.get('/update', planes_controlers.plane_update_Page);
/* GET create costume page */
router.get('/delete', planes_controlers.plane_delete_Page);
module.exports = router;
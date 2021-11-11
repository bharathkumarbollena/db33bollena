var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var planes_controller = require('../controllers/planes'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume. 
router.post('/planes', planes_controller.plane_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/planes/:id', planes_controller.plane_delete); 
 
// PUT request to update Costume. 
router.put('/planes/:id', planes_controller.plane_update_put); 
 
// GET request for one Costume. 
router.get('/planes/:id', planes_controller.plane_detail); 
 
// GET request for list of all Costume items. 
router.get('/planes', planes_controller.plane_view_all_Page); 
 
module.exports = router; 
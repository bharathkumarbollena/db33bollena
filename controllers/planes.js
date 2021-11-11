var Planes = require('../models/planes'); 
 
// List of all Planes

exports.plane_list = async function(req, res) { 
    try{ 
        thePlanes = await Planes.find(); 
        res.send(thePlanes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Planes. 
exports.plane_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Plane detail: ' + req.params.id); 
}; 
 
// Handle Planes create on POST. 
exports.plane_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Planes create POST'); 
}; 
 
// Handle Planes delete form on DELETE. 
exports.plane_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Planes delete DELETE ' + req.params.id); 
}; 
 
// Handle Planes update form on PUT. 
exports.plane_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Planes update PUT' + req.params.id); 
};

exports.plane_view_all_Page = async function(req, res) { 
    try{ 
        thePlanes = await Planes.find(); 
        res.render('planes', { title: 'Planes Search Results', results: thePlanes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.plane_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Planes(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    
    document.planeType = req.body.planeType;
    document.planePrice = req.body.planePrice; 
    document.planeColor = req.body.planeColor; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
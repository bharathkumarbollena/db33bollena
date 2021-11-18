const planes = require('../models/planes');
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
exports.plane_detail = async function(req, res) { 
    console.log("detail" + req.params.id)
    try {
        result = await planes.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
}; 
 
// Handle Planes create on POST. 
exports.plane_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Planes create POST'); 
}; 
 
// Handle Planes delete form on DELETE. 
exports.Planes_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await planes.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
 
// Handle Planes update form on PUT. 
exports.plane_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await planes.findById(req.params.id)
            // Do updates of properties        
        if (req.body.planeType)
            toUpdate.planeType = req.body.planeType;
        if (req.body.planePrice)
            toUpdate.planePrice = req.body.planePrice;
        if (req.body.planeColor)
            toUpdate.planeColor = req.body.planeColor;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query
exports.plane_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Planes.findById(req.query.id)
        res.render('planesdetail', { title: 'Planes Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
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

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.plane_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('planescreate', { title: 'Planes Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a costume.
// query provides the id
exports.plane_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await planes.findById(req.query.id)
        res.render('planesupdate', { title: 'Planes Update', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.plane_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await planes.findById(req.query.id)
        res.render('planesdelete', { title: 'Plane Delete', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
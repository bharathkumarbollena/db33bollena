const mongoose = require("mongoose") 
const planesSchema = mongoose.Schema({ 
    planeType: String, 
    planePrice: Number, 
    planeColor: String 
}) 
 
module.exports = mongoose.model("Planes", 
planesSchema)
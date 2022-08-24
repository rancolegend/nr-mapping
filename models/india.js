const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indiaSchema = new Schema({
    city: String,
    state: String,
    population: Number,
    stateCode: Number,
    location: String
});




module.exports = mongoose.model('india', indiaSchema);


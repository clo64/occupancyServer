const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ThermalSchema = new Schema({
    Room_Number: {
        type: String
    },
    Floor: {
        type: String
    },
    Number_Occupants: {
        type: String
    }
});

module.exports = ThermalScheme = mongoose.model('thermaldata', ThermalSchema);
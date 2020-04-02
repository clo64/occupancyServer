const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ThermalSchema = new Schema({
    RoomNumber: {
        type: String
    },
    Floor: {
        type: String
    },
    NumberOccupants: {
        type: String
    }
});

module.exports = ThermalScheme = mongoose.model('thermaldata', ThermalSchema);
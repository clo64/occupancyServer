const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Room Schema
const RoomSchema = new Schema({
    Floor: {
        type: String
    },
    Room_Number: {
        type: String
    },
    Occupant_RFID: {
        type: Array 
    }
});

module.exports = RmSchema = mongoose.model('room', RoomSchema);
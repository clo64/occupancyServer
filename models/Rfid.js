const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Rfid Schema
const RfidSchema = new Schema({
    RoomNumber: {
        type: String
    },
    Floor: {
        type: String
    },
    RFID_number: {
        type: String
    }
});

module.exports = RfSchema = mongoose.model('rfiddata', RfidSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Alert Schema
const AlertSchema = new Schema({
    //We will only store one alert entry at a time
    //use the Alert_System_Key to signify the single entry
    Alert_System_Key: {
        type: String
    },
    Alert_Flag: {
        type: String
    },
    Alert_Type: {
        type: String
    },
    RFID_Number: {
        type: String
    },
    Floor: {
        type: String
    },
    Room_Number: {
        type: String
    }
});

module.exports = AlerSchema = mongoose.model('alert', AlertSchema);
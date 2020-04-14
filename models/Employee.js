const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Employee Schema
const EmployeeSchema = new Schema({
    Employee_Name: {
        type: String
    },
    Floor_Authorization: {
        type: Array
    },
    Room_Authorization: {
        type: Array
    },
    RFID_Number: {
        type: String
    }
});

module.exports = EmpSchema = mongoose.model('employee', EmployeeSchema);
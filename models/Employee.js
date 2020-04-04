const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Employee Schema
const EmployeeSchema = new Schema({
    Employee_Name: {
        type: String
    },
    Floor_Authorization: {
        type: String
    },
    Room_Authorization: {
        type: String
    },
    RFID_Number: {
        type: String
    }
});

module.exports = EmpSchema = mongoose.model('employee', EmployeeSchema);
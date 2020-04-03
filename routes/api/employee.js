const express = require('express');
const router = express.Router();

//Import Employee model
const Employee = require('../../models/Employee');

//@route POST api/employee/add
//@desc Receive employee information to 
//      create a new employee record
router.post('/add', (req, res) => {
    //New Employee object
    Employee.exists({RFID_Number: req.body.RFID_Number}).then(result => {
        if(result){
            res.json("RFID already assigned.");
        }
        else{
            const EmployeeRecord = new Employee({
                Employee_Name: req.body.Employee_Name,
                Floor_Authorization: req.body.Floor_Authorization,
                Room_Authorization: req.body.Room_Authorization,
                RFID_Number: req.body.RFID_Number
            });
            EmployeeRecord.save().then(ret => res.json(ret));
        }
    });
});

module.exports = router;

//@route POST api/employee/remove
//@desc Receive employee information
//      to remove employee. Done via 
//      RFID tag number
router.post('/remove', (req, res) => {
    Employee.exists({RFID_Number: req.body.RFID_Number}).then(result => {
        if(result){
            Employee.findOneAndRemove({RFID_Number: req.body.RFID_Number}).then(res.json("Employee with RFID removed"));
        }
        else{
            res.json("No employee with RFID found");
        }
    });
});
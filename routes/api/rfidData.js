const express = require('express');
const router = express.Router();
//Internal logic for RFID validation and security contained in RoomController.js
const RoomController = require('../../services/RoomController');

//Import RFID model
const Employee = require('../../models/Employee');
const Room = require('../../models/Room');
const Alert = require('../../models/Alert');

//@route POST api/rfiddata
//@desc Receive RFID Update
//@access Public
router.post('/', (req, res) => {
    Room.find({Room_Number: req.body.Room_Number, Floor: req.body.Floor})
    .then(roomData => {
        const roomControl = new RoomController();
        const requestData = req.body;
        if(roomControl.isRfidInRoom(req.body.Rfid, roomData)){
            let updatedOccupantRfidArray = roomControl.removeElementFromRfidArray(req.body, roomData, Room);
            roomControl.writeEditedRfidArrayToDatabase(req.body, updatedOccupantRfidArray, Room)
            .then(res.json("Person exited room"));
        } else {
            roomControl.isRfidAssigned(requestData, Employee)
            .then(rfidValidityFlag => {
                if(rfidValidityFlag == 'invalid') {
                 res.json("RFID Not Assigned");
                 throw new Error("RFID Not Assigned");
                } 
                return requestData.Rfid;
            }).then(Rfid => {
                roomControl.checkIfAuthorized(requestData, Employee)
                .then(authFlag => {
                    if(authFlag){
                        roomControl.addRfidToRoomArray(roomData, requestData, Room).then(res.json("Rfid added"));
                    }
                    else{
                        //Here, we create an RFID alert flag
                        Alert.findOneAndUpdate({Alert_System_Key: "1"}, {Alert_Flag: "1", Alert_Type: "RFID", RFID_Number: requestData.Rfid, Floor: requestData.Floor, Room_Number: requestData.Room_Number}).then((handle) => {     
                        });
                        res.json("Not authorized");
                    }
                });       
            }).catch(err => { console.log(err) });
        }
    });
});

//@route POST api/rfiddata/getroomdata
//@desc Receive rfid floor and room to query
//      which people are in particular room
router.post('/getroomdata', (req, res) => {
    Room.find({Room_Number: req.body.Room_Number, Floor: req.body.Floor})
    .then(roomData => {
        Employee.find().where("RFID_Number").in(roomData[0].Occupant_RFID).exec(function(err, records){
            res.json(records);
        })
    });
});

module.exports = router;
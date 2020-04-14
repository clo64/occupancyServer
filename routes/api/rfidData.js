const express = require('express');
const router = express.Router();
//Internal logic for RFID validation and security contained in RoomController.js
const RoomController = require('../../services/RoomController');

//Import RFID model
const Employee = require('../../models/Employee');
const Room = require('../../models/Room');

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
                        res.json("Not authorized");
                    }
                });       
            }).catch(err => { console.log(err) });
        }
    });
});

module.exports = router;
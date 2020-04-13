const express = require('express');
const router = express.Router();
const RoomController = require('../../services/RoomController');

//Import RFID model
const Employee = require('../../models/Employee');
const Room = require('../../models/Room');

//@route POST api/rfiddata
//@desc Receive RFID Update
//@access Public
router.post('/', (req, res) => {
    Room.find({Room_Number: req.body.Room_Number, Floor: req.body.Floor}).then(roomData => {
        let roomControl = new RoomController();
        if(roomControl.isRfidInRoom(req.body, roomData)){
            console.log("Was in room");
        }
        for(i=0; i <= roomData[0].Occupant_RFID.length; i++){
            if(roomData[0].Occupant_RFID[i] == req.body.Rfid){
                //Remove element via splice
                roomData[0].Occupant_RFID.splice(i, 1);
                //Find the room's DB entry and update room array
                //to reflect new occupant
                Room.findOneAndUpdate({Room_Number: req.body.Room_Number, Floor: req.body.Floor}, {Occupant_RFID: roomData[0].Occupant_RFID}).then(res.json("Person exited room"));
                break;
            }
            else if (i == roomData[0].Occupant_RFID.length-1 || roomData[0].Occupant_RFID.length == 0){
                //See if RFID is authorized in the room
                //Employee.find({RFID_Number}).then(employeeData => {

                //})
                //RFID not found in the room's current RFID list
                //append it to the end of the RFID array
                roomData[0].Occupant_RFID.push(req.body.Rfid);
                //Find the room's DB entry and update room array
                //to reflect new occupant
                Room.findOneAndUpdate({Room_Number: req.body.Room_Number, Floor: req.body.Floor}, {Occupant_RFID: roomData[0].Occupant_RFID}).then(res.json("Person entered room"));
                break;
            }
        }
    });
});

module.exports = router;
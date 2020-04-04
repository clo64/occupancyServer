const express = require('express');
const router = express.Router();

//Import Room model
const Room = require('../../models/Room');

//@route POST api/rfiddata
//@desc Receive RFID Update
//@access Public
router.post('/add', (req, res) => {
    Room.exists({Room_Number: req.body.Room_Number, Floor: req.body.Floor}).then(result => {
        if(result){
            res.json("Room already exists");
        }
        else{
            const newRoom = new Room({
                Floor: req.body.Floor,
                Room_Number: req.body.Room_Number,
                Occupant_RFID: req.body.Occupant_RFID
            });  
            newRoom.save().then(ret => res.json(ret));        
        }
    })
});

/* *************************************************
   This is a test utility, for seeding room database
*/
router.post('/addfirst', (req, res) => {
    const newRoom = new Room({
        Floor: req.body.Floor,
        Room_Number: req.body.Room_Number,
        Occupant_RFID: req.body.Occupant_RFID
    });  
    newRoom.save().then(ret => res.json(ret)); 
});

module.exports = router;
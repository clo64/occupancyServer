const express = require('express');
const router = express.Router();

//Import Thermal Data Model
const Thermal = require('../../models/Thermal');

//@route GET api/thermaldata
//@desc  Show us thermal data for a floor and room
//@access Public
router.get('/', (req, res) => {
    //Fetch all current thermal data
    if(req.body.All == "1"){
    Thermal.find()
        .then(thermalData => res.json(thermalData))
    }
    else{
        Thermal.find({Room_Number: req.body.Room_Number, Floor: req.body.Floor})
        .then(thermalData => 
            {
                if(!thermalData.length){
                 res.json("No room, or floor match");
                }
                else{
                 res.json(thermalData);
                }
            })
        }
    });

//@route POST api/thermaldata
//@desc  POST thermal data to mongo
//@access Public
/************************************ 
 * Function needs an update, originally used to seed database
 * and provide data update services. Redundant now. 
 * New version should only update room with occupancy values.
 * HIGH on priority list. 
*/
router.post('/', (req, res) => {
    if(req.body.CreateNew == "1"){
    const newThermalData = new Thermal({
        Room_Number: req.body.RoomNumber,
        Floor: req.body.Floor,
        Number_Occupants: req.body.NumberOccupants
    })
    newThermalData.save().then(item => res.json(item));
    }
    else{
    Thermal.updateOne({RoomNumber: req.body.RoomNumber, Floor: req.body.RoomNumber},{
        NumberOccupants: req.body.NumberOccupants
    }).then(therm => res.json(therm))
    }
});

module.exports = router;
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
        Thermal.find({RoomNumber: req.body.RoomNumber, Floor: req.body.Floor})
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
router.post('/', (req, res) => {
    if(req.body.CreateNew == "1"){
    const newThermalData = new Thermal({
        RoomNumber: req.body.RoomNumber,
        Floor: req.body.Floor,
        NumberOccupants: req.body.NumberOccupants
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
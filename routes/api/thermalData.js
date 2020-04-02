const express = require('express');
const router = express.Router();

//Import Thermal Data Model
const Thermal = require('../../models/Thermal');

//@route GET api/thermaldata
//@desc  Show us thermal data for a floor and room
//@access Public
router.get('/', (req, res) => {
    Thermal.find()
        .then(thermalData => res.json(thermalData))
});

//@route POST api/thermaldata
//@desc  POST thermal data to mongo
//@access Public
router.post('/', (req, res) => {
    const newThermalData = new Thermal({
        RoomNumber: req.body.RoomNumber,
        Floor: req.body.Floor,
        NumberOccupants: req.body.NumberOccupants
    });
newThermalData.save().then(item => res.json(item));
})

module.exports = router;
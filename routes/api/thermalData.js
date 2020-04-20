const express = require('express');
const router = express.Router();


//Import Thermal Data Model
const Room = require('../../models/Room');

//@route GET api/thermaldata
//@desc  Show us thermal data for a floor and room
//@access Public
router.post('/', (req, res) => {
    //Fetch all current thermal data
    if(req.body.All == "1"){
    Room.find()
        .then(thermalData => res.json(thermalData))
    }
    else{
        Room.find({Room_Number: req.body.Room_Number, Floor: req.body.Floor})
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
 * Updates only the thermal occupants
*/
router.post('/thermalupdate', (req, res) => {
    Room.updateOne({Room_Number: req.body.Room_Number, Floor: req.body.Floor},{
        Thermal_Occupants: req.body.Thermal_Occupants
    }).then(therm => res.json(therm))
});

module.exports = router;


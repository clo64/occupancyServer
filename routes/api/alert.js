const express = require('express');
const router = express.Router();

//Import Alert DB model
const Alert = require('../../models/Alert');

//@route POST api/alert
//@desc Receives relevent alert information
//      for this release we will take only
//      one alert at a time as proof of concept
router.post('/', (req, res) => {
    Alert.findOneAndUpdate({Alert_System_Key: "1"}, req.body)
    .then(e => {
        res.json("Alert Updated");
    });
});

//@route GET api/alert
router.get('/', (req, res) => {
    Alert.findOne({Alert_System_Key: "1"}).then(result => {
        res.json(result);
    })
})

//Seed post, only used when once
//@route POST api/alert/first
router.post('/first', (req, res) => {
    const AlertRecord = new Alert({
        Alert_System_Key: "1",
        Alert_Flag: "",
        Alert_Type: "",
        RFID_Number: "",
        Floor: "",
        Room_Number: ""
    });
    AlertRecord.save().then(ret => res.json("1st Record Created"));
});

module.exports = router;

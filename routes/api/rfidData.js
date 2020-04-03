const express = require('express');
const router = express.Router();

//Import RFID model
const Rfid = require('../../models/Rfid');

//@route POST api/rfiddata
//@desc Receive RFID Update
//@access Public
router.post('/', (req, res) => {
    console.log("hi");
});

module.exports = router;
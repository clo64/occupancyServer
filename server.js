const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Thermal = require('./routes/api/thermalData');
const Rfid = require('./routes/api/rfidData');
const Employee = require('./routes/api/employee');
const Rooms = require('./routes/api/room');

const app = express();

//BodyParser
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/thermaldata', Thermal);
app.use('/api/rfiddata', Rfid);
app.use('/api/employee', Employee);
app.use('/api/room', Rooms);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Server started on port ${port}`));

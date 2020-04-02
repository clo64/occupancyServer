const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Thermal = require('./routes/api/thermalData');

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

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Server started on port ${port}`));

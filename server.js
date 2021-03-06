const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Thermal = require('./routes/api/thermalData');
const Rfid = require('./routes/api/rfidData');
const Employee = require('./routes/api/employee');
const Rooms = require('./routes/api/room');
const Alert = require('./routes/api/alert');
const multer = require('multer');
const path = require('path');
//Attempt to fix heroku static file access problem
process.env.PWD = process.cwd()

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'public/')
    },
    filename: function(req, file, cb) {
        cb(null, 'thermal.png')
    }
});

const upload = multer({ storage: storage });

const app = express();

//BodyParser
app.use(bodyParser.json());

//Serve our static thermal image
app.use('/public', express.static(process.env.PWD + '/public'));

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
app.use('/api/alert', Alert);

//TODO - relocate image handler features to the thermalData.js file
//@route POST api/thermaldata/image
//@desac POST thermal data image to server
//@access Public -> Private in future releases
app.post('/api/thermaldata/image', upload.single('image'), (req, res) => {
    res.json("Got an image");
});

//Serve statis assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

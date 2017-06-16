const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const http = require('http');

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => 
{
	console.log('Connected to database '+ config.database);
});

mongoose.connection.on('error', (err) => 
{
 console.log('Databse error: '+err);
})

const app = express();

// API route inclusion
const users = require('./routes/users');


// Port Number
app.set('port', process.env.PORT || 8000);


// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Users Routes
app.use('/users', users);

// Index Route
app.get('/', (req, res) => 
{
	res.send('Invalid endpoint');
})

// Start Server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
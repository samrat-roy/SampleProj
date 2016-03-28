var express = require('express');
var app = express();

// load all the required configs
var mongodbconfig = require('./db/mongodb');

// Registation for body parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());


// Home page
app.get('/', function (req, res) { 
    res.send('Welcome to MobileStoreService...');
});


// Register Various routes
var customerrouter = require('./routers/customerrouter');
var RatingRouter = require('./routers/RatingRouter.js');
app.use('/api', customerrouter);
app.use('/api', RatingRouter);


app.listen(1000, function (req, res) { 
    console.log('Server runnng on port 1000');
});
 
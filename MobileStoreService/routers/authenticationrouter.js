var express = require('express');

var authenticationrouter = express.Router();

authenticationrouter.use(function (req, res, next) { 

    next();

});

authenticationrouter.get

module.exports = authenticationrouter;
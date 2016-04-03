var express = require('express');
var authentication = require('../common/authentication')();
var customerrouters = express.Router();
var Customer = require('../Models/UserInfo');

// Include the Customer Controller
var customercontroller = require('../Controllers/customercontroller')();

customerrouters.use(function (req, res, next) {
    next();
});




// Get all customer
customerrouters.get('/customer/all', function (req, res) {
    var user = authentication.ValidateToken(req, res, function (err, data) {
        if (err) {
            res.status(500).send('Internal Server Error');
        }
        else {
            if (data.Status == 200) {
                customercontroller.GetAllCustomer(req, res);
            }
            else {
                res.status(401).send('UnAuthrize');
            }
        }
    });
    
});


// Get all customer
customerrouters.get('/customer/name/:name', function (req, res) {
    customercontroller.GetByName(req, res);
    
});

customerrouters.get('/customer/email/:email', function (req, res) {
    var authorization = req.headers.authorization;
    authentication.ValidateToken(authorization, function (err, data) {
        if (err) {
            res.status(500).send('Internal Server Error');
        }
        else {
            if (data.Status == 200) {
                var email = req.params.email;
                customercontroller.GetByEmail(email, data.id, function (err, data) {
                    if (err) {                       
                        res.setHeader("X-Error", err.message);
                        res.status(err.status).send(err.message);
                    }
                    else {
                        res.status(200).send(data);
                    }                
                });
            }
            else {
                res.status(401).send('UnAuthrize');
            }
        }
    });
    
});

// Search customer by query
customerrouters.get('/customer/search', function (req, res) {
    customercontroller.Searchuser(req, res);
});

// Register new customer
customerrouters.post('/customer/register', function (req, res) {
    customercontroller.RegisterUser(req, res);
});

// Update customer
customerrouters.put('/customer/update/:email', function (req, res) {
    var authorization = req.headers.authorization;   
    authentication.ValidateToken(authorization, function (err, data) {
        if (err) {
            res.status(500).send('Internal Server Error');
        }
        else {
            if (data.Status == 200) {
                Customer.mobile = req.body.mobile;
                Customer.firstname = req.body.firstname;
                Customer.lastname = req.body.lastname;
                Customer.email = req.body.email;

                customercontroller.UpdateUserInformation(Customer,function (err, data) {
                    if (err) {
                        res.setHeader("X-Error", err.message);
                        res.status(err.status).send(err.message);
                    }
                    else {
                        res.status(200).send(data);
                    }
                });
            }
            else {
                res.status(401).send('UnAuthrize');
            }
        }
    });
    //res.send('add called');
});

// Delete customer
customerrouters.delete('/customer/delete', function (req, res) {
    res.send('add called');
});


module.exports = customerrouters;
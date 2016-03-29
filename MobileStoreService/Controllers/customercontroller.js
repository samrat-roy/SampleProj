var repository = require('../repository/customerrepository')();
var ExceptionBase = require('../common/Errorfilter')();
var Unauthorized = ExceptionBase.Unauthorized();
var BadRequest = ExceptionBase.BadRequest();
var customercontroller = function () {
    var GetAllCustomer = function (req, res) {
        repository.GetAllCustomer(function (err, data) {
            if (err) {
                res.setHeader("X-Error", err.message);
                res.status(err.status).send(err.message);
            }
            else {
                res.status(200).send(data);
            }
        });   
    }
    var RegisterUser = function (req, res){
        repository.RegisterUser(req, function (err,data) {

            if (err) {
                res.setHeader("X-Error", err.message);
                res.status(err.status).send(err.message);
            }
            else {
                res.status(200).send(data);
            }

        });
    }
    var GetByName = function (req, res){
        repository.GetUserByName(req.params.name, function (err, data) {
            if (err) {                
                res.setHeader("X-Error", err.message);
                res.status(err.status).send(err.message);
            }
            else {
                res.status(200).send(data);
            }
        });

    }
    
    var GetByEmail = function (email, user, callback) {
        if (email == undefined) {
            callback(new BadRequest({ message: "BadRequest" }), null);
            return;  
        }
        if (user != email) {
            callback(new Unauthorized({ message: "Unauthorized" }), null);
            return;
        }
        repository.GetUserByEmail(email, function (err, data) {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, data);
            }
        });
    }
    
    var SearchUser = function(req, res){

        repository.SearchUser(req, function (err, data) {
            if (err) {
                res.setHeader("X-Error", err.message);
                res.status(err.status).send(err.message);
            }
            else {
                res.status(200).send(data);
            }
        });
    }
       
    return {
        GetAllCustomer : GetAllCustomer,
        RegisterUser : RegisterUser,
        GetByName : GetByName,
        Searchuser : SearchUser,
        GetByEmail : GetByEmail
    }    
}
module.exports = customercontroller; 
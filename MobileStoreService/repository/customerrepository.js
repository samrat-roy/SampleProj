var CutomerData = require('../Models/CustomerSchema')();
var mongoose = require('mongoose');
// load all the required configs
var mongodbconfig = require('../config/mongodb');


var ExceptionBase = require('../common/Errorfilter')();
var NoRecordFound = ExceptionBase.NoRecordFound();
var DatabaseConnectionError = ExceptionBase.DatabaseConnectionError();
var BadRequest = ExceptionBase.BadRequest();


var customerrepositroy = function () {
    //var CustomerModel = mongoose.model('Customer', CutomerData.Customer);
    var GetAllCustomer = function (callback) {
        var conn = mongoose.createConnection(mongodbconfig.connectionString() , mongodbconfig.options(), function (err) {
            if (err) {
                return callback(new DatabaseConnectionError({ message: "Error connecting to Database" }), null);
            }
            MyModel = conn.model('Customer', CutomerData.Customer);
            
            MyModel.find({}, function (err, resultData) {
                conn.close();
                if (err) {
                    return callback(new InternalServerError({ message: "Internal Server Error" }), null);
                }
                if (resultData.length == 0) {
                    return callback(new NoRecordFound({ message: "No Record Found" }), null);
                }
                callback(null, resultData);
            });
        });
        //CustomerModel.find({}, function (err, resultData) {
        //    callback(err, resultData);

        //    //callback(new DatabaseConnectionError({ message: "Expired Token" }), null);
        //});
    }
    
    var GetUserByEmail = function (name, callback) {
        var conn = mongoose.createConnection(mongodbconfig.connectionString() , mongodbconfig.options(), function (err) {
            if (err) {
                return callback(new DatabaseConnectionError({ message: "Error connecting to Database" }), null);
            }
            MyModel = conn.model('Customer', CutomerData.Customer);
            var jsonData = {};
            //var CustomerModel = mongoose.model('Customer', CutomerData.Customer);
            jsonData["email"] = name;
            MyModel.find(jsonData, function (err, resultData) {
                conn.close();
                if (err) {
                    return callback(new InternalServerError({ message: "Internal Server Error" }), null);
                }
                if (resultData.length == 0) {
                    return callback(new NoRecordFound({ message: "No Record Found" }), null);
                }
                callback(null, resultData);
            });
        });
    }
    var GetUserByName = function (name, callback) {
        var conn = mongoose.createConnection(mongodbconfig.connectionString() , mongodbconfig.options(), function (err) {
            if (err) {
                return callback(new DatabaseConnectionError({ message: "Error connecting to Database" }), null);
            }
            MyModel = conn.model('Customer', CutomerData.Customer);
            var jsonData = {};
            //var CustomerModel = mongoose.model('Customer', CutomerData.Customer);
            jsonData["firstname"] = name;
            MyModel.find(jsonData, function (err, resultData) {
                conn.close();
                if (err) {
                    return callback(new InternalServerError({ message: "Internal Server Error" }), null);
                }
                if (resultData.length == 0) {
                    return callback(new NoRecordFound({ message: "No Record Found" }), null);
                }
                callback(null, resultData);
            });
        });
        //var jsonData = {};
        //jsonData["firstname"] = name;
        
        //    CustomerModel.find(jsonData, function (err, resultData) {
        //        if (err) {
        //            callback(err, null);
        //        }
        //        else {
        //            callback(err, resultData);
        //        }
        //    });
    }
    
    
    var RegisterUser = function (req, callback) {
        var conn = mongoose.createConnection(mongodbconfig.connectionString() , mongodbconfig.options(), function (err) {
            if (err) {
                return callback(new DatabaseConnectionError({ message: "Error connecting to Database" }), null);
            }
            instance = conn.model('Customer', CutomerData.Customer);
            var instance = new instance();
            instance.firstname = req.body.firstname;
            instance.lastname = req.body.lastname;
            instance.email = req.body.email;
            instance.mobile = req.body.mobile;
            
            instance.save(function (err) {
                if (err) {
                    callback(err, null);
                }
                else {
                    callback(null, "Customer added");
                }
            });
        });
        //var instance = new CustomerModel();
        //instance.firstname = req.body.firstname;
        //instance.lastname = req.body.lastname;
        //instance.email = req.body.email;
        //instance.mobile = req.body.mobile;
        //instance.save(function (err) {
        //    callback(err);
        //});
    }
    
    var UpdateUserInformation = function (User, callback) {
        var conn = mongoose.createConnection(mongodbconfig.connectionString() , mongodbconfig.options(), function (err) {
            if (err) {
                return callback(new DatabaseConnectionError({ message: "Error connecting to Database" }), null);
            }
            MyModel = conn.model('Customer', CutomerData.Customer);
            var jsonData = {};
            jsonData["email"] = User.email;
            MyModel.findOne(jsonData, function (err, resultData) {
                if (err) {
                    return callback(new InternalServerError({ message: "Internal Server Error" }), null);
                }
                if (resultData.length == 0) {
                    return callback(new NoRecordFound({ message: "No Record Found" }), null);
                }
                resultData.firstname = User.firstname;
                resultData.lastname = User.lastname;
                resultData.email = User.email;
                resultData.mobile = User.mobile;
                resultData.save();
                callback(null, "Customer record updated");
               
            });
        });
    }
    
    var SearchUser = function (req, callback) {
        var user_id = req.query.id;
        var firstname = req.query.firstname;
        var lastname = req.query.lastname;
        var mobile = req.query.mobile;
        var email = req.query.email;
        var str = {};
        if (user_id != undefined) {
            str["_id"] = user_id;
        }
        if (firstname != undefined) {
            str["firstname"] = firstname;
        }
        if (lastname != undefined) {
            str["lastname"] = lastname;
        }
        if (mobile != undefined) {
            str["mobile"] = mobile;
        }
        if (email != undefined) {
            str["email"] = email;
        }
        
        var conn = mongoose.createConnection(mongodbconfig.connectionString() , mongodbconfig.options(), function (err) {
            if (err) {
                return callback(new DatabaseConnectionError({ message: "Error connecting to Database" }), null);
            }
            MyModel = conn.model('Customer', CutomerData.Customer);
            
            MyModel.find(str, function (err, resultData) {
                conn.close();
                if (err) {
                    return callback(new InternalServerError({ message: "Internal Server Error" }), null);
                }
                if (resultData.length == 0) {
                    return callback(new NoRecordFound({ message: "No Record Found" }), null);
                }
                callback(null, resultData);
            });
        });

        //CustomerModel.find(str, function (err, resultData) {
        //    callback(err, resultData);
        //});

    }
    return {
        GetAllCustomer : GetAllCustomer,
        RegisterUser : RegisterUser,
        GetUserByName : GetUserByName,
        SearchUser : SearchUser,
        GetUserByEmail : GetUserByEmail,
        UpdateUserInformation : UpdateUserInformation
    }
};
module.exports = customerrepositroy;
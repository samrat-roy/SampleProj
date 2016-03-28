var request = require('request');
var request = require('request');

var ExceptionBase = require('../common/Errorfilter')();
var Unauthorized = ExceptionBase.Unauthorized();

var authentication = function () {
    var user = {
        "id" : "",
         "Status" : ""
    };
    var userinfo = function (){
        return user;
    }
    var ValidateToken = function (authorization,callback) {
        try {
            var token = {};
            token["AccessToken"] =  authorization;
            request({
                url: "http://localhost/MobileStoreService/api/ValiadteToken",
                method: "POST",
                headers: {
                    "content-type": "application/json",  
                    "Accept" : "application/json"// <--Very important!!!
                },
                body: JSON.stringify(token)
            }, function (error, response, body) {
                if (error) {
                    callback(error, null);
                }
                else {
                    //console.log(response.statusCode); 
                    user.Status = response.statusCode;
                    if (response.statusCode == 200) {
                        user.id = JSON.parse(body).UserId;
                    }
                    //console.log(user);
                    callback(null, user);
                }
            //console.log(user);
            });
        }
        catch (err) {
            callback(err, null);
        }
    //    request({
    //        uri: "http://localhost/MobileStoreService/api/ValiadteToken",
    //        method: "POST",
    //        form: {
    //            name: "Bob"
    //        }
    //    }, function (error, response, body) {
    //        if (error) {
    //            console.log(error);
    //        }
    //        console.log(body);
    //    });
        
    }
    
    return {
        ValidateToken : ValidateToken,
        userinfo : userinfo
    }
}
module.exports = authentication; 
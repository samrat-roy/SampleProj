var mssql = require('mssql');
var Rating = require('../Models/Rating');
var config = require('../config/SQLConnection');

var RatingRepository = function () {   
    mssql.connect(config(), function (err) {     
        if (err) { console.dir(err) }        ;
    
    });
    
    var SaveRatingForProduct = function(Rating, callback) {
        var request = new mssql.Request();
        request.input('ProductId', mssql.Int, Rating.ProductId);
        request.input('RatingSubject', mssql.VarChar, Rating.Subject);
        request.input('Rating', mssql.Int, Rating.RatingPoint);
        request.input('RatingDesc', mssql.VarChar, Rating.Description);
        request.input('UserName', mssql.VarChar, Rating.UserName);
        request.execute('SaveRatingByProductId' , function (err, recordset, returnvalue) { 
            if (err) {
                callback(err, null);
            } 
            else {
                callback(null, "Success");
            }
        });
        


    }

    var GetRatingByProductId = function (id, callback) {
        var request = new mssql.Request();        
        request.input('productId', mssql.Int, id);
        request.execute('GetRatingByProductId' , function (err, recordset,returnvalue) {
            // ... error checks 
            if (err) {
                callback(err, null);
            } 
            else {
                var Ratings = {
                    Rating: []
                };
                
                var result = recordset[0];
                         
                for (i = 0; i < result.length ; i++) {
                    Rating.Subject = result[i].RatingSubject;
                    Rating.RatingPoint = result[i].Rating;
                    Rating.Description = result[i].RatingDesc;
                    Rating.ProductId = result[i].ProductId;
                    Rating.UserName = result[i].UserName;
                    Ratings.Rating.push(Rating);
                }                
                callback(null, Ratings);
            }
		
        });
    }

    return {

        GetRatingByProductId : GetRatingByProductId,
        SaveRatingForProduct : SaveRatingForProduct
    }


}

module.exports = RatingRepository;
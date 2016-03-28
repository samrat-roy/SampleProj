var RatingRepository = require('../repository/RatingRepository')();
var Rating = require('../Models/Rating');

var RatingController = function () {

    var GetRatingsByProductId = function (req,callback){
        RatingRepository.GetRatingByProductId(req.params.productid, function (err, data) {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null,data);
            }
        });
    }
    
    var SaveRatingForProduct = function (req, callback){
        Rating.ProductId = req.body.ProductId;
        Rating.RatingPoint = req.body.RatingPoint;
        Rating.Subject = req.body.Subject;
        Rating.UserName = req.body.UserName;
        Rating.Description = req.body.Description;
        RatingRepository.SaveRatingForProduct(Rating, function (err, result) { 
        
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, "Rating Inserted Successfully");
            }        
        });

    }

    return{
        GetRatingsByProductId : GetRatingsByProductId,
        SaveRatingForProduct : SaveRatingForProduct
    }


}

module.exports = RatingController;


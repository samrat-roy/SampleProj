var express = require('express');
var RatingController = require('../Controllers/RatingController')();

RatingRouter = express.Router();

RatingRouter.use('/', function (req, res, next) {
    next();
});

RatingRouter.get('/Ratings/:productid', function (req, res){
    RatingController.GetRatingsByProductId(req, function (err, result) {
        if (err) { res.status(500).send(err); }
        else { res.status(200).send(result);}        
    });
    
});

RatingRouter.post('/Ratings/Save', function (req, res) {
    RatingController.SaveRatingForProduct(req, function (err, result) {
        if (err) { res.status(500).send(err); }
        else { res.status(200).send(result); }
    });

});

module.exports = RatingRouter;
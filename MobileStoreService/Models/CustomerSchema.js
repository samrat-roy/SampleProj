var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Customer = function (){

    var Customer = new Schema({
        customerId    : ObjectId,
        firstname     : String,
        lastname      : String,
        email         : String,
        mobile        : String
    });

    return {

        Customer: Customer
    };
}

module.exports = Customer;
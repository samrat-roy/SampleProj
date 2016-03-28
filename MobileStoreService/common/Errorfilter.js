var errors = require('errors');
// module.exports = function(){
// return DatabaseConnectionError = errors.create({
// name: 'DatabaseConnectionError',
// defaultExplanation: 'Unable to connect to configured database.',
// defaultResponse: 'Verify the database is running and reachable.'
// });
// }
var Errorfilter = function () {
    var DatabaseConnectionError = function () {
        return errors.create({
            name: 'DatabaseConnectionError',
            defaultExplanation: 'Unable to connect to configured database.',
            defaultResponse: 'Verify the database is running and reachable.',
            code : 500
        });
    }
    var NoRecordFound = function () {
        return errors.create({
            name: 'NoRecordFound',
            defaultExplanation: 'No Record Found in database.',
            defaultResponse: 'No Record Found in database.',
            code : 404
        });
    }
    var InternalServerError = function () {
        return errors.create({
            name: 'InternalServerError',
            defaultExplanation: 'Internal Server Error',
            defaultResponse: 'Internal Server Error',
            code : 500
        });
    }
    var BadRequest = function () {
        return errors.create({
            name: 'NoRecordFound',
            defaultExplanation: 'Bad request.',
            defaultResponse: 'Bad request.',
            code : 400
        });
    }
    var Unauthorized = function () {
        return errors.create({
            name: 'Unauthorized',
            defaultExplanation: 'User Unauthorized to access',
            defaultResponse: 'User Unauthorized to access',
            code : 401
        });
    }
    return {
        DatabaseConnectionError : DatabaseConnectionError,
        NoRecordFound: NoRecordFound,
        BadRequest : BadRequest,
        InternalServerError : InternalServerError,
        Unauthorized : Unauthorized
    }
}
module.exports = Errorfilter;

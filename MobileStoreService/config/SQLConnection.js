//module.exports = function () {
//    return config = {
//        user: 'testUser',
//        password: 'testUser',
//        server: 'VDI01T8AHSC467', // You can use 'localhost\\instance' to connect to named instance 
//        database: 'MobileStore',
        
//        options: {
//            encrypt: false // Use this if you're on Windows Azure 
//        }
//    }
//};

module.exports = function () {
    return config = {
        user: 'testUser',
        password: 'testUser',
        server: 'BLRSROY101601\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance 
        database: 'MobileStore',
        port: 1433,
        
        options: {
            encrypt: false // Use this if you're on Windows Azure 
        }

        
    }
};
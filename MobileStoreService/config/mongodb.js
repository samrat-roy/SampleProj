 module.exports = {
     connectionString : function (){
         return 'mongodb://localhost:27017/MobileStore';     
    },

    options : function (){
        return {
            server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 3000 } }, 
            replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 3000 } }
        };
    }
    
 };


//module.exports = {
//    connectionString : function (){
//        return 'mongodb://samrat:samrat@ds015929.mlab.com:15929/testmobilestore';     
//    }
//};
var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/mongoosesample';

mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () {    
    console.log('\nMongoose connection open to ' + DB_URL);  
});    

mongoose.connection.on('error',function (err) {    
    console.log('\nMongoose connection error: ' + err);  
});    
 
mongoose.connection.on('disconnected', function () {    
    console.log('\nMongoose connection disconnected');  
});

module.exports = mongoose;
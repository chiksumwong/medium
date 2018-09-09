var User = require("../models/user.js");

function insert() {
 
    var user = new User({
        username : 'Tracy McGrady',                
        userpwd: 'abcd',                          
        userage: 37,                              
        logindate : new Date()                      
    });

    user.save(function (err, res) {

        if (err) {
            console.log("\nError:" + err);
        }
        else {
            console.log("\nRes:" + res);
        }

    });
}

insert();
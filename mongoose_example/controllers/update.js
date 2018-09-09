var User = require("../models/user.js");

function update(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var updatestr = {'userpwd': 'zzzz'};
    
    // Model.update(conditions, update, [options], [callback])
    User.update(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

function findByIdAndUpdate(){
    var id = '56f2558b2dd74855a345edb2';
    var updatestr = {'userpwd': 'abcd'};
    
    // Model.findByIdAndUpdate(id, [update], [options], [callback])    
    User.findByIdAndUpdate(id, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

function findOneAndUpdate(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var updatestr = {'userpwd': 'abcd'};
    
    // Model.findOneAndUpdate([conditions], [update], [options], [callback])
    User.findOneAndUpdate(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}


update();
// findByIdAndUpdate();
//findOneAndUpdate()
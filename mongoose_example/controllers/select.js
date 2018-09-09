var User = require("../models/user.js");

function getByConditions(){
    var wherestr = {'username' : 'Tracy McGrady'};
    
    // Model.find(conditions, [fields], [options], [callback])
    User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

function getByConditions_withOption(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var opt = {"username": 1 ,"_id": 0};//輸出只會有'username'字段，1表示查詢輸出該字段，0表示不輸出
    
    // Model.find(conditions, [fields], [options], [callback])
    //options -> 設置要查詢輸出的字段
    User.find(wherestr, opt, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

// getByConditions();
getByConditions_withOption();
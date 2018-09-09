var User = require("../models/user.js");

function del(){
    var wherestr = {'username' : 'Tracy McGrady'};
    
    // Model.remove(conditions, [callback])
    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

// 　　Model.findByIdAndRemove(id, [options], [callback])　　　　　　

// 　　Model.findOneAndRemove(conditions, [options], [callback])

del();
// findByIdAndRemove()
// findOneAndRemove()
let figlet = require("figlet");

figlet("HELLO!!!",function err(err,data) {
    if(err){
        console.log("error");
        return;
    }
    console.log(data);
})
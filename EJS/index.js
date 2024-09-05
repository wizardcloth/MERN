let express = require("express");
let app = express();

let port = 3000;

let path = require("path");
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));


app.get("/",(req,res)=>{
    //& assuming value of dice is coming from database
    let diceturn = Math.floor(Math.random() * 6) + 1;
    res.render("home.ejs",{diceturn});
})
app.get("/:username",(req,res)=>{
    const follower = ["adam","bob","steve","abc"];
    console.log(req.params);
    let {username} = req.params;
    //& no need to pass diff id and value 
    //& keep id and value same for object here as we can see in username both are same
    //& so we can write only once
    res.render("insta.ejs",{username,followers:follower});
})

app.get("/user/:name",(req,res)=>{
    let  username = req.params;
    let instadata = require("./data.json");
    console.log(instadata);

    //* normally we use insta["username"] for accessing object value but here it is already in string
    let data = instadata[username.name];
    console.log(data);
    if (data) {
        res.render("catdog.ejs",{data});
    }else{
        res.render("error.ejs");
    }
})



// app.get("/",(req,res)=>{
//     res.send("you are at home page");
// })
app.listen(port,()=>{
    console.log("server is listening");
})

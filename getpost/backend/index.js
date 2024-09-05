let express = require("express");
let app = express();

let port = 3000;

//& these are known as middle wares
//* must write to get data from post method
app.use(express.urlencoded({extended:true}));
//* if data is in json format
app.use(express.json());

app.listen(port,()=>{
    console.log("listening..");
})

app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    console.log(req.query);
    res.send(`${user} ARE USING GET METHOD and PASSWORD is ${password}`)
})
app.post("/register",(req,res)=>{

    //& by default req.body is undefined until we parse the data using middlewares
    
    let {user,password} = req.body;
    console.log(req.body);
    res.send(`${user} ARE USING GET METHOD and PASSWORD is ${password}`)
})
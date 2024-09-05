const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log("app is listening at port " + port);
})

//* app.use

// app.use((req,res)=>{
//     console.log("request recived");
//     // res.send("this is a text response");

//     //& object is converted into json form

//     // res.send({
//     //     about : "this object based response converted into json form",
//     //     name : "apple",
//     //     color : "red",
//     // });

//     //& code based response

    // let code = "<h1>hello</h1>"
// //     res.send(code);
// // })

//* app.get
//& use method do not specify path
//& get method is use to specify paths
//& cannot use for million of pages or user

app.get("/",(req,res)=>{
    res.send("you are at home page");
})

app.get("/about",(req,res)=>{
    res.send("you are at about page");
})

app.get("/help",(req,res)=>{
    res.send("you are at help page");
})


// app.get("*",(req,res)=>{
//     res.send("you are at unknown path");
// })

// app.post("/" , ()=>{
//     res.send("you are at home page")
// })

//*app.get with path parameters

// app.get("/:user/:name",(req,res)=>{
//     console.log(req.params);
//     let {name} = req.params;
//     console.log({name});
//     res.send("welcome to page of " + name);
// })
// app.get("/search",(req,res)=>{
//     let {q} = req.query;
//     if (!q) {
//         res.send("nothing searched");
//     }
//     res.send("The query is " + q);
// })















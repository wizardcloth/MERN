const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js")
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

let port = 8080;

main()
    .then(() => {
        console.log("connection is successfull");
    }).catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect('mongodb://127.0.0.1/chatapp');
}


app.get("/", (req, res) => {
    res.send("working");
})

app.get("/chats", async (req, res) => {
    //use await otherwise error
    let chats = await chat.find();
    // console.log(chats);
    res.render("chats.ejs", { chats });
})

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})
app.post("/chats", (req, res) => {
    let { from, to, msz } = req.body;
    let newchat = chat({
        from: from,
        to: to,
        msz: msz,
        created_at : new Date(),
    });
    console.log(newchat);
    newchat.save()
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
       res.redirect("/chats");
    // res.send("working");
})

app.delete("/chats/:id",async (req,res)=>{
    let {id} =  req.params;
    let deletedchat = await chat.findByIdAndDelete(id);
    // res.send("working");
    // console.log(deletedchat);
    res.redirect("/chats")
})





app.listen(port, () => {
    console.log("app is listening...")
})


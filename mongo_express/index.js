const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js")

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

const user = chat({
    from: "sob",
    to: "dob",
    msz: "to unplug the robe",
    created_at: new Date()
})

user.save()
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    });

app.get("/", (req, res) => {
    res.send("working");
})

app.listen(port, () => {
    console.log("app is listening...")
})
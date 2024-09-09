const mongoose = require("mongoose");
const chat = require("./models/chat.js")


main()
    .then(() => {
        console.log("connection is successfull");
    }).catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect('mongodb://127.0.0.1/chatapp');
}



const user = [
    {
        from: "sob",
        to: "dob",
        msz: "to unplug the robe",
        created_at: new Date()
    },
    {
        from: "tub",
        to: "cup",
        msz: "to unplug the spoon",
        created_at: new Date()
    },
    {
        from: "turb",
        to: "cwup",
        msz: "to unplug the spoown",
        created_at: new Date()
    },
    {
        from: "tube",
        to: "cupid",
        msz: "to unplug the doon",
        created_at: new Date()
    },
    {
        from: "trub",
        to: "cgup",
        msz: "to unplug the pool",
        created_at: new Date()
    }
];

chat.insertMany(user);
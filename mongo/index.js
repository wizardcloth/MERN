const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connected successfully");
    }).catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
const User = mongoose.model("User", userschema);

//^ create
// const user1 = User({ name: "rob", email: "jon@gmail.com", age: 50 });
// const user2 = User({ name: "rob", email: "jon@gmail.com", age: 50 });

//&or

// User.insertMany([{name: "mob", email: "mon@gmail.com", age: 50},{name: "rmb", email: "jmmh@gmail.com", age: 50}])



// user.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

//^ read
//&find

// User.find({}).then((res)=>{
//     console.log(res);
// });

//&some condition
// User.find({name : "mob"}).then((res)=>{
//     console.log(res);
// });
//& or
// User.find({$and:[{age : 50},{name:"mob"}]}).then((res)=>{
//     console.log(res);
// });

//& find by id
// User.findById("66d45e5640114b7ca6345b7a")
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// //&or

// User.findOne({_id:"66d45e5640114b7ca6345b7a"})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

//^ UPDATE

// User.updateOne({name:"mob"},{age:5})
// .then((res)=>{
//     console.log(res);
// });

// User.updateMany({age:50},{age:100});
//&new is the option when false give old document and true give updated document
// User.findOneAndUpdate({age:50},{age:500},{new:true}).then((res)=>{console.log(res)});

// User.findByIdAndUpdate("66d4415a8f29fbb656439d4f",{age:0},{new:true}).then((res)=>{console.log(res)});

//^ delete



// method 1 callback chaning

// function dataSave(Data, success, faliure) {
//     let data = Math.floor(Math.random() * 10) + 1;
//     if (data > 5) {
//         success();
//     } else {
//         faliure();
//     }
// }
// dataSave("some data",
//     function success() {
//         console.log("win");
//         dataSave("new data",
//             function success() {
//                 console.log("win")
//             }, function faliure() {
//                 console.log("lose");
//             })
//     },
//     function faliure() {
//         console.log("lose");
//     });

//promise

function dataSave(Data, resolve, reject) {
    return new Promise((resolve, reject) => {
        let data = Math.floor(Math.random() * 10) + 1;
        if (data > 5) {
            resolve("win and data is : " + data);
        } else {
            reject("lose and data is : " + data);
        }
    })
}

dataSave("yep")
.then((resolve)=>{
    console.log("you win");
    console.log(resolve);
    return dataSave("new");
})
.then((resolve)=>{
    console.log("you winn");
    console.log(resolve);
})
.catch((reject)=>{
    console.log("you lose");
    console.log(reject);
})
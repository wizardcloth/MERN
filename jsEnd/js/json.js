let obj = {
    name : "student-1",
    class : "0"
}
let jsondata = JSON.stringify(obj);
console.log(jsondata);

let test = `{"name":"student-1","class":"0"}`;
console.log(JSON.parse(test));

let url = "https://catfact.ninja/fact";

//api return some header and respone is fullfilled in form of redable stream
//to get data we use json form
//fetch and json both return a promise

// fetch(url)
// .then((res)=>{
//     console.log(res);
// })
// .catch(()=>{
//     console.log("ERROR");
// });

// fetch(url)
// .then((res)=>{
//     console.log(res)
//     res.json().then((data) => {
//         console.log(data);
//         console.log(data.fact);
//     })
// })
// .catch((err)=>{
//     console.log("ERROR : " + err);
// });
// or
// fetch(url)
// .then((res)=>{
//     console.log(res)
//     return res.json()
//     })
// .then((data) => {
//         console.log(data);
//         console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("ERROR : " + err);
// });

//* or

// async function demo() {
//     try{
//         let res = await fetch(url);  
//         let data = await res.json();
//         console.log(data.fact);
//         let res2 = await fetch(url);  
//         let data2= await res2.json();
//         console.log(data2.fact);
//     }
//     catch(err){
//         console.log("ERROR : " + err);
//     }
//     console.log("bye");
// }
// demo();
// console.log("hello");

//* or

// async function demo2(){
//     try {
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     } catch (error) {
//         console.log("error found");
//     }
// }
// demo2();

// &  using  headers

// let url2 = "https://icanhazdadjoke.com/";
// async function joke() {
//     try {
//         let config = {headers : {Accept : "text/plain"}};
//         let res = await axios.get(url2,config);
//         console.log(res.data)
//     } catch (error) {
//         console.log("error caught");
//     }
// }
// joke();
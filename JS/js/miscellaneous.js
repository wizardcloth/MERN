//arrow function
let cube = (a,b) => {
    console.log(Math.pow(a,b))
};
cube(2,3);
//no need to use paranthesis for single args
let floor = a => {
        console.log(Math.floor(a))
};
cube(2,3);
floor(12.22);

//with no return keyword and single value 
//implicit return for single value
let mul = (a,b) => a*b;
console.log(mul(12,23));

//set time out
console.log("hello");

setTimeout(function set(){
    console.log("hellooo")
},2000);
// or
setTimeout(() => {
    console.log("hellooo")
},2000);

console.log("hello");

// let id = setInterval(() => {
//     console.log("no more");
// }, 3000);
// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

let sq = (a) => (a*a);
console.log(sq(4));

let id1 = setInterval(() => console.log("hello world!"), 2000);
setTimeout(() => {
    clearInterval(id1)
    console.log("clear interval ran")
},10000)
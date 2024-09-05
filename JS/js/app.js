console.log("hello world!");
let a = 10 ;
let b = 5 ;
let output = "The output is " + (a + b);
let out = `The output is ${a + b}`;
console.log(output);
console.log(out);
console.error("this is an error");
console.warn("this is an error");

// alert("hello");
// let firstnames =  prompt("enter the first name");
// let lastnames =  prompt("enter the last name");
// console.log(firstnames , lastnames);

// let pass = prompt("enter the pass");
// console.log(pass.trim());     //create a new string don't affect original value

//  **STRINGS** 

let names = "IloveCoding";
let newname = console.log(names.toUpperCase())
// console.log(names.toLowerCase())
console.log(names.indexOf("love"))   //work on first occurance
console.log(names.trim().toLowerCase());
console.log(names.slice(1,5))
console.log(names.slice(1,names.length))
console.log(names.slice(-6))
console.log(names.substring(1,5))
console.log(names.replace("love","do")) //work on first occurance
console.log(names * 3) //do not work
console.log(names.repeat(3)) //do not work




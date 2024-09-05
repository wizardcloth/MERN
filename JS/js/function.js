table(2);
hello();
random();
random();
random();
test(18);

function hello(){
    console.log("hello world!")
}

function table(n) {
    for (let index = 1; index <= 10 ; index++) {
        console.log(index * n);
    }
}

function random() {
    const value = Math.floor(Math.random()*6)+1;
    console.log(value);
}

//order is important while passing values 
//here js will store age in var name due to order
function test(name,age) {    
    console.log(name,age);

}
//scope
function fun1() {
    let a = 10;
    console.log("hello");
    function fun2() {
    console.log("hello");
    console.log(a);  //works from outside to inside
}

fun2(); // lexical scope 
}
fun1();
// fun2();  // not accissible outside the fun

//arrow function and function expression are similar in syntax
let cube = (a,b) => {
    console.log(Math.pow(a,b))
}
//FUNCTION EXPRESSION
let demo = function(a,b) {
    return a + b;
}
console.log(demo(3,1));
demo = function(params) {  // just like variable updation is possible
    console.log("hello");
}
demo();
console.log(demo);

//higher order function
function outer(func,count) {
    for (let index = 0; index < 5; index++) {
        func();
    }

}
function somefun(){
    console.log("hello");
}
let smaller = function() {
    console.log("hello");
}
outer(somefun,5);
outer(function(){console.log("namste")},10);

// HIGH ORDER FUNCTION
function oddeven(Request) {
    if (Request == "odd") {
        return function odd(n) {
            console.log(!(n % 2 == 0));
        }
    } else if(Request == "even") {
        return function even(){
            console.log(n % 2 == 0);
        }
    }else{
        console.log("wrong request");
    }
}
let Request = "odd";
let fun = oddeven(Request);
fun(6);

//METHODS (Functions inside objects)

const calculator = {
    add : function (a,b) {
        return a+b;
    },
    sub : function(a,b){
        return a - b;
    },
    mul : function(a,b){
        return a * b;
    },
    div : function(a,b){
        return a / b;
    },   
}
let result = calculator.mul(2,3);
console.log(result);

//or shorthand way
const Calculator = {
    add(a,b) {
        return a+b;
    },
    sub(a,b){
        return a - b;
    },
    mul(a,b){
        return a * b;
    },
    div(a,b){
        return a / b;
    },   
}
let Result = calculator.mul(2,3);
console.log(Result);

//use this keyword for methods
const a =  {
     a : 10,
     b : 20,
    inner : function(){
        console.log(this.a+this.b);
    }
}
a.inner();


try {
    console.log("hello");
    console.log("hell");
    console.log(a);
    console.log("hel");
    console.log("he");
}catch (err) {
    console.log("if error occur");
    console.log("error is : " + err);
}
//these methods take call back as an input so these are high order function

//for each
let arr = [1,2,3,4,5];
arr.forEach((el) => {
    console.log(el);
})

let obj = [
    stu1 = {
        Name : "abc",
        Marks : 98,
        },
    stu2 = {
        Name : "pqr",
        Marks : 97,
    },
    stu3 = {
        Name : "bac",
        Marks : 99,
    },
];
obj.forEach((el) => {
    console.log(el.Name);
})

let obj2 = {
    stu1 : [
        Name = "abc",
        Marks = 98,
        ],
    stu2 : [
        Name = "pqr",
        Marks = 97,
    ],
    stu3 : [
        Name = "bac",
        Marks = 99,
    ],
};
console.log(obj2.stu2)

let arr5 = [1,2,3,4,5];
arr.forEach((el) => {
    console.log(el * el)
})

// MAP method
let ob = arr5.map((el) => {
    return(el *el);
})
console.log(ob);

// FILTER method

let ab = arr5.filter((n) => {
   return (n % 2 == 0)
});
console.log(ab);

//every method similar to logical and
//similarly some method like logical or
[1,2,3,4,5].every((el) => {
    console.log(el % 2 == 0);
})

// reduce method
let final = arr5.reduce((res,el) =>
    (res + el)    //use square bracket when returning a value or use return keyword
)
console.log(final);

//default parameter
//wrong format (a=2,b) for single parameter
function test(a,b=2) {
    console.log(a + b);
}
test(1);

//spread method
//... to spread arr or string 
let array = [19,27,37,4,6,51]
console.log(Math.max(...array));
let z = "hello";
console.log(...z);

//spread method for object literal
let data = {
    stu1 : "abc",
    marks : 97,
};
let datacopy = {...data,id : 256};
console.log(datacopy);

// arr to object literal similarly string to object literal
let obj1 = {...array};
console.log(obj1);

//rest method opp of spread : collect things in single arr
function name(...arg) {
    return arg.reduce((sum,el) => (sum + el));
}

let student= {
    name : "abc",
    class : "pqr",
    id : 0,
}

let {name : newname,city = "pune"} = student;

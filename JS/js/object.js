//normal array declareation
//output is not random
let arr = ["yellow","blue","green"];
console.log(arr);

//object literal 
//output is random
const student = {
    name: "abcd",
    marks: 90,
    class: [1,2,3,4,5]
};
console.log(student);
console.log(student.class);
//or
console.log(student["name"]); //better when storing values in variable

//add,update,delete
student.marks = "A+";
student.sec = "c";
delete student.class;
console.log(student);

//nested object
const students = {
    student1:{
        name: "abcd",
        marks: 90,
    },
    student2 : {
        name: "pqrs",
        marks: 85,
    }
};
console.log(students);
console.log(students.student1.marks);

//array obj
const studentArr = [
    student1 = {
        name: "abcd",
        marks: 90,
    },
    student2 = {
        name: "pqrs",
        marks: 85,
    }
];
console.log(studentArr[0])
console.log(studentArr[1].name);
console.log(studentArr[1].name = "hgf");

//MATHS OBJECT
console.log("MATHS METHODS");
console.log( Math.PI);
console.log( Math.abs(12.33)); //gives absolute value
console.log( Math.abs(-12));
console.log(Math.pow(2,2)); //power of num
console.log(Math.floor(12.9991)); //less than or equal value or nearest smallest value
console.log(Math.floor(-5.00009));   //more than or equal value or nearest largest value
console.log(Math.ceil(5.0001));
console.log(Math.ceil(-5.99999));
console.log(Math.random());

for (let index = 0; index < 5; index++) {
    console.log(Math.floor(Math.random() * 10) + 1)
}












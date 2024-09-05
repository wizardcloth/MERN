let arr  = [1,2,"hello",4,5];
console.log(arr);   
console.log(arr.reverse());   
console.log(arr[2].length);   
console.log(arr[2][0]);   
console.log(arr.length);   
arr[2] = "hi";
// arr[10] = "hi" //dynamic
console.log(arr); 
arr.push("hello","jj");   //add element to start
console.log(arr.pop()) ; //remove last element
console.log(arr);  
arr.unshift(0,12);  //adds first element
console.log(arr);  
console.log(arr.shift());  //remove first elemnt
console.log(arr.indexOf("hello"));
console.log(arr.includes(212));

let arr2 = [1,2,3];
arr2.concat(arr); //DO NOT CHANGE ORIGINAL VALUE so use
console.log(arr2.concat(arr)); //direct print will work
let value = arr2.concat(arr);
console.log(value);


let arr3 = [1,2,3,4,5,6,7,8];
console.log(arr3.slice(0,5)); //dont affect original  arr
arr3.reverse();
console.log(arr3.sort());  //use in case of character or string only not numbers
arr3.splice(5); //affect original  arr
console.log(arr3);
arr3.splice(0,1);
console.log(arr3);
let arr4 = ["hi","hii","hiii","hello"];
arr4.splice(1,1,"hl","hl");
console.log(arr4);

//nested array
let arr5 = [[1,2],[3,4],[4,5]];
console.log(arr5);
console.log(arr5[2][1]); //similar in string


const arr6 = [1,2,3];






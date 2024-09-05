//use log to print and dir to access properties
console.log( document.querySelectorAll("p")[0]);
console.log(document.querySelector("p")); 

let para = document.querySelectorAll("p")[0];
console.log(para.innerText); // return text shown on screen
console.log(para.innerHTML); // return code writtern on file with tags
console.log(para.textContent); // return file text with hidden attribute

//getter an setters
let img = document.querySelector("img");
console.log(img.getAttribute("src"));
img.setAttribute("src","assets/creation_1.png");
console.log(img.getAttribute("src"));

//style selector can only set inline style so not frequently used
let heading = document.querySelectorAll(".box a");
heading[0].style.background = "yellow";
for (let index = 0; index < heading.length; index++) {
    heading[index].style.color = "red";
}

//class list methods : add,remove,toggle,contains 
let box = document.querySelectorAll(".box");
for (const iterator of box) {
    console.log(iterator.classList.toggle("pink"))
}

//navigation on page
let paragraph = document.querySelectorAll("p");
console.log(para.parentElement);
console.log(para.childElementCount);
console.log(para.nextElementSibling);

//element creation
let Box = document.querySelector(".box");
let btn = document.createElement("button");
btn.innerText = "click";
Box.appendChild(btn);
btn.append(" on this");
let p = document.createElement("p");
p.append("this is an paragraph"); //in last/anystring/
Box.prepend(p);  // in start

let newbtn = document.createElement("button");
let newbtn1 = document.createElement("button");
let newbtn2= document.createElement("button");
let newbtn3 = document.createElement("button");
newbtn.append("new button");
newbtn1.append("new button");
newbtn2.append("new button");
newbtn3.append("new button");
para.insertAdjacentElement("beforebegin",newbtn);
para.insertAdjacentElement("afterbegin",newbtn1);
para.insertAdjacentElement("afterend",newbtn2);
para.insertAdjacentElement("beforeend",newbtn3);

//remove an element
let image = document.querySelector("img");
let body = document.querySelector("body");
// image.remove(); 
// body.removeChild(image);


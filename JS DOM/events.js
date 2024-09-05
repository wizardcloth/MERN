//in normal method single fun can be executed at once
let btn = document.querySelectorAll("button");
// for (btns of btn) {
//     btns.onclick = sayhello;
// }

//     function sayhello() {
//     console.log("button was clicked");
// }

//event listeners
for (const btns of btn) {
    btns.addEventListener("mouseover",say);
    btns.addEventListener("mouseover",tell);
}
function say() {
    console.log("say hello");
}
function tell() {
    console.log("tell a lie");
}

let para = document.querySelector("p");
para.addEventListener("click",() => {
    console.log("hello world");
})

//this in event listener
let button = document.querySelector("button");
button.addEventListener("click",function test(){
    console.dir(this);    
});

//key board input 
let key = document.querySelector("input");
key.addEventListener("keydown",function test(event) {
    console.log("key was pressed");
    console.log("key is : " + event.key);
    console.log("coded is : " + event.code);
})

let input = document.querySelector("form");
input.addEventListener("submit",function (event){
    event.preventDefault();
    console.log("key was pressed");
})
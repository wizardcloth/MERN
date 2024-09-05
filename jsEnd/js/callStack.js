//js is single thereded but browser can hold perform multiple task as coded in c++ or java
//so operation like set time out holded by browser and then put in call stack later

let h1 = document.querySelector("h1");

//time incease problem per sec but works

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000)
// setTimeout(()=>{
//     h1.style.color = "green";
// },2000)
// setTimeout(()=>{
//     h1.style.color = "blue";
// },3000)

//more optimized but if first fails other will still work

// function colorChange(color,delay) {
//     setTimeout(()=>{
//         h1.style.color = color;
//     },delay);
// }

// colorChange("red",1000);
// colorChange("green",2000);
// colorChange("blue",3000);

//more optimized callback chaning
//used to show dependency on each other
// function colorChange(color, delay,nextcolor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         nextcolor();
//     }, delay);
// }
// colorChange("red",1000,()=>{
//     colorChange("blue",1000,()=>{
//         colorChange("yellow",1000,()=>{})
//     })
// });

//super optimized using promises
function colorChange(color, delay) {
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

colorChange("red",1000)
.then(()=>{
    return colorChange("green",1000);
    
})
.then(()=>{
    return colorChange("blue",1000);
})
.catch(()=>{
    console.log("you lose");
})























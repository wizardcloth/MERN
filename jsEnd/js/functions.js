async function demo() {
    console.log("hello world");
    return "result";
}
demo()
.then((result)=>{
    console.log("result");
})
.catch((error)=>{
    console.log("error");
});

let h1 = document.querySelector("h1");
function colorChange(color, delay) {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
             h1.style.color = color;
             resolve();
         }, delay);

        let no = Math.floor(Math.random * 5) + 1;
         if (no > 3) {
            console.log(no);
            reject();
         }
     });
 }
 async function test() {
    try{
        await colorChange("red",1000);
        await colorChange("blue",1000);
        colorChange("green",1000);
    }
    catch(error){
        console.log("error caught");
    }
    let a = 5;
    console.log(a);
    console.log(a + 3);
    
}

console.log(test());
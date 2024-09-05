let btns = document.querySelectorAll("#btn");
let h1 = document.querySelector("#h1");
for (const btn of btns) {
    btn.addEventListener("click",()=>{
        h1.innerText = "!!!!!!!!";
    })
}

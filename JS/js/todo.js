let todo = [];
function add() {
        let req = document.getElementById("text").value;   
        todo.push(req);
        document.getElementById("para").innerHTML = "added";
}
    function list() {
        const paraElement = document.getElementById("para");
        for (const item of todo) {
            paraElement.innerHTML += item + "<br>"; // Add a <br> tag for a new line
        }
        if(todo == 0){
        document.getElementById("para").innerHTML = "empty";

        }
    }   
    

function remove() {
    let flag = 0;
    if (true) {   
        let idx = document.getElementById("text").value;   
        todo.splice(idx,1);
        flag = 1;
    }
    if (flag == 1) {   
        document.getElementById("para").innerHTML = "deleted";  
    }

}
function quit() {
    todo.splice(0,todo.length);
    document.getElementById("para").innerHTML = "cleared";  

}




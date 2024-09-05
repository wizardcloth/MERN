const value = prompt("enter an max no");
console.log(value);
const no = Math.floor(Math.random() * value) + 1;
let guess = prompt("enter your guess");
while (true) {
    if (guess == "quit") {
        console.log("you lose");
        break;
    }
    if (guess == no) {
        console.log("you win no was : " + guess );
        break;
    }
    else if(no > guess ){
        guess = prompt("no is larger");
    }
    else if(no < guess){
        guess = prompt("no is smaller");
    }
    else {
        console.log("try again");
        guess = prompt("re-enter the no");

    }
}
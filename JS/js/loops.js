/*
let guess = prompt("fav movie");
const favMovie = "avatar";
while ((guess != favMovie) && (guess != "quit")) {
    guess = prompt("try again");
}
if (guess == favMovie) {
    document.write("you win");
}
*/

// let fruits = ["mango","apple","papaya","pear","grapes"];  //single line array
let fruits = [["mango","apple","papaya"],["pear","grapes","banana"]];  //multi line array
for (const fruit of fruits) {
    for (const name of fruit) {
        console.log(name);
    }
}

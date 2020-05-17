const readlineSync = require("readline-sync");

let howMuchWords = readlineSync.question("Сколько слов?\n> ");
let n = parseInt(howMuchWords); 
let str = "";
let words = "";

for (let i=0; i<n; ++i) {
    console.log(i+1, " слово");
    words = readlineSync.question("> ");
    if (i<n-1) {
        str += (words + ", ");
    } else {
        str += words;
    };
}

console.log(str);
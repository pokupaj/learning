const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку с лишними пробелами\n >");
let word = "";
let words = [];

for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    if (char != " ") {
        word += char;
    }
    if ((word.length > 0) && ((i === str.length - 1) || char === " ")) {
        words.push(word);
        word = "";
    }
}

console.log(words.join(" "));
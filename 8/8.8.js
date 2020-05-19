const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку, чтобы сделать каждое слово с большой буквы\n >");
let words = str.split(" ");
let wordsUpper = [];

for (slovo of words) {
    wordsUpper.push(slovo[0].toUpperCase() + slovo.slice(1));
};

console.log(wordsUpper.join(" "));
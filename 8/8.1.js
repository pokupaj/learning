const readlineSync = require("readline-sync");

let word1 = readlineSync.question("Первое слово\n> ");
let word2 = readlineSync.question("Второе слово\n> ");
let word3 = readlineSync.question("Первое слово\n> ");

console.log(word1 + ", " + word2 + ", " + word3);

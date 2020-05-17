const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите слово\n >");
let strInverse = str.split("").reverse().join("");

console.log(Boolean(str === strInverse));
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку\n >");
let indexP = readlineSync.question("Введите c какого индекса будем вырезать строку\n >");
let lengthOfCut = readlineSync.question("Введите длину выреза\n >");

console.log(str.replace(str.slice(parseInt(indexP), parseInt(indexP)+parseInt(lengthOfCut)), ""));
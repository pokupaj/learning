const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку\n >");
let indexP = readlineSync.question("Введите c какого индекса будем вырезать строку\n >");
let lengthStrNew = readlineSync.question("Введите длину выреза\n >");
let p = parseInt(indexP);
let l = parseInt(lengthStrNew);


console.log(str.replace(str.slice(p, p+l), ""));
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку\n >");
let indexP = readlineSync.question("Введите c какого индекса будем вырезать строку\n >");
let lengthStrNew = readlineSync.question("Введите длину выреза\n >");
let strArr = str.split("");
let strNew = [];
let p = parseInt(indexP);
let l = parseInt(lengthStrNew);


//console.log(str.replace(str.slice(p, p+l), ""));

for (let i=0; i<p; ++i) {
    strNew.push(strArr[i]);
}

for (let i=p+l; i<strArr.length; ++i) {
    strNew.push(strArr[i]);
}

console.log(strNew.join(""));

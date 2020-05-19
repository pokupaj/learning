const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку\n >");
let words = str.split(" ");

function longestString(arr) {
    let longestStr = "";
    arr.forEach(element => {
        if (element.length > longestStr.length) {
          longestStr = element;
        }
    })
    return longestStr;
  }

console.log(longestString(words));
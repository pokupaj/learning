const readlineSync = require("readline-sync");

let str = readlineSync.question("Что посчитать?\n >");
let actions = ["+", "-", "*", "/"];
let actionsArr = [];
let numberStr = "";
let leftSideOfEq = [];


for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    if (!actions.includes(char)) {
        numberStr += char;
    }
    if (char === "+") {
        actionsArr.push(0);
    }
    if (char === "-") {
        actionsArr.push(1);
    }
    if (char === "*") {
        actionsArr.push(2);
    }
    if (char === "/") {
        actionsArr.push(3);
    }
    if ((numberStr.length > 0) && ((i === str.length - 1)) || actions.includes(char)) {
        leftSideOfEq.push(parseInt(numberStr));
        numberStr = "";
    }
};

let bufferResult = leftSideOfEq[0];


for (let i=0; i<leftSideOfEq.length-1; ++i) {
    if (actionsArr[i] === 0) {
        bufferResult += leftSideOfEq[i+1];
    };
    if (actionsArr[i] === 1) {
        bufferResult -= leftSideOfEq[i+1];
    };
    if (actionsArr[i] === 2) {
        bufferResult *= leftSideOfEq[i+1];
    };
    if (actionsArr[i] === 3) {
        bufferResult /= leftSideOfEq[i+1];
    };
}

console.log(bufferResult);


const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку\n> ");
let alphabetLowerCase = ["a", "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let countUpperCase = 0;
let countLowerCase = 0;

for (char of str) {
    if (alphabetLowerCase.includes(char)) {
        ++countLowerCase;
    } else if (alphabetUpperCase.includes(char)) {
        ++countUpperCase;
//   } else {
//       console.log('В строке нашёлся не английский алфавит');
    }
};

console.log("Big ", countUpperCase);
console.log("Small ", countLowerCase);


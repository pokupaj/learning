const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку, чтобы сделать каждое слово с большой буквы\n >");
let word = "";
let words = [];
let upperChar = "";

for (let i = 0; i < str.length; ++i) {
    let char = str[i];
    if (char != " ") {
        word += char;
    }
    if ((word.length > 0) && ((i === str.length - 1) || char === " ")) {
        words.push(word);
        word = "";
    }
};

for (slovo of words) {
    upperChar = slovo[0].replace(slovo[0], slovo[0].toUpperCase());
    slovo[0] = slovo[0].replace(slovo[0], upperChar);
    console.log(upperChar);
};

console.log(words.join(" "));


/*
Задание 8.8

Дана строка, сделайте букву каждого слова прописной (большой).

str?
> One two and three
One Two And Three
*/
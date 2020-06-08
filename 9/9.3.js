const fs=require("fs");

let todosUndone = JSON.parse(fs.readFileSync("todos.json"));
let countUndone = 0;

for (let i=0; i<todosUndone.length; ++i) {
    if (!todosUndone[i].completed) {
        ++countUndone;
        console.log(countUndone + ". " + todosUndone[i].title);
    } 
};
if (countUndone === 0) {
    console.log("0 невыполненных дел.");
}

/*Задание 9.3 list

Напишите программу, которая выводит список только невыполненных дел из файла todos.json:

1. buy products
2. watch TV
Обратите внимание, нумерация дел остаётся такая как если бы вы выводили все дела. То есть пункт 1. feed cat просто скрыт.
*/
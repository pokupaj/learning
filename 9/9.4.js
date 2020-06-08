const fs=require("fs");

let todosDone = JSON.parse(fs.readFileSync("todos.json"));
let countDone = 0;

for (let i=0; i<todosDone.length; ++i) {
    if (todosDone[i].completed) {
        ++countDone;
        console.log(countDone + ". " + todosDone[i].title);
    } 
};
if (countDone === 0) {
    console.log("0 выполненных дел.");
}

/*
Задание 9.4 list-completed

Напишите программу, которая выводит список только выполненных дел из файла todos.json:

1. feed cat
*/
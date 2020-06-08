const fs = require("fs");
const readlineSync = require("readline-sync");

let numTodoStr = (readlineSync.question("Какое по счёту дело отметить как выполненное?\n >"));
let numberOfTodo = parseInt(numTodoStr);
let todosArr = JSON.parse(fs.readFileSync("todos.json"));

if (todosArr[numberOfTodo-1] != undefined) {
    if (todosArr[numberOfTodo-1].completed) {
        todosArr[numberOfTodo-1].completed=false;
        console.log("[ ] " + (numberOfTodo) + ". " + todosArr[numberOfTodo-1].title);
        fs.writeFileSync("todos.json", JSON.stringify(todosArr));
    } else {todosArr[numberOfTodo-1].completed=true;
            console.log("[x] " + (numberOfTodo) + ". " + todosArr[numberOfTodo-1].title);
            fs.writeFileSync("todos.json", JSON.stringify(todosArr));
           };
} else {
    console.log("Wrong number");
}


/*
Программа должна:

Спросить пользователя порядковый номер дела, которое нужно пометить как выполненное
Прочитать список дел из файла todos.json
Если есть дело с таким номером то:
изменить флаг completed дела на противоположный (с false на true и наоборот)
Записать изменённый список обратно в файл todos.json
Вывести дело в формате “[x] 1. feed cat”
Если такого дела нет, то вывести сообщение “wrong number” (неправильный номер)
toggle?
> 2
[x] 2. buy products
toggle?
> 4
wrong number
*/
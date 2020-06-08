const fs=require("fs");

let todosArr = JSON.parse(fs.readFileSync("todos.json"));

for (let i=0; i<todosArr.length; ++i) {
    if (todosArr[i].completed) {
        console.log("[x] " + (i+1) + ". " + todosArr[i].title);
    } else {
        console.log("[ ] " + (i+1) + ". " + todosArr[i].title);
    }
}

/*

Задание 9.2 list-all

Напишите программу, которая выводит список дел из файла todos.json в таком формате:

[x] 1. feed cat
[ ] 2. buy products
[ ] 3. watch TV
[x] - означает, что дело выполнено, [ ] - не выполнено.

*/
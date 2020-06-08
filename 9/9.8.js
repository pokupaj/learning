const fs = require("fs");

let todosArr = JSON.parse(fs.readFileSync("todos.json"));
let todosDone = [];

for (delo of todosArr) {
    if (!delo.completed) {
        todosDone.push(delo);
    } 
}

fs.writeFileSync("todos.json", JSON.stringify(todosDone));
console.log(todosArr.length-todosDone.length + " todos removed");


/*
Задание 9.8 clear

Программа должна:

Прочитать список дел из файла todos.json
Сформировать новый массив, из которого будут удалены все выполненные дела
Записать новый список в файл todos.json
Вывести сообщение “{x} todos removed” ({x} дел удалено), где {x} - это количество удалённых из списка дел
1 todos removed
*/
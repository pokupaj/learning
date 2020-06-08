const fs = require("fs");
const readlineSync = require("readline-sync");

let newTodos = readlineSync.question("Какое дело добавить?\n >");
let todosArr = JSON.parse(fs.readFileSync("todos.json"));

todosArr.push(
    {
        title: newTodos,
        completed: false, 
    }
);



fs.writeFileSync("todos.json", JSON.stringify(todosArr));
console.log("Добавлено!");

/*
Задание 9.5 add

Программа должна:

Спросить пользователя какое дело он хочет добавить
Прочитать список уже существующих дел из файла todos.json
Добавить в этот список дело, которое добавил пользователь, при этом флаг completed должен быть равен false
Записать дополненный список обратно в файл todos.json
Вывести сообщение “done!” (сделно!)
todo?
> play computer game
done!
*/
const fs = require("fs");

let todosArr = [
    {
        title: "feed cat",
         completed: true,
    },
    {
        title: "buy products",
        completed: false,
    },
    {
        title: "watch TV",
        completed: false,
    }
];

fs.writeFileSync("todos.json", JSON.stringify(todosArr));


/* 

Задание 9.1 init

Нужно записать в файл todos.json список таких дел (либо можете записать другие дела, которые придумаете):

feed cat (выполнено)
buy products (не выполнено)
watch TV (не выполнено)
Объект, в котором храниться одно дело выглядит так:

{
  title: "feed cat", // название дела
  completed: true, // true - выполнено, false - не выполнено
}
Список дел - это массив таких объектов.

Напишите программу, которая записывает в файл todos.json массив таких объектов.

*/
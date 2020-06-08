const fs = require("fs");
const readlineSync = require("readline-sync");

let numTodoStr = (readlineSync.question("Какое по счёту дело удалить?\n >"));
let numberOfDel = parseInt(numTodoStr);
let todosArr = JSON.parse(fs.readFileSync("todos.json"));

if (todosArr[numberOfDel-1] != undefined) {    
    todosArr.splice(numberOfDel-1, 1);
    console.log("done!");
    fs.writeFileSync("todos.json", JSON.stringify(todosArr));
} else {
    console.log("Wrong number");
}


/*
Задание 9.7 remove

Программа должна:

Спросить пользователя порядковый номер дела, которое нужно удалить из списка
Прочитать список дел из файла todos.json
Если есть дело с таким номером то:
удалить дело из списка при помощи метода массива splice
Записать изменённый список обратно в файл todos.json
Вывести сообщение “done!”
Если такого дела нет, то вывести сообщение “wrong number” (неправильный номер)
remove?
> 2
done!
remove?
> 4
wrong number
Метод splice работает таким образом:

let a = ["one", "two", "three", "four", "five"];
a.splice(2, 1); // удалит из массива 1 элемент начиная с элемента с индексом 2 (то есть удалит из этого массива 'three')
console.log(a); // выведет ['one', 'two', 'four', 'five']
*/
const fs = require("fs");
const readlineSync = require("readline-sync");


let searchStr = (readlineSync.question("Введите строку для поиска\n >"));
let todosArr = JSON.parse(fs.readFileSync("todos.json"));
let findStr = searchStr.toLowerCase();
let foundArrLowerCase = [];
let indexesArr = [{}];
let colorArr = [];

for (words of todosArr) {
    foundArrLowerCase.push(words.title.toLowerCase());
};

for (let i=0; i<foundArrLowerCase.length; ++i) {
    if (foundArrLowerCase[i].indexOf(searchStr) > -1) {
        for (let j=0; j<foundArrLowerCase[i].length; ++j) {
            console.log(j + "=j cycle + " + foundArrLowerCase[i].slice(j, searchStr.length));
            if (foundArrLowerCase[i].slice(j, searchStr.length) === searchStr) {
                indexesArr.push ({numberOfword: i,
                                  numberOfsymbol: j,
                                });
            };
        };
    };
};

console.log(foundArrLowerCase);
console.log(indexesArr.numberOfword);

for (words of todosArr) {
    
}

// for (todos of findStr) {
//     buffer = todos.title.toLowerCase().indexOf(findStr);
//     console.log(buffer);
//     //         foundArr.push(todos.title.toLowerCase().indexOf(searchStr.toLowerCase()))
//     ;
//     }   
    


//console.log(str.indexOf("here")); // индекс слова "here" в строке. Выведет 5


//"Привет, мир".toLowerCase().indexOf("привет")


/*
Задание 9.9* search

Программа должна:

Спросить у пользователя строку для поиска
Прочитать список дел из файла todos.json
Найти те дела, в которые входит данная строка (поиск должен быть регистронезависимым, то есть подстрока “abc” должна быть найдена и в деле “abcde” и в деле “ABcde”)
Вывести список дел, при том найденная подстрока должна быть выведена красным цветом
Если ни одного дела не найдено, то вывести сообщение “no matched todos” (нет соответствующих дел)
search?
> at
[x] 1. feed cat
[ ] 3. watch TV
search?
> tv
[ ] 3. watch TV
search?
> my
no matched todos
Для изменения цвета текста используйте библиотеку chalk. Для этого установите эту библиотеку:

npm i chalk --save
Для того, чтобы окрасить текст в красный:

console.log("Этот текст обычный, " + chalk.red("а этот текст будет красным"));
*/
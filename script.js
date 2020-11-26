'use strict';

// Задание 1

function task_1() {
    let i = 0;

    while (i <= 100) {
        if (!(i % 2 == 0)) {
            console.log(i);
        }
        i++;
    }
}

// function getSimpleNumber() {                 // Альтернативный вариант
//     for (let i = 0; i <= 100; i++) {
//         if (i % 2) console.log(i);
//     }
// }

// Задание 4

function task_4() {
    for (let i = 0; i < 10; console.log(i++)) {}
}

function task_5() {
    for (let x = 'x'; x.length <= 20; x += 'x') {
        console.log(x);
    } 
}







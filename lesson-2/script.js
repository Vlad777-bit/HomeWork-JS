'use strict';

function task_3() {
    const a = getRandomNumber(100);
    const b = getRandomNumber(200);

    if (a > 0 && b > 0) {
        console.log(`Разность чисел ${a} - ${b} = ${a - b}`);
    } else if (a < 0 && b < 0) {
        console.log(`Произведение чисел ${a} * ${b} = ${a * b}`);
    } else if ((a <= 0 && b >= 0) || (a >= 0 && b <= 0)) {
        console.log(`Сумма чисел ${a} + ${b} = ${a + b}`);
    } else {
        console.log('Вы ввели некорректное число!');
    }
}

function getRandomNumber(num) {
    return Math.floor((Math.random() - 0.5) * num);
}


function task_4() {
    const num = +prompt('Введите число от 0 до 15');
    outputNum(num);
}

function outputNum(num) {
    switch (num) {
        case 0:
            console.log(num++);
        case 1:
            console.log(num++);
        case 2:
            console.log(num++);
        case 3:
            console.log(num++);
        case 4:
            console.log(num++);
        case 5:
            console.log(num++);
        case 6:
            console.log(num++);
        case 7:
            console.log(num++);
        case 8:
            console.log(num++);
        case 9:
            console.log(num++);
        case 10:
            console.log(num++);
        case 11:
            console.log(num++);
        case 12:
            console.log(num++);
        case 13:
            console.log(num++);
        case 14:
            console.log(num++);
        case 15:
            console.log(num++);
        default:
            break;    
    }
}


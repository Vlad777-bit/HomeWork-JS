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
    const a = +prompt('Введите число от 0 до 15');
    outputNum(a);
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

function sum(a, b) {
    return a + b;
}

function min(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            console.log(`Сумма ${sum(arg1, arg2)}`);
            break;
        case '-':
            console.log(`Разность ${min(arg1, arg2)}`);
            break;
        case '*':
            console.log(`Произведение ${mul(arg1, arg2)}`);
            break;
        case '/':
            console.log(`Разность ${div(arg1, arg2)}`); 
            break;
    }
}

function task_5() {
    const userArg1 = +prompt('Введите целое число');
    const userArg2 = +prompt('Введите другое целое число');
    const oper = prompt('Введите один из этих операторов для вычисления', '+, -, *, /');

    mathOperation(userArg1, userArg2, oper);
}


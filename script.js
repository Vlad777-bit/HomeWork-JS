'use strict';

// Задание 1

function getDigitsNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Вы ввели не корректное число');
        return {};
    }
    
    return {
        number: num,
        hundereds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
        units: num % 10,
    }
}

function task_1() {
    const userNumber = +prompt('Введите целое, положительное число от 0 до 999');
    console.log(getDigitsNumber(userNumber));
}


// Задание 2

class Price {
    constructor(item, price) {
        this.item = item;
        this.price = price;
    }
}

const item1 = new Price('Футболка', 200);
const item2 = new Price('Штаны', 100);
const item3 = new Price('Куртка', 1250);

const itemsSum = item1.price + item2.price + item3.price;

function task_2() {
    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(`Вывод полной стоимости корзины составляет: ${itemsSum} рублей`);
}
















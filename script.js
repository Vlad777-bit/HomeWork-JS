'use strict';

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

function task_1() {
    console.log(item1);
    console.log(item2);
    console.log(item3);
    console.log(`Вывод полной стоимости корзины составляет: ${itemsSum} рублей`);
}
















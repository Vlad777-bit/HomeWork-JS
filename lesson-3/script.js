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

// function getSimpleNumber() {                 // Альтернативный вариант через for
//     for (let i = 0; i <= 100; i++) {
//         if (i % 2) console.log(i);
//     }
// }

// Задание 2-3

function task_2_3() {
    const basketItems = ['Футболка', 'Штаны', 'Куртка'];
    const ItemsCost = [
        ['Футболка', 200],
        ['Штаны', 100],
        ['Куртка', 1250]
    ];

    const getItemPrice = (item, array) => {
        const items = [];
        const costs = [];

        for (let i = 0; i < array.length; i++) {
            items.push(array[i][0]);
            costs.push(array[i][1]);
        }

        return costs[items.indexOf(item)];
    };

    const countBasketPrice = (basketArr, costArr) => {
        let totalCost = 0;
        for (let i = 0; i < basketArr.length; i++) {

            totalCost += getItemPrice(basketArr[i], costArr);
        }
        return totalCost;
    };

    console.log('Массив корзины: ' + basketItems);
    console.log('Массив стоимости каждого товара: ' + ItemsCost);
    console.log('Вывод полной стоимости корзины: ' + countBasketPrice(basketItems, ItemsCost));
}



// Задание 4

function task_4() {
    for (let i = 0; i < 10; console.log(i++)) {}
}

// Задание 5


function task_5() {
    for (let x = 'x'; x.length <= 20; x += 'x') {
        console.log(x);
    }
}
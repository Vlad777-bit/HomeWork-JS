'use strict';

function task_1() {
    const tempCels = +prompt('Введите температуру по Цельсию');
    const tempFahr = getResult(tempCels);

    console.log(`${tempCels}°C = ${tempFahr}℉`);
}

function getResult(temp) {
    return (9 / 5) * temp + 32;
}

function task_2() {
    const name = 'Василий';
    const admin = name;

    console.log(admin);
}


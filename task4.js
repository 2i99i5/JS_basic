'use strict';
/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/

/**
 * Функция складывает переменные.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция из переменной "а" вычитает "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция умножает переменные.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция делит переменную "a" на "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}


const x = 10, y = 5;
console.log(addition(x, y));
console.log(subtraction(x, y));
console.log(multiplication(x, y));
console.log(division(x, y));

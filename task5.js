'use strict';
/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
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

/**
 * Функция калькулятор.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation один из символов: '+','-','*','/'
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
    }
}

const x = 10, y = 5;
console.log(mathOperation(x, y, "+"));
console.log(mathOperation(x, y, "-"));
console.log(mathOperation(x, y, "*"));
console.log(mathOperation(x, y, "/"));

/*
  HW_18_TEXT
  
  1. Напишите четыре функции для основных математических действий (+ - * /)
  2. Напишите функцию калькулятор, принимающую при вызове два числа 
     и функцию операции над этими числами и возвращающую результат вычислений
  3. Попробуйте написать все эти функции через function-declaration.
  4. Попробуйте написать все эти функции через function-expression.
  5. Попробуйте написать все эти функции через стрелочный синтаксис (arrow functions).
*/

// =========================================================================
// 1. Вариант через Function Declaration (Объявление функции)
// =========================================================================

function addDeclaration(a, b) {
  return a + b;
}

function subtractDeclaration(a, b) {
  return a - b;
}

function multiplyDeclaration(a, b) {
  return a * b;
}

function divideDeclaration(a, b) {
  return a / b;
}

function calculatorDeclaration(num1, num2, operation) {
  return operation(num1, num2);
}

// Проверка:
console.log("=== Function Declaration ===");
console.log(calculatorDeclaration(10, 5, addDeclaration));      // 15
console.log(calculatorDeclaration(10, 5, subtractDeclaration)); // 5
console.log(calculatorDeclaration(10, 5, multiplyDeclaration)); // 50
console.log(calculatorDeclaration(10, 5, divideDeclaration));   // 2


// =========================================================================
// 2. Вариант через Function Expression (Функциональное выражение)
// =========================================================================

const addExpression = function (a, b) {
  return a + b;
};

const subtractExpression = function (a, b) {
  return a - b;
};

const multiplyExpression = function (a, b) {
  return a * b;
};

const divideExpression = function (a, b) {
  return a / b;
};

const calculatorExpression = function (num1, num2, operation) {
  return operation(num1, num2);
};

// Проверка:
console.log("=== Function Expression ===");
console.log(calculatorExpression(20, 4, addExpression));      // 24
console.log(calculatorExpression(20, 4, subtractExpression)); // 16
console.log(calculatorExpression(20, 4, multiplyExpression)); // 80
console.log(calculatorExpression(20, 4, divideExpression));   // 5


// =========================================================================
// 3. Вариант через Arrow Functions (Стрелочный синтаксис)
// =========================================================================

const addArrow = (a, b) => a + b;
const subtractArrow = (a, b) => a - b;
const multiplyArrow = (a, b) => a * b;
const divideArrow = (a, b) => a / b;

const calculatorArrow = (num1, num2, operation) => operation(num1, num2);

// Проверка:
console.log("=== Arrow Functions ===");
console.log(calculatorArrow(7, 3, addArrow));      // 10
console.log(calculatorArrow(7, 3, subtractArrow)); // 4
console.log(calculatorArrow(7, 3, multiplyArrow)); // 21
console.log(calculatorArrow(7, 3, divideArrow));   // 2.3333333333333335
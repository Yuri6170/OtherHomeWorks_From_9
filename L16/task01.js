// ## HW16TEXT
// 1. В файле 1 создайте массив с числами от 1 до 10. Выведите его в консоль.
// для пунктов 2-5 используйте методы массива push, shift, pop , unshiftи length соответственно. 
// 2. Добавьте в конец массива число 11 , а в начало 0 и выведите массив в консоль.
// 3. Удалите первый и последний элемент массива и выведите массив в консоль.
// 4. Замените третий элемент массива на число 99 и выведите массив в консоль.
// 5. Выведите длину массива в консоль.
// 6. В файле 2 повторите пункты 1-5, но используйте методы массива splice и length соответственно.
   


// alt+shift+f - форматирование кода
//alt+shift+down - дублирование строки
//alt+shift+up - перемещение строки вверх
//ctrl+shift+f - поиск по проекту
//ctrl+shift+r - поиск и замена по проекту
//ctrl+shift+s -save all
//ctrl+shift+e - открыть проводник
//ctrl+shift+` - открыть терминал
//ctrl+` - открыть терминал
//Ctrl+F5 - run without debugging

//  ctrl+shift+v - markdown preview

let temperature = 118;
// Python: and or not
// JS: && || !

if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature >= 0 && temperature < 20) {
  console.log("Холодно");
} else if (temperature >= 20 && temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Очень жарко");
}

if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature < 20) {
  console.log("Холодно");
} else if (temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Очень жарко");
}

let number = 5;
console.log(number % 2 === 0 ? "Четное" : "Нечетное");

let age = 15;
let isAdult = age > 18;
console.log(isAdult ? "Совершеннолетний" : "Не достиг совершеннолетия");

// isAdult = age >= 18 ? true : false;
// console.log(isAdult); // not good

// console.log(age >= 18);

number = 5;
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Unknown day");
}

number = 7;
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
    // break;
}


let myName; //  для замены null или undefined на заданные данные
let result= myName ?? "Anonimus";
console.log(result); // Anonimus

let price= 25.5;
console.log(price ?? "Price not available"); // 25.5

// Домашняя работа
console.log('========================== ');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
console.log('========================== ');
array.push(11);
array.unshift(0);
console.log(array);
console.log('========================== ');
array.shift();
array.pop();
console.log(array);
console.log('========================== ');
array[2] = 99;
console.log(array);
console.log('========================== ');
console.log(array.length);

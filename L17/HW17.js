// # hw17text

// 1. Напишите программу,
// которая проверяет проверяет и печаттает вердикт , 
// является ли целое положительное
// число любой длины счастливым попозиционно!
// ЕСЛИ  Сумма цифр на четных позициях равна 
// сумме цифр на нечетных позициях - число счастливое,
// ИНАЧЕ нет. 
// 1210 - 1+1 = 2+0 счастливое
// 135 - 1+5 != 3 не счастливое 

// 2. Напишите программу,
// которая проверяет и печаттает вердикт , 
// является ли целое положительное
// число  длины 6 цифр счастливым зеркално!
// ЕСЛИ  Сумма перваых 3 цифр равна 
// сумме цифр на последних 3 позициях - число счастливое,
// ИНАЧЕ нет. 
// 123420 -1+2+3 = 2+0 счастливое

// 712004- 7+1+2 != 0+0+4 не счастливое 


const number = 123123;

let tempNumber = number;
let temp = 0;
let counter = 0;
let oddSum = 0;
let evenSum = 0;
let LeftSum = 0;
let RightSum = 0;
let Lenght = 0;

// 1. "Современный" способ (через чередование чётных/нечётных позиций) ПЕРВОЕ ЗАДАНИЕ
while (tempNumber > 0) {
  temp = tempNumber % 10;
  counter++;
  if (counter % 2 === 0) {
    evenSum += temp;
  } else {
    oddSum += temp;
  }
  tempNumber = (tempNumber / 10) | 0;
}

console.log(
  (oddSum === evenSum ? "Lucky number" : "Not Lucky number") + " in modern way",
);

// 2. "Олдскульный" способ (сравнение левой и правой половины) ВТОРОЕ ЗАДАНИЕ
tempNumber = number;

// Считаем длину числа
while (tempNumber > 0) {
  Lenght++;
  tempNumber = (tempNumber / 10) | 0;
}

if (Lenght % 2 !== 0) {
  console.log("I cant check it in OldSchool way");
} else {
  
  tempNumber = number; 
  
  // Количество цифр в одной половине
  let halfLength = Lenght / 2; 

  // Складываем цифры правой половины (с конца)
  let steps = 0;
  while (steps < halfLength) {
    RightSum += tempNumber % 10;
    tempNumber = (tempNumber / 10) | 0;
    steps++;
  }

  // Складываем оставшиеся цифры (левая половина)
  while (tempNumber > 0) {
    LeftSum += tempNumber % 10;
    tempNumber = (tempNumber / 10) | 0;
  }

  console.log(
    (LeftSum === RightSum ? "Lucky number" : "Not Lucky number") +
      " in OldSchool way",
  );
}
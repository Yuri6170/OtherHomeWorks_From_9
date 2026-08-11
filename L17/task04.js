let number=2;
do {
    console.log(number);
    number*=2;
} while (number<2050);

console.log("1====================");

let fruts=["banana","apple","orange"];
for (let i=0; i<fruts.length; i++){
    console.log(fruts[i]);
}

console.log("2====================");

for (let i=0; i<fruts.length; i++){
    fruts[i]=fruts[i]+"!";
    console.log(fruts[i]);
}

console.log("3=================");

let counter=0;
while (counter<fruts.length){
    console.log(`${counter+1}. ${fruts[counter]}`);
    counter+=1;
}

console.log("4====================");
// for of  ----  ARRAYS 

for (let frut of fruts){
    console.log(frut);
    frut="kiwi";
}// else - как в пайтоне нет
console.log(fruts);// [ 'banana!', 'apple!', 'orange!' ]  // frut - это копия элемента массива, поэтому массив не изменился
console.log(frut);// ERROR ReferenceError: frut is not defined, так как переменная frut объявлена в локальной области видимости цикла for of

// hw17text
/*
1. Напишите программу,
которая проверяет проверяет и печаттает вердикт , 
является ли целое положительное
число любой длины счастливым попозиционно!
ЕСЛИ  Сумма цифр на четных позициях равна 
сумме цифр на нечетных позициях - число счастливое,
ИНАЧЕ нет. 
1210 - 1+1 = 2+0 счастливое
135 - 1+5 != 3 не счастливое 

2. Напишите программу,
которая проверяет и печаттает вердикт , 
является ли целое положительное
число  длины 6 цифр счастливым зеркално!
ЕСЛИ  Сумма перваых 3 цифр равна 
сумме цифр на последних 3 позициях - число счастливое,
ИНАЧЕ нет. 
123420 -1+2+3 = 2+0 счастливое

712004- 7+1+2 != 0+0+4 не счастливое 
*/
const number = 123456;

let tempNumber = number;
let temp = 0;
let counter = 0;
let oddSum = 0;
let evenSum = 0;

while (tempNumber > 0) {
    temp = tempNumber % 10;
    counter++;
    
    if (counter % 2 === 0) {
        evenSum += temp;
    } else {
        oddSum += temp;
    }

    // Вместо Math.floor() отсекаем дробь через | 0
    tempNumber = (tempNumber / 10) | 0;
}

console.log(oddSum === evenSum ? "Lucky number" : "Not Lucky number");
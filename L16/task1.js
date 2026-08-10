


let temperature = 38; //

if (temperature < 0) {
    console.log("It's freezing outside!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It's a bit chilly outside.");
} else if (temperature >= 20 && temperature < 30) {
    console.log("The weather is pleasant.");
} else {
    console.log("It's hot outside!");
}   

let number = 5;
console.log(number % 2 === 0 ? "The number is even." : "The number is odd.");

let age = 25;
let isAdult = age > 18; // in percentage

console.log(isAdult ? "You are an adult." : "You are not an adult.");


number = 10;
switch (number) {
    case 1:
        console.log("Yom Rishon");
        break;
    case 2:
        console.log("Yom Sheni");
        break;
    case 3:
        console.log("Yom Shelishi");
        break;

    case 4:
        console.log("Yom Revi'i");
        break;
    default:
        console.log("Not a valid day of the week.");
}
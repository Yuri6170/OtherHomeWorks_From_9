// let number=20000; // loop not executed
let number=2;
while (number<2050){
    console.log(number);
    number*=2;
    let myName="Ilya";
    let res=number%2===0?"even":"odd";
    console.log(res,myName);

}
console.log(myName);//  ERROR ReferenceError
// console.log(res); // ERROR ReferenceError: res is not defined, так как переменная res объявлена в локальной области видимости цикла while

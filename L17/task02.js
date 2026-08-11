// print 5 раз слово "Hello" в консоль
// for number in range(5); in python
for (let i=0; i<5; i+=1){// i=i+1  i++
    console.log("Hello");
}

let n=5;
n=n+2;
console.log(n);//7
n+=2;
console.log(n);//9
n++;// increment
console.log(n);//10
n--;// decrement
console.log(n);//9
console.log(n++);//9
console.log(n);//10 
console.log(n--);//10
console.log(n);//9

console.log(--n);//8 используется РЕДКО префиксная форма декремента, поэтому сначала уменьшается на 1, а потом выводится в консоль

console.log("====================");

// for (  ; ;  ){
//     console.log("Hello");
//     // break;
// }

for (let j=0; j<5; j+=1){
     console.log(j);
    }
// console.log(j);// ERROR ReferenceError: j is not defined, так как переменная j объявлена в локальной области видимости цикла for

for (let j=2; j<2050; j*=2){
    console.log(j);
    }
    

console.log("Hello, World!");
// alt+shift+f - форматирование кода
//alt+shift+down - дублирование строки
//alt+shift+up - перемещение строки вверх
//ctrl+shift+f - поиск по проекту
//ctrl+shift+r - поиск и замена по проекту
//ctrl+shift+s -save all
//ctrl+shift+e - открыть проводник
//ctrl+` - открыть терминал
//Ctrl+F5 - run without debugging

let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    email: 'john@example.com',
    city: 'New York',
}

console.log(user.name); // John
console.log(user.age); // 30
console.log(user.isAdmin); // true
console.log(user.email); // john@example.com
console.log(user.city); // New York

console.log(user['name']); // John
let fieldName = 'age';
console.log(user[fieldName]); // 30
user["second name"] = "Smith";
console.log(user["second name"]); // Smith

console.log("-------------------");
console.log(user);
console.log("-------------------");
let userJson = JSON.stringify(user); 
console.log(userJson);
console.log(typeof userJson); // string
console.log(user.name); // John
console.log(userJson.name); // undefined

let productJson = '{"name":"Laptop","price":1000,"inStock":true}';
let product = JSON.parse(productJson);
console.log(product);
console.log(typeof product);
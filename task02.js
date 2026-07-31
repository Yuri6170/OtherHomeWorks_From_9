// без объектов
let userName = 'Vasya';
let userAge = 25;
let isStudent = true;

console.log('age = ',userAge);

// в виде объектов
let user = {
    name: 'Ivan',
    age: 25,
    isStudent: true
};
console.log(user);

console.log(user.name)

user.age = 26
console.log(user.age)

user.email='ivan@test.com'
console.log(user);

delete user.isStudent
console.log(user);

const user1 = {
    name: 'Jack',
    age: 32,
    
};

console.log(user1);

user1.age = 33;
user1.email = 'test@test.com';
console.log(user1);

console.log(typeof user1,typeof user1.name,typeof user1.age,typeof user1.email);


# Попытайтесь не запуская код, определить результат каждого действия.Кратко, но понятно обьясните ответ письменно. Проверьте ваш вывод запустив код.

console.log(false == 0);Выведет в консоли true
console.log(false === 0);Выведет false

console.log("" == 0); Выведет правда
console.log("" === 0); Выведет ложь

console.log(null == undefined); Выведет правду
console.log(null === undefined); Выведет ложь

console.log("55" == 55); Выведет правду
console.log("55" === 55);Выведет ложь

console.log("true" == true); Выведет ложь
console.log("true" === true); Выведет ложь

console.log((0.2 + 0.1 - 0.3) == true); Выведет ложь
console.log((0.2 + 0.1 - 0.3) === true); Выведет ложь

console.log((0.2 + 0.1 - 0.3) == false);Выведет ложь
console.log((0.2 + 0.1 - 0.3) === false);Выведет ложь


#  Adv *** ДОПОЛНИТЕЛЬНО Можно спрашивать ИИ,но важно понять почему такой ответ и внятно и кратко обьяснить 

console.log({} == {}); Выведет ложь
console.log({} === {});Выведет ложь

console.log({} == "[object Object]");выедет правду
console.log({} === "[object Object]");выедет ложь

console.log({} == true);выведет ложь
console.log({} == false);Выведет ложь

console.log({} == 0);выведет ложь
console.log({} == NaN);выведет ложь

const planet = {
    name: "Mars",
    numberFromSun: 4,
};

const astronaut = {
  name: "Yuri",
  age: 37,
  isCommander: false,
  planet: planet.name,
  missionDuration: 365
};


console.log("=== ИСХОДНЫЕ ДАННЫЕ ===");


let ageIn10Years = astronaut.age + 10;
let newMissionDuration = astronaut.missionDuration + 30;
// astronaut.hobby = "Music"; // Добавляем новое свойство hobby


console.log("Имя астронавта: " + astronaut.name);
console.log("Целевая планета: " + astronaut.planet);
console.log("Является командиром: " + (astronaut.isCommander ? "Да" : "Нет"));
console.log("Возраст " + astronaut.age + " лет");
console.log("Длительность миссии: " + astronaut.missionDuration + " дней");
// console.log("Тип данных planet: " + typeof astronaut.planet); // Небольшой эксперимент, planet и объект, и строка
// console.log(astronaut);


astronaut.missionDuration = newMissionDuration; // Обновляем длительность миссии
astronaut.isCommander = true;                    // Назначаем астронавта командиром
// delete astronaut.hobby; // Удаляем свойство hobby

console.log("\n=== ОБНОВЛЕННЫЕ ДАННЫЕ ===");
console.log("Новая длительность миссии: " + astronaut.missionDuration + " дней");
console.log("Возраст через 10 лет: " + ageIn10Years + " лет");
console.log("Новый статус командира: " + (astronaut.isCommander ? "Да" : "Нет"));
// console.log("Свойство hobby удалено: " + (astronaut.hobby === undefined ? "Да" : "Нет"));
// console.log(astronaut);

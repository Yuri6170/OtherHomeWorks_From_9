

import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users"; 
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast"; 


async function getUsers() {
  const response = await fetch(USERS_URL);
  if (!response.ok) {
   
    throw new Error(`Ошибка получения пользователей: ${response.status}`);
  }
  return response.json(); 
}


async function getWeather(latitude, longitude) {
  const response = await axios.get(WEATHER_URL, {
    params: {
      latitude,
      longitude,
      current_weather: true, 
  }
});
  return response.data.current_weather; 
}

async function main() {

  const users = await getUsers();


  
  const usersWithWeather = [];
  for (const user of users) {
    const { lat, lng } = user.address.geo; 
    const weather = await getWeather(lat, lng);

    usersWithWeather.push({
      id: user.id,
      name: user.name,
      phone: user.phone,
      latitude: lat,
      longitude: lng,
      temperature: weather.temperature,
    });
  }

 
  console.log("=== Пользователи и погода у них ===");
  console.table(
    usersWithWeather.map(({ name, phone, temperature }) => ({
      name,
      phone,
      temperature,
    }))
  );

 
  const hottestUser = usersWithWeather.reduce((max, current) =>
    current.temperature > max.temperature ? current : max
  );

  console.log("\n=== А вот и самый жаркий чувак ===");
  console.log(`Имя: ${hottestUser.name}`);
  console.log(`Телефон: ${hottestUser.phone}`);
  console.log(`Температура: ${hottestUser.temperature}°C`);
}


main().catch((err) => console.error("Что-то пошло не так:", err));

console.log("hw30 run");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// проверка одного пользователя
function validateUser(user) {
    if (!user.name) {
        throw new Error("User name is missing");
    }

    if (!user.email) {
        throw new Error("User email is missing");
    }

    if (typeof user.id !== "number") {
        throw new Error("User id must be a number");
    }
}

axios
    .get(API_URL)
    .then((response) => {
        const users = response.data;

        // доп. задание
        // users[0].email = null;

        users.forEach((user) => {
            // try внутри цикла, чтобы проверка шла дальше
            try {
                validateUser(user);
                console.log(`User is valid: ${user.name}`);
            } catch (error) {
                console.log(`Validation error: ${error.message}`);
            }
        });
    })
    // ошибка запроса
    .catch((error) => {
        console.log("API error");
        console.log(error.message);
    })
    .finally(() => {
        console.log("hw30 end");
    });
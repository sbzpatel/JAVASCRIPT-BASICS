// async function always returns a promise

// Syntax ->> async function myFunc() {...}

// await pauses the execution of its surrounding async functions until the promise is settled.

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data...");
            resolve("success");
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
}

getWeatherData();

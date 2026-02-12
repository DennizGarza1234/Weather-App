const API_KEY = "930b52f0cf36d572a983c63ac77ffce3";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.innerHTML = "Please enter a city name.";
        return;
    }

    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = "City not found. Please try again.";
                return;
            }

            resultDiv.innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <img src="${data.current.weather_icons[0]}" alt="Weather Icon">
                <p><strong>Temperature:</strong> ${data.current.temperature}°C</p>
                <p><strong>Condition:</strong> ${data.current.weather_descriptions[0]}</p>
                <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.current.wind_speed} km/h</p>
                <p><strong>Local Time:</strong> ${data.location.localtime}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = "An error occurred while fetching data.";
            console.error(error);
        });
}
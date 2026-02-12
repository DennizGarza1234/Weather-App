# Weather-App

## API Selection
I selected the Weatherstack API because it provides real-time weather data with a simple REST interface. The documentation is clear and easy to understand, making integration straightforward. Weather data is practical and widely useful, making it an ideal choice for this project.

---

## Application Functionality
The application, WeatherSnap, allows users to enter a city name and retrieve real-time weather data including temperature, humidity, wind speed, weather condition, and local time. The application uses the Fetch API in JavaScript to send a request to Weatherstack and dynamically displays the response data.

---

## Challenges Encountered
One challenge was handling API errors properly. The Weatherstack API returns an error object when a city is not found, so I implemented validation to check for the presence of an error in the response. Another challenge was ensuring the UI updated correctly without reloading the page.

---

## Demonstration
When a valid city such as “New York” is entered, the application displays the current weather data. If an invalid city is entered, the application displays an appropriate error message. The system also handles empty inputs and network errors gracefully.

--- 
## Youtube

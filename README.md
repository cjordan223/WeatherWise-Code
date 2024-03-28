# WeatherWise  

This lightweight and easy-to-navigate web app allows users to search for current weather data and a 3-day forecast based on their location input.

![image](https://github.com/cjordan223/WeatherWise/assets/126746175/9188cf97-e039-4656-8a7a-7eb9813326fa)


## Features

- **Search by Location**: Enter a city or zipcode to retrieve current weather conditions.
- **Dynamic Weather Updates**: Access real-time updates for temperature, conditions, and daily forecasts.
- **Keyboard Accessibility**: Submit your search query with the "Enter" key for quick access.
- **Responsive Design**: Compatible with various devices and screen sizes.
- **Login Functionality**: Secure access with a user authentication feature.

## How It Works

The app listens for user interactions on the search and login form elements. Upon triggering a search through either a button click or a press of the "Enter" key, the `displayLocation()` function is called. This function fetches real-time weather data from WeatherAPI.com using the provided API key and dynamically updates the web page with the current weather and the forecast for the coming week.

## Login Information

For demonstration purposes, you can log in using the following credentials:
- **Username**: admin
- **Password**: 1234

## Development

This application uses vanilla JavaScript for DOM manipulation and event handling. Async/await is utilized for API requests, ensuring that weather data is fetched asynchronously without blocking the UI.

## Setup

1. Clone the repository to your local machine.
2. Open `index.html` in your browser to view the app.
3. To use the live weather data feature, sign up for an API key at [WeatherAPI.com](https://www.weatherapi.com/) and replace the placeholder key in the code with your own.

## Contributions

Feel free to fork this repository and contribute by submitting a pull request. 

## Disclaimer

This app is for educational purposes only. The API key included in the code is a placeholder and will not work. You must replace it with your valid API key from WeatherAPI.com.

 

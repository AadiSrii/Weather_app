## Weather Dashboard
A responsive Weather Dashboard application built with React and Vite that displays the current weather and a 5-day forecast for a given city. Users can search for cities, view weather details, toggle between Celsius and Fahrenheit, and manage a list of favorite cities.

# Features
Current Weather & 5-Day Forecast: Displays the current weather and a 5-day forecast for any city.
Search Functionality: Search for any city to view its weather details.
Favorite Cities: Add cities to a list of favorites, and manage them with CRUD operations using a JSON server.
Dark/Light Mode: Toggle between dark and light themes for a personalized experience.
Responsive Design: Optimized for both desktop and mobile devices.
Prerequisites
Node.js and npm installed.
Vite installed globally (optional).

# Installation
#Getting Started
Follow these instructions to set up and run the project on your local machine.

# 1. Clone the Repository
Clone the repository using the following command:
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
2. Install Dependencies
Install the required dependencies using npm or yarn:

npm install

or

yarn install

# 3. Create .env File
Create a .env file in the root directory with the following content:


VITE_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
VITE_API_URL=http://localhost:5000/favorites
Replace your_openweathermap_api_key with your OpenWeatherMap API key.

# 4. Start JSON Server
Start the JSON server to handle the favorites:

npx json-server --watch db.json --port 5000
This will run the server on http://localhost:5000.

# 5. Run the Development Server
Start the development server with Vite:

npm run dev

or

yarn dev

The application will be accessible at http://localhost:5173.

# Usage
Searching for a City
Enter the name of a city in the search bar and press Enter or click the search icon.
The dashboard will display the current weather and a 5-day forecast for the city.
Managing Favorite Cities
Add a City: Type the city name in the "Add new city" input field and click "Add."
Remove a City: Click the "Remove" button next to a city in the favorites list.
Toggling Between Celsius and Fahrenheit
Use the toggle switch on the dashboard to switch between Celsius and Fahrenheit.
Dark/Light Mode
Use the switch on the homepage to toggle between dark and light modes.

# Folder Structure

weather-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Favorites.jsx
│   │   ├── Search.jsx
│   │   ├── WeatherDisplay.jsx
│   │   └── ToggleTheme.jsx
│   ├── assets/
│   │   ├── background-images/
│   │   │   ├── clear-sky.jpg
│   │   │   ├── clouds.jpg
│   │   │   ├── rain.jpg
│   │   │   ├── snow.jpg
│   │   │   └── thunderstorm.jpg
│   ├── App.css/
│   │   ├── global.css
│   │   └── weather-display.css
│   ├── db.json
│   ├── main.jsx
│   └── index.html
├── .env
├── package.json
└── README.md

# API Reference
OpenWeatherMap API
Base URL: https://api.openweathermap.org/data/2.5
Endpoints:
/weather: Fetch current weather data.
/forecast: Fetch 5-day forecast data.
JSON Server API
Base URL: http://localhost:5000/favorites
Endpoints:
GET /favorites: Retrieve all favorite cities.
POST /favorites: Add a new city to favorites.
DELETE /favorites/:id: Remove a city from favorites.
Contributing
If you'd like to contribute to the project, please fork the repository and create a pull request with your changes.


# Acknowledgements
React
Vite
OpenWeatherMap
JSON Server

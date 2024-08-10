import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    const savedCity = localStorage.getItem('lastSearchedCity');
    if (savedCity) {
      fetchWeather(savedCity);
    }
  }, []);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const handleSearch = () => {
    localStorage.setItem('lastSearchedCity', city);
    fetchWeather(city);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <div className="checkbox-wrapper-17">
        <input
          type="checkbox"
          id="switch-17"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="switch-17"></label>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <WeatherDisplay weather={weather} />
      <Favorites />
    </div>
  );
}

export default App;

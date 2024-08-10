import React, { useState } from 'react';
import axios from 'axios';

function Search({ setWeather }) {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
      setWeather(response.data);
      localStorage.setItem('lastSearchedCity', city);
      setError('');
    } catch (error) {
      setError('City not found');
      setWeather(null); // Clear weather data if city is not found
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Search;

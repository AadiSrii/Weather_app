import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const API_URL = 'http://localhost:5000/favorites'; // Ensure this URL matches your JSON Server

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [newCity, setNewCity] = useState('');

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(API_URL);
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites', error);
    }
  };

  const addFavorite = async () => {
    try {
      if (newCity.trim() === '') return; // Prevent adding empty cities
      await axios.post(API_URL, { name: newCity });
      setNewCity('');
      fetchFavorites();
    } catch (error) {
      console.error('Error adding favorite', error);
    }
  };

  const removeFavorite = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchFavorites();
    } catch (error) {
      console.error('Error removing favorite', error);
    }
  };

  return (
    <div className="favorites">
      <h2>Favorite Cities</h2>
      <input
        type="text"
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Add new city"
      />
      <button onClick={addFavorite}>Add</button>
      <ul>
        {favorites.map((city) => (
          <li key={city.id}>
            {city.name}
            <button onClick={() => removeFavorite(city.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;

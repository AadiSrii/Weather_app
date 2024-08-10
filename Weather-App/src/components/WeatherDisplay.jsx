import React from 'react';
import './styles.css';

function WeatherDisplay({ weather }) {
  const [unit, setUnit] = React.useState('metric');
  const [backgroundImage, setBackgroundImage] = React.useState('clear.jpg');

  React.useEffect(() => {
    if (weather) {
      updateBackground(weather.list[0].weather[0].main);
    }
  }, [weather]);

  const updateBackground = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        setBackgroundImage('clear.jpg');
        break;
      case 'Clouds':
        setBackgroundImage('clouds.jpg');
        break;
      case 'Rain':
        setBackgroundImage('rain.jpg');
        break;
      case 'Snow':
        setBackgroundImage('snow.jpg');
        break;
      case 'Mist':
        setBackgroundImage('mist.jpg');
        break;
      case 'Thunderstorm':
        setBackgroundImage('thunderstorm.jpg');
        break;
      default:
        setBackgroundImage('clear.jpg');
    }
  };

  const handleUnitToggle = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  if (!weather) {
    return <p>No weather data available</p>;
  }

  const { list, city } = weather;

  // Group forecast data by day
  const dailyForecast = list.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0]; // Get date part
    if (!acc[date]) {
      acc[date] = {
        date,
        temp: item.main.temp,
        description: item.weather[0].description,
        icon: item.weather[0].icon
      };
    } else {
      // Update the temperature if needed (e.g., average or max)
      acc[date].temp = Math.max(acc[date].temp, item.main.temp);
    }
    return acc;
  }, {});

  const forecastArray = Object.values(dailyForecast).slice(0, 5); // Take the first 5 days

  return (
    <div className="weather-card" style={{ backgroundImage: `url(/images/${backgroundImage})` }}>
      <div class="checkbox-wrapper-5">
        <div class="check">
          <input id="check-5" type="checkbox" onClick={handleUnitToggle} />
          <label for="check-5"></label>
        </div>
      </div>
      <div className="current-weather">
        <h2>Current Weather in {city.name}</h2>
        <p>Temperature: {list[0].main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
        <p>Weather: {list[0].weather[0].description}</p>
      </div>
      <h2>5-Day Forecast</h2>
      <div className="forecast">
        
        {forecastArray.map((item, index) => (
          <div className="forecast-item" key={index} style={{ backgroundImage: `url(/images/${backgroundImage})` }}>
            <div>{item.date}</div>
            <div>{item.temp}°{unit === 'metric' ? 'C' : 'F'}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;

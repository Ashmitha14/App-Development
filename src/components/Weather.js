import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WindChart from './WindChart';
import WeatherMap from './WeatherMap';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [windData, setWindData] = useState([]);
  const [position, setPosition] = useState([10.8505, 76.2711]); // Default to Coimbatore coordinates
  const [location, setLocation] = useState('Coimbatore'); // Default location
  const [error, setError] = useState('');

  const fetchWeather = async (place) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=ad6425bdce9e7e89dab43e5a3b34280f&units=metric`);
      setWeather(response.data);
      setPosition([response.data.coord.lat, response.data.coord.lon]);

      const windResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=ad6425bdce9e7e89dab43e5a3b34280f&units=metric`);
      const transformedData = windResponse.data.list.map(item => ({
        time: item.dt_txt,
        speed: item.wind.speed
      }));
      setWindData(transformedData);
      setError('');
    } catch (error) {
      setError('Failed to fetch weather data. Please check your input and try again.');
      console.error('Error fetching weather data:', error.response || error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(location);
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #f0f4f8, #cce0ff)',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: '"Arial", sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#4a90e2' }}>Weather Forecast</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={location} 
          onChange={handleChange} 
          placeholder="Enter a city" 
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '10px',
            margin: '10px auto',
            border: '2px solid #4a90e2',
            borderRadius: '5px',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            transition: 'border-color 0.3s, box-shadow 0.3s'
          }} 
        />
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#4a90e2',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Get Weather
        </button>
      </form>
      {error && <div style={{ textAlign: 'center', color: '#e94e77' }}>{error}</div>}
      {weather ? (
        <>
          <WeatherInfo weather={weather} />
          <WindChart windData={windData} />
          <WeatherMap position={position} />
        </>
      ) : (
        <div style={{ textAlign: 'center', color: '#333' }}>Enter a city and click "Get Weather" to see the forecast.</div>
      )}
    </div>
  );
};

export default Weather;

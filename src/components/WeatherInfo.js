// import React from 'react';

// const WeatherInfo = ({ weather }) => {
//   return (
//     <div style={{
//       maxWidth: '600px',
//       margin: '20px auto',
//       padding: '20px',
//       borderRadius: '10px',
//       backgroundColor: 'white',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       textAlign: 'center'
//     }}>
//       <h1 style={{ color: '#4a90e2' }}>{weather.name}</h1>
//       <h2 style={{ fontSize: '3rem', color: '#333' }}>{weather.main.temp} °C</h2>
//       <p style={{ color: '#666' }}>{weather.weather[0].description}</p>
//       <p style={{ color: '#888' }}>Humidity: {weather.main.humidity}%</p>
//       <p style={{ color: '#888' }}>Wind Speed: {weather.wind.speed} m/s</p>
//     </div>
//   );
// };

// export default WeatherInfo;
import React from 'react';

const WeatherInfo = ({ weather }) => {
  // Extract icon code from the weather data
  const iconCode = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // URL for the weather icon

  return (
    <div style={{
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#4a90e2' }}>{weather.name}</h1>
      <img src={iconUrl} alt={weather.weather[0].description} style={{ width: '100px', height: '100px', margin: '10px 0' }} />
      <h2 style={{ fontSize: '3rem', color: '#333' }}>{weather.main.temp} °C</h2>
      <p style={{ color: '#666' }}>{weather.weather[0].description}</p>
      <p style={{ color: '#888' }}>Humidity: {weather.main.humidity}%</p>
      <p style={{ color: '#888' }}>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherInfo;

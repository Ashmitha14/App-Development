// // src/components/PlantGrowthAI.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Typography, Button } from '@mui/material';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// // Register the components with Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const PlantGrowthAI = () => {
//   const [sensorData, setSensorData] = useState({});
//   const [plantStatus, setPlantStatus] = useState('Healthy');
//   const [analyticsData, setAnalyticsData] = useState({ timestamps: [], moistureLevels: [] });
//   const [lightsOn, setLightsOn] = useState(false);

//   useEffect(() => {
//     // Fetch sensor data
//     axios.get('/api/sensor-data')
//       .then(response => setSensorData(response.data))
//       .catch(error => console.error('Error fetching sensor data:', error));

//     // Fetch analytics data
//     axios.get('/api/analytics')
//       .then(response => setAnalyticsData(response.data))
//       .catch(error => console.error('Error fetching analytics:', error));
//   }, []);

//   const handleWaterPlants = () => {
//     axios.post('/api/water-plants')
//       .then(response => console.log('Watering plants:', response))
//       .catch(error => console.error('Error watering plants:', error));
//   };

//   const handleToggleLights = () => {
//     axios.post('/api/toggle-lights')
//       .then(response => {
//         console.log('Toggling lights:', response);
//         setLightsOn(response.data.lightsOn);
//       })
//       .catch(error => console.error('Error toggling lights:', error));
//   };

//   const chartData = {
//     labels: analyticsData.timestamps,
//     datasets: [
//       {
//         label: 'Soil Moisture',
//         data: analyticsData.moistureLevels,
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//       },
//       // Add more datasets for other metrics as needed
//     ],
//   };

//   return (
//     <Box>
//       {/* Sensor Data */}
//       <Box>
//         <Typography variant="h5">Sensor Data</Typography>
//         <Typography>Light: {sensorData.light}</Typography>
//         <Typography>Soil Moisture: {sensorData.moisture}</Typography>
//         <Typography>Temperature: {sensorData.temperature}</Typography>
//         <Typography>Humidity: {sensorData.humidity}</Typography>
//       </Box>

//       {/* Plant Status */}
//       <Box>
//         <Typography variant="h5">Plant Status</Typography>
//         <Typography>{plantStatus}</Typography>
//       </Box>

//       {/* Control Panel */}
//       <Box>
//         <Button variant="contained" onClick={handleWaterPlants}>Water Plants</Button>
//         <Button variant="contained" onClick={handleToggleLights}>
//           {lightsOn ? 'Turn Lights Off' : 'Turn Lights On'}
//         </Button>
//       </Box>

//       {/* Analytics */}
//       <Box>
//         <Typography variant="h5">Analytics</Typography>
//         <Line data={chartData} />
//       </Box>
//     </Box>
//   );
// };

// export default PlantGrowthAI;
// src/components/PlantGrowthAI.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PlantGrowth = () => {
  const [sensorData, setSensorData] = useState({});
  const [plantStatus, setPlantStatus] = useState('Healthy');
  const [analyticsData, setAnalyticsData] = useState({ timestamps: [], moistureLevels: [] });
  const [lightsOn, setLightsOn] = useState(false);

  useEffect(() => {
    // Fetch sensor data
    axios.get('http://localhost:5000/api/sensor-data')
      .then(response => setSensorData(response.data))
      .catch(error => console.error('Error fetching sensor data:', error));

    // Fetch analytics data
    axios.get('http://localhost:5000/api/analytics')
      .then(response => setAnalyticsData(response.data))
      .catch(error => console.error('Error fetching analytics:', error));
  }, []);

  const handleWaterPlants = () => {
    axios.post('http://localhost:5000/api/water-plants')
      .then(response => console.log('Watering plants:', response))
      .catch(error => console.error('Error watering plants:', error));
  };

  const handleToggleLights = () => {
    axios.post('http://localhost:5000/api/toggle-lights')
      .then(response => {
        console.log('Toggling lights:', response);
        setLightsOn(response.data.lightsOn);
      })
      .catch(error => console.error('Error toggling lights:', error));
  };

  const chartData = {
    labels: analyticsData.timestamps,
    datasets: [
      {
        label: 'Soil Moisture',
        data: analyticsData.moistureLevels,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <Box>
      {/* Sensor Data */}
      <Box>
        <Typography variant="h5">Sensor Data</Typography>
        <Typography>Light: {sensorData.light}</Typography>
        <Typography>Soil Moisture: {sensorData.moisture}</Typography>
        <Typography>Temperature: {sensorData.temperature}</Typography>
        <Typography>Humidity: {sensorData.humidity}</Typography>
      </Box>

      {/* Plant Status */}
      <Box>
        <Typography variant="h5">Plant Status</Typography>
        <Typography>{plantStatus}</Typography>
      </Box>

      {/* Control Panel */}
      <Box>
        <Button variant="contained" onClick={handleWaterPlants}>Water Plants</Button>
        <Button variant="contained" onClick={handleToggleLights}>
          {lightsOn ? 'Turn Lights Off' : 'Turn Lights On'}
        </Button>
      </Box>

      {/* Analytics */}
      <Box>
        <Typography variant="h5">Analytics</Typography>
        <Line data={chartData} />
      </Box>
    </Box>
  );
};

export default PlantGrowth;

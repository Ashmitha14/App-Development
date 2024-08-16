// import React, { useState } from 'react';
// import axios from 'axios';

// const PlantDetails = () => {
//   const [plant, setPlant] = useState(null);
//   const [plantName, setPlantName] = useState('');
//   const [error, setError] = useState('');

//   const fetchPlantDetails = async (plantName) => {
//     try {
//       const response = await axios.post('https://api.plant.id/v2/identify', {
//         api_key: 'your_api_key_here',
//         plant_details: ['common_names', 'edible_parts'],
//         images: ['image_url_here'] // Replace with your image URL
//       });

//       setPlant(response.data);
//       setError('');
//     } catch (error) {
//       setError('Failed to fetch plant details. Please check your input and try again.');
//       console.error('Error fetching plant details:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchPlantDetails(plantName);
//   };

//   const handleChange = (e) => {
//     setPlantName(e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={plantName} 
//           onChange={handleChange} 
//           placeholder="Enter a plant name" 
//           style={{
//             width: '100%',
//             maxWidth: '400px',
//             padding: '10px',
//             margin: '20px auto',
//             border: '2px solid #4a90e2',
//             borderRadius: '5px',
//             fontSize: '16px',
//             outline: 'none',
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//             transition: 'border-color 0.3s, box-shadow 0.3s'
//           }} 
//         />
//         <button 
//           type="submit"
//           style={{
//             padding: '10px 20px',
//             margin: '10px',
//             border: 'none',
//             borderRadius: '5px',
//             backgroundColor: '#4a90e2',
//             color: 'white',
//             fontSize: '16px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s'
//           }}
//         >
//           Get Plant Details
//         </button>
//       </form>
//       {error && <div>{error}</div>}
//       {plant && (
//         <div>
//           <h2>{plant.common_names.join(', ')}</h2>
//           <p>Edible parts: {plant.edible_parts.join(', ')}</p>
//           {/* Add more plant details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlantDetails;




// import React, { useState } from 'react';
// import axios from 'axios';

// const PlantInfo = () => {
//   const [plant, setPlant] = useState(null);
//   const [plantName, setPlantName] = useState('');
//   const [error, setError] = useState('');

//   const fetchPlant = async (name) => {
//     try {
//       const response = await axios.post('https://api.plant.id/v2/identify', {
//         images: [],
//         organs: [],
//         latitude: null,
//         longitude: null,
//         similar_images: false,
//         key: '1TnJXQI9EqUzTzAAxeiFQmVW3AnoPIo6wDzy8Wh3raCaQKyVKD'
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Api-Key': '1TnJXQI9EqUzTzAAxeiFQmVW3AnoPIo6wDzy8Wh3raCaQKyVKD'
//         }
//       });

//       if (response.data && response.data.plant_name) {
//         setPlant(response.data);
//         setError('');
//       } else {
//         setError('No plant data found.');
//       }
//     } catch (error) {
//       setError('Failed to fetch plant details. Please check your input and try again.');
//       console.error('Error fetching plant data:', error.response || error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchPlant(plantName);
//   };

//   const handleChange = (e) => {
//     setPlantName(e.target.value);
//   };

//   const PlantInfos = ({ plant }) => {
//     return (
//       <div style={{
//         maxWidth: '600px',
//         margin: '20px auto',
//         padding: '20px',
//         borderRadius: '10px',
//         backgroundColor: 'white',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center'
//       }}>
//         <h1 style={{ color: '#4a90e2' }}>{plant.plant_name}</h1>
//         <p style={{ color: '#666' }}>{plant.description}</p>
//         <p style={{ color: '#888' }}>Care Level: {plant.care_level}</p>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={plantName}
//           onChange={handleChange}
//           placeholder="Enter a plant name"
//           style={{
//             width: '100%',
//             maxWidth: '400px',
//             padding: '10px',
//             margin: '20px auto',
//             border: '2px solid #4a90e2',
//             borderRadius: '5px',
//             fontSize: '16px',
//             outline: 'none',
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//             transition: 'border-color 0.3s, box-shadow 0.3s'
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: '10px 20px',
//             margin: '10px',
//             border: 'none',
//             borderRadius: '5px',
//             backgroundColor: '#4a90e2',
//             color: 'white',
//             fontSize: '16px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s'
//           }}
//         >
//           Get Plant Info
//         </button>
//       </form>
//       {error && <div>{error}</div>}
//       {plant ? (
//         <PlantInfos plant={plant} />
//       ) : (
//         <div>Enter a plant name and click "Get Plant Info" to see the details.</div>
//       )}
//     </div>
//   );
// };

// export default PlantInfo;
// PlantInfo.js
import React, { useState } from 'react';
import axios from 'axios';

const PlantInfo = () => {
  const [plant, setPlant] = useState(null);
  const [plantName, setPlantName] = useState('');
  const [error, setError] = useState('');

  const fetchPlant = async (name) => {
    try {
      const response = await axios.post('https://api.plant.id/v2/identify', {
        api_key: 'bpfTmq5jWv3vrm1jAZpaspITcKhJ1hJU0JYdiD1gM591xkaFke',
        images: [],
        plant_details: {
          common_names: true,
          url: true,
          wiki_description: true,
          taxonomy: true
        },
        plant_list: [name],
      });

      console.log(response.data);

      if (response.data && response.data.suggestions && response.data.suggestions.length > 0) {
        setPlant(response.data.suggestions[0].plant_details);
        setError('');
      } else {
        setError('No plant data found.');
      }
    } catch (error) {
      setError('Failed to fetch plant details. Please check your input and try again.');
      console.error('Error fetching plant data:', error.response || error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPlant(plantName);
  };

  const handleChange = (e) => {
    setPlantName(e.target.value);
  };

  const PlantInfos = ({ plant }) => {
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
        <h1 style={{ color: '#4a90e2' }}>{plant.common_names[0]}</h1>
        <p style={{ color: '#666' }}>{plant.wiki_description.value}</p>
        <p style={{ color: '#888' }}>Scientific Name: {plant.scientific_name}</p>
        <p style={{ color: '#888' }}>Family: {plant.family}</p>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={plantName}
          onChange={handleChange}
          placeholder="Enter a plant name"
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '10px',
            margin: '20px auto',
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
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#4a90e2',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Get Plant Info
        </button>
      </form>
      {error && <div>{error}</div>}
      {plant ? (
        <PlantInfos plant={plant} />
      ) : (
        <div>Enter a plant name and click "Get Plant Info" to see the details.</div>
      )}
    </div>
  );
};

export default PlantInfo;

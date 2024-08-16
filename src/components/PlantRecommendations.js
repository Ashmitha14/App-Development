// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import axios from 'axios';

// const StyledBox = styled(Box)(({ theme }) => ({
//   background: 'linear-gradient(135deg, #e2e2e2 30%, #ffffff 90%)',
//   padding: theme.spacing(3),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[4],
// }));

// const CustomCard = styled(Card)(({ theme }) => ({
//   maxWidth: 600,
//   margin: 'auto',
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[6],
//   overflow: 'hidden',
// }));

// const PlantCare = () => {
//   const [plantName, setPlantName] = useState('');
//   const [careInfo, setCareInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.get(`https://api.plant.id/v2/plant?common_name=${plantName}`, {
//         headers: {
//           'Api-Key': 'YOUR_API_KEY'  // Replace with your Plant.id API key
//         }
//       });
//       console.log('API Response:', response); // Log the response for debugging

//       // Check the structure of the API response and adjust accordingly
//       const plant = response.data.plant; // Adjust based on actual API response
//       setCareInfo({
//         name: plant.common_name || plant.name || "No name available",
//         description: plant.description || "No description available.",
//         care: plant.care_instructions || "Care instructions not provided by API" // Adjust based on actual API response
//       });
//     } catch (err) {
//       console.error('API Error:', err); // Log the error for debugging
//       setCareInfo(null);
//       setError('No information available or an error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StyledBox>
//       <Typography variant="h4" gutterBottom align="center" color="primary">
//         Plant Care Instructions
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         <Grid item xs={12} md={8}>
//           <TextField
//             label="Enter Plant Name"
//             variant="outlined"
//             value={plantName}
//             onChange={(e) => setPlantName(e.target.value)}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSearch}
//             fullWidth
//             sx={{ mb: 3 }}
//             disabled={loading}
//           >
//             {loading ? 'Loading...' : 'Get Care Instructions'}
//           </Button>
//           {error && <Typography color="error">{error}</Typography>}
//         </Grid>
//         <Grid item xs={12} md={8}>
//           {careInfo && (
//             <CustomCard>
//               <CardContent>
//                 <Typography variant="h5">{careInfo.name}</Typography>
//                 <Typography variant="body1" sx={{ mt: 1 }}>
//                   <strong>Description:</strong> {careInfo.description}
//                 </Typography>
//                 <Typography variant="body1" sx={{ mt: 2 }}>
//                   <strong>Care Instructions:</strong> <span dangerouslySetInnerHTML={{ __html: careInfo.care }} />
//                 </Typography>
//               </CardContent>
//             </CustomCard>
//           )}
//         </Grid>
//       </Grid>
//     </StyledBox>
//   );
// };

// export default PlantCare;

// src/components/PlantRecommendations.js

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const StyledBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #e2e2e2 30%, #ffffff 90%)',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
}));

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[6],
  overflow: 'hidden',
}));

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
}));
const plantCareInstructions = {
  "Rose": {
    description: "I’m Rose, a timeless symbol of beauty and romance. Known for my stunning blooms and delightful fragrance, I can bring a touch of elegance to any space. I thrive in gardens and can also be grown in pots. With proper care, I reward you with a gorgeous display of flowers in various colors.",
    care: "🌱 Care Level – Moderate: Roses require consistent care but reward you with beautiful blooms.<br><br>🐾 Pet-Friendly – Safe: Generally non-toxic to pets, but some varieties may cause minor stomach upset if ingested.<br><br>☀️ Light – Full Sun: Needs at least 6 hours of direct sunlight per day to flourish.<br><br>💧 Water – Regular: Keep the soil consistently moist but not waterlogged. Water at the base to avoid wetting the foliage.<br><br>🌫️ Humidity – Moderate: Prefers average home humidity but can tolerate drier conditions.<br><br>🌡️ Temperature – Moderate: Thrives in temperatures between 60°F to 75°F (15°C to 24°C). Protect from extreme temperatures and frost.<br><br>🌍 Hardiness Zones – 3-10: Can be grown outdoors in these zones. May need protection in colder climates.<br><br>🌿 Fertilizing – Regular: Fertilize every 4-6 weeks during the growing season (spring and summer) with a balanced fertilizer.<br><br>🪴 Re-potting – As Needed: Re-pot when the plant becomes root-bound or outgrows its container. Use a rich, well-draining soil mix.<br><br>🧹 Cleaning – Occasional: Remove spent blooms and dead leaves to promote healthy growth. Prune as needed.<br><br>🌱 Propagation – Cuttings: Propagate from cuttings taken in late summer or early fall.<br><br>🌎 Origins – Various: Native to various regions, including Europe, Asia, and North America, with numerous hybrid varieties."
  },
  "Bird of Paradise": {
    description: "I’m Bird of Paradise and I’m exactly what I sound like: exotic, lush, and beautiful. I get my name from the beautiful flowers that I bloom from late fall to spring. They are a beautiful shade of blue and orange and when you turn the flower to the side, you will see a bird shape. These bright and vibrant hues will leave you feeling happier and ultimately reduce your stress levels. My lush, green leaves are great for cleaning and purifying the air in your home.",
    care: "🌱 Care Level – Moderate: Bird of Paradise (Strelitzia reginae) requires some attention, especially in terms of light and watering, but is generally hardy.<br><br>🐾 Pet-Friendly – Warning: Toxic to pets if ingested. Can cause mild to severe digestive distress. Keep away from animals.<br><br>☀️ Light – Bright: Needs bright, indirect sunlight. Direct sunlight is fine too, but too little light will prevent it from flowering.<br><br>💧 Water – Regular: Water thoroughly and allow the top inch of soil to dry out between waterings. Reduce watering in winter.<br><br>🌫️ Humidity – Moderate: Prefers some humidity but is quite tolerant of average home humidity levels.<br><br>🌡️ Temperature – Warm: Ideal temperatures are between 65-70°F (18-21°C). Avoid temperatures below 50°F (10°C).<br><br>🌍 Hardiness Zones – 10-12: Can be grown outdoors in these zones. In colder climates, it’s a popular indoor plant.<br><br>🌿 Fertilizing – Regular: Fertilize every two weeks in spring and summer with a balanced fertilizer. Reduce in fall and winter.<br><br>🪴 Re-potting – Every 2-3 Years: Re-pot when the roots are crowded, typically every 2-3 years. Use a well-draining soil mix.<br><br>🧹 Cleaning – Occasional: Wipe leaves with a damp cloth to remove dust and enhance the plant’s appearance.<br><br>🌱 Propagation – Division: Propagate by dividing the root clump, ideally during re-potting.<br><br>🌎 Origin – South Africa: Native to South Africa, this plant is named for its spectacular flowers, which resemble a bird in flight."
  },
  "Spider Plant": {
    description: "I’m Spider Plant. Easy to grow and I require little upkeep but provide a ton of benefits to my plant parents. I look beautiful when you hang me and your house and I can adapt to almost any situation. I’m pretty much made to clean your air, I clear your room of pollutants! Oh.. and I have babies, tons of babies.",
    care: "🌱 Care Level – Easy: Ideal for beginners. Tolerates a range of indoor conditions.<br><br>🐾 Pet-Friendly – Safe: Non-toxic to pets, making it a great option for households with animals.<br><br>☀️ Light – Bright, Indirect Light: Prefers bright, indirect sunlight but can tolerate lower light conditions.<br><br>💧 Water – Moderate Watering: Allow the topsoil to dry out between waterings. Avoid overwatering to prevent root rot.<br><br>🌫️ Humidity – Average Humidity: Adapts well to average home humidity levels. No special humidity requirements.<br><br>🌡️ Temperature – Moderate Temperature: Prefers temperatures between 65°F to 75°F (18°C to 24°C). Avoid cold drafts and extreme temperatures.<br><br>🌍 Hardiness Zones – 9-11: Can be grown outdoors in these zones but is predominantly kept as an indoor plant.<br><br>🌿 Fertilizing – Light Feeding: Fertilize lightly during the growing season (spring and summer) with a balanced, water-soluble fertilizer.<br><br>🪴 Re-potting – Every 2-3 Years: Re-pot when it becomes root-bound, using a well-draining potting mix.<br><br>🧹 Cleaning – Regular Dusting: Wipe leaves with a damp cloth to remove dust and support healthy growth.<br><br>🌱 Propagation – Easy: Propagate from plantlets (spiderettes) that grow from the mother plant. Can be rooted in water or soil.<br><br>🌎 Origins – Tropical and Southern Africa: Originally from regions in tropical and southern Africa. Adapted to a variety of indoor environments around the world."
  },
  "Golden Pothos": {
    description: "I’m Golden Pothos but some people call me Devil’s Ivy (because I’m basically hard to kill). I’m excellent at cleaning the air around you of toxins and I love to vine myself around your home. Whether you’re a first-time plant parent or a plant expert, I am a favorite amongst everyone. Also, I hope you like commitment because I can live up to 10 years.",
    care: "🌱 Care Level – Easy: Ideal for beginners. Tolerates a range of indoor conditions.<br><br>🐾 Pet-Friendly – Warning: Toxic to pets if ingested. Keep out of reach of animals.<br><br>☀️ Light – Moderate to Low Light: Thrives in bright, indirect light but can tolerate low light. Avoid direct sunlight.<br><br>💧 Water – Moderate: Allow the top inch of soil to dry out between waterings. Overwatering can lead to root rot.<br><br>🌫️ Humidity – Tolerant: Adapts well to average home humidity. Benefits from occasional misting.<br><br>🌡️ Temperature – Warmth Loving: Prefers temperatures between 65°F to 85°F (18°C to 29°C). Avoid cold drafts and sudden temperature changes.<br><br>🌍 Hardiness Zones – 10-12: Primarily grown as an indoor plant; can be grown outdoors in these zones.<br><br>🌿 Fertilizing – Light Feeding: Fertilize once a month during the growing season (spring and summer) with a balanced, water-soluble fertilizer.<br><br>🪴 Re-potting – Infrequent: Re-pot every 2-3 years or when roots become crowded. Use a well-draining potting mix.<br><br>🧹 Cleaning – Dust Removal: Wipe leaves with a damp cloth to remove dust and support photosynthesis.<br><br>🌱 Propagation – Easy: Propagate by stem cuttings in water or soil. Ideal for sharing with friends.<br><br>🌎 Origins – Tropical Forests: Native to Mo’orea in the Society Islands of French Polynesia."
  }
};

const PlantCare = () => {
    const [plantName, setPlantName] = useState('');
    const [careInfo, setCareInfo] = useState(null);
  
    const handleSearch = () => {
      const info = plantCareInstructions[plantName];
      setCareInfo(info || { description: "No information available.", care: "" });
    };
  
    return (
      <StyledBox>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Plant Care Instructions
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <TextField
              label="Enter Plant Name"
              variant="outlined"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              fullWidth
              sx={{ mb: 3 }}
            >
              Get Care Instructions
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {careInfo && (
              <CustomCard>
                <CardContent>
                  <Typography variant="h5">{plantName}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    <strong>Description:</strong> {careInfo.description}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    <strong>Care Instructions:</strong> <span dangerouslySetInnerHTML={{ __html: careInfo.care }} />
                  </Typography>
                </CardContent>
              </CustomCard>
            )}
          </Grid>
        </Grid>
      </StyledBox>
    );
  };
export default PlantCare;

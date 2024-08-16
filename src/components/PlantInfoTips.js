import React, { useState, useEffect } from 'react';
import PlantInfoTips from './PlantInfoTips';

const PlantTip = () => {
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        console.log('Fetching plant data...');
        // Mock data for testing
        const mockData = {
          commonName: "Apple Tree",
          scientificName: "Malus domestica",
          careTips: {
            lightRequirements: "Apple trees thrive in full sun, requiring at least 6-8 hours of direct sunlight daily.",
            soilConditions: "They prefer well-drained, fertile soil with a pH level between 6.0 and 7.0.",
            watering: "Apple trees need regular watering, especially during dry spells.",
            fertilization: "Apply a balanced fertilizer in early spring as the tree begins to grow.",
            pruning: "Prune the tree annually during the dormant season.",
            pestDiseaseManagement: "Monitor the tree for signs of pests and diseases."
          }
        };
        setPlantData(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching plant data:', error);
        setError(`Error fetching plant data: ${error.message}`);
        setLoading(false);
      }
    };

    fetchPlantData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Plant Care Tips</h1>
      <PlantInfoTips plantData={plantData} />
    </div>
  );
};

export default PlantTip;

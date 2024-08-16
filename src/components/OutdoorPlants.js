// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, IconButton, Badge } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import HomeIcon from '@mui/icons-material/Home';

// import axios from 'axios';

// const plants = [
//     {
//       id: 1,
//       name: 'Taiwan Pink Guava Plant',
//       description: 'A tropical plant with delicious pink guavas.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/12/Taiwan-pink-guava-1-300x300.png',
//       rating: 4.5,
//       price: 39,
//       discount: 25
//     },
//     {
//       id: 2,
//       name: 'Casuarina plant-Savukku Maram',
//       description: 'An ornamental plant known for its aesthetic value.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/WhatsApp-Image-2023-08-27-at-11.37.55-PM-300x300.jpeg',
//       rating: 4.0,
//       price: 20,
//       discount: 20
//     },
//     {
//       id: 3,
//       name: 'Royal Jasmine Plant-Getti Malli',
//       description: 'A fragrant plant with beautiful jasmine flowers.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/1a-300x300.jpg',
//       rating: 4.8,
//       price: 38,
//       discount: 62 
//     },
//     {
//       id: 4,
//       name: 'Arka Kiran Guava (Pink Koiyya Plant)',
//       description: 'A guava plant that produces pink guavas.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/12/Arka-Kiran-Guava-Pink-Koiyya-Plant-1-300x300.jpg',
//       rating: 4.3,  
//       price: 39,
//       discount: 30  
//     },
//     {
//       id: 5,
//       name: 'Pavala Malli-Night Blooming Jasmine Plant',
//       description: 'A jasmine plant that blooms at night.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/Pavala-Malli-Night-blooming-jasmine-Plant-300x300.jpg',
//       rating: 4.7,  
//       price: 38,
//       discount: 36 
//     },
//     {
//       id: 6,
//       name: 'Vetiver Plant (Khus Khus)',
//       description: 'A plant known for its aromatic roots used in perfumes.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/09/Vetiver-Plant-2-300x300.jpg',
//       rating: 4.4,  
//       price: 35,
//       discount: 30  
//     },
//     {
//       id: 7,
//       name: 'Ixora Sandal Plant',
//       description: 'An ornamental plant with vibrant flowers.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/11/Ixora-Sandal-Plant-3-300x300.jpg',
//       rating: 4.2, 
//       price: 30,
//       discount: 40  
//     },
//     {
//       id: 8,
//       name: 'Parijatham Small Plant (Gardenia)',
//       description: 'A fragrant plant with beautiful white flowers.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/01/Parijatham-Plant-Gardenia-1-1-300x300.jpg',
//       rating: 4.6,  
//       price: 34,
//       discount: 32 
//     },
//     {
//       id: 9,
//       name: 'Ixora Red Plant',
//       description: 'A vibrant red flowering plant.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/01/a-2-300x300.jpg',
//       rating: 4.1, 
//       price: 30,
//       discount: 40  
//     },
//     {
//       id: 10,
//       name: 'Teak Plant',
//       description: 'A plant known for its valuable wood.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/teak-300x300.jpg',
//       rating: 4.3,  
//       price: 45,
//       discount: 35  
//     },
//     {
//       id: 11,
//       name: 'Fragrance Kagattan Plant (Star Jasmine Scented)',
//       description: 'A jasmine plant with a pleasant fragrance.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/2b-300x300.jpg',
//       rating: 4.5, 
//       price: 38,
//       discount: 27  
//     },
//     {
//       id: 12,
//       name: 'Big Parijatham Plant (Big Gardenia)',
//       description: 'A larger variety of the Gardenia plant with fragrant flowers.',
//       image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/01/Big-Parijatham-flower-Plant-1-300x300.jpg',
//       rating: 4.4,
//       price: 39,
//       discount: 25
//     }
//   ];
  

//   const OutdoorPlants = () => {
//     const [cart, setCart] = useState([]);
  
//     useEffect(() => {
//       fetchCartItems();
//     }, []);
  
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:3003/cartItems');
//         setCart(response.data);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };
  
//     const addToCart = async (plant) => {
//       const cartItem = {
//         id: plant.id,
//         name: plant.name,
//         description: plant.description,
//         image: plant.image,
//         rating: plant.rating,
//         price: plant.price,  
//         discount: plant.discount
//       };
  
//       try {
//         await axios.post('http://localhost:3003/cartItems', cartItem);
//         fetchCartItems();
//       } catch (error) {
//         console.error('Error adding to cart:', error);
//       }
//     };
  
//     return (
//       <div>
//          <AppBar position="fixed">
//         <Toolbar>
//           <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home">
//             <HomeIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Outdoor Plants
//           </Typography>
//           <IconButton component={Link} to="/cart" color="inherit">
//             <Badge badgeContent={cart.length} color="secondary">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//         <Routes>
//           <Route path="/cart" element={<Cart cart={cart} />} />
//           <Route path="/" element={<PlantList plants={plants} addToCart={addToCart} />} />
//         </Routes>
//         <Footer />
//       </div>
//     );
//   };
  
//   const PlantList = ({ plants, addToCart }) => (
//     <Grid container spacing={4} style={{ padding: 24 , marginTop: '20px'}} >
//       {plants.map((plant) => (
//         <Grid item key={plant.id} xs={12} sm={6} md={3}> {/* Adjusted to md={3} to fit more items */}
//           <Card>
//             <CardMedia
//               component="img"
//               style={{ height: '200px', objectFit: 'contain' }}
//               image={plant.image}
//               alt={plant.name}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {plant.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {plant.description}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Rating: {plant.rating}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Price: ₹{plant.price}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Discount: {plant.discount}%
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button size="small" onClick={() => addToCart(plant)}>Add to Cart</Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
  
//   const Cart = ({ cart }) => (
//     <div style={{ padding: 24 }}>
//       <Typography variant="h4" gutterBottom>
//         Cart
//       </Typography>
//       {cart.length === 0 ? (
//         <Typography variant="body1">Your cart is empty</Typography>
//       ) : (
//         <Grid container spacing={2}>
//           {cart.map((item) => (
//             <Grid item key={item.id} xs={12}>
//               <Card style={{ marginBottom: 16 }}>
//                 <CardContent>
//                   <Typography variant="h6">{item.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.description}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Rating: {item.rating}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Price: ₹{item.price}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Discount: {item.discount}%
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </div>
//   );
  
//   const Footer = () => (
//     <footer style={{ marginTop: 'auto', padding: 16, textAlign: 'center' }}>
//       <Typography variant="body2" color="text.secondary">
//         &copy; Green Paradise
//       </Typography>
//     </footer>
//   );
  
//   export default OutdoorPlants;



import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, IconButton, Badge, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';

// Data for plants
const plants = [
  {
    id: 1,
    name: 'Taiwan Pink Guava Plant',
    description: 'A tropical plant with delicious pink guavas.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/12/Taiwan-pink-guava-1-300x300.png',
    rating: 4.5,
    price: 39,
    discount: 25
  },
  {
    id: 2,
    name: 'Casuarina plant-Savukku Maram',
    description: 'An ornamental plant known for its aesthetic value.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/WhatsApp-Image-2023-08-27-at-11.37.55-PM-300x300.jpeg',
    rating: 4.0,
    price: 20,
    discount: 20
  },
  {
    id: 3,
    name: 'Royal Jasmine Plant-Getti Malli',
    description: 'A fragrant plant with beautiful jasmine flowers.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/1a-300x300.jpg',
    rating: 4.8,
    price: 38,
    discount: 62 
  },
  {
    id: 4,
    name: 'Arka Kiran Guava (Pink Koiyya Plant)',
    description: 'A guava plant that produces pink guavas.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/12/Arka-Kiran-Guava-Pink-Koiyya-Plant-1-300x300.jpg',
    rating: 4.3,  
    price: 39,
    discount: 30  
  },
  {
    id: 5,
    name: 'Pavala Malli-Night Blooming Jasmine Plant',
    description: 'A jasmine plant that blooms at night.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/Pavala-Malli-Night-blooming-jasmine-Plant-300x300.jpg',
    rating: 4.7,  
    price: 38,
    discount: 36 
  },
  {
    id: 6,
    name: 'Vetiver Plant (Khus Khus)',
    description: 'A plant known for its aromatic roots used in perfumes.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/09/Vetiver-Plant-2-300x300.jpg',
    rating: 4.4,  
    price: 35,
    discount: 30  
  },
  {
    id: 7,
    name: 'Ixora Sandal Plant',
    description: 'An ornamental plant with vibrant flowers.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/11/Ixora-Sandal-Plant-3-300x300.jpg',
    rating: 4.2, 
    price: 30,
    discount: 40  
  },
  {
    id: 8,
    name: 'Parijatham Small Plant (Gardenia)',
    description: 'A fragrant plant with beautiful white flowers.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/01/Parijatham-Plant-Gardenia-1-1-300x300.jpg',
    rating: 4.6,  
    price: 34,
    discount: 32 
  },
  {
    id: 9,
    name: 'Ixora Red Plant',
    description: 'A vibrant red flowering plant.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/01/a-2-300x300.jpg',
    rating: 4.1, 
    price: 30,
    discount: 40  
  },
  {
    id: 10,
    name: 'Teak Plant',
    description: 'A plant known for its valuable wood.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/teak-300x300.jpg',
    rating: 4.3,  
    price: 45,
    discount: 35  
  },
  {
    id: 11,
    name: 'Fragrance Kagattan Plant (Star Jasmine Scented)',
    description: 'A jasmine plant with a pleasant fragrance.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2020/10/2b-300x300.jpg',
    rating: 4.5, 
    price: 38,
    discount: 27  
  },
  {
    id: 12,
    name: 'Big Parijatham Plant (Big Gardenia)',
    description: 'A larger variety of the Gardenia plant with fragrant flowers.',
    image: 'https://www.santhionlineplants.com/wp-content/uploads/2021/01/Big-Parijatham-flower-Plant-1-300x300.jpg',
    rating: 4.4,
    price: 39,
    discount: 25
  }
];

// Main component
const OutdoorPlants = () => {
  const [cart, setCart] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3003/cartItems');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (plant) => {
    const cartItem = {
      id: plant.id,
      name: plant.name,
      description: plant.description,
      image: plant.image,
      rating: plant.rating,
      price: plant.price,
      discount: plant.discount
    };

    try {
      await axios.post('http://localhost:3003/cartItems', cartItem);
      fetchCartItems();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleShowDetails = (plant) => {
    setSelectedPlant(plant);
  };

  const handleCloseDetails = () => {
    setSelectedPlant(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Outdoor Plants
          </Typography>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/" element={<PlantList plants={plants} addToCart={addToCart} onShowDetails={handleShowDetails} />} />
      </Routes>
      <Footer />
      {selectedPlant && (
        <Dialog open={!!selectedPlant} onClose={handleCloseDetails}>
          <DialogTitle>{selectedPlant.name}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">{selectedPlant.description}</Typography>
            <Typography variant="body2">Rating: {selectedPlant.rating}</Typography>
            <Typography variant="body2">Price: ₹{selectedPlant.price}</Typography>
            <Typography variant="body2">Discount: {selectedPlant.discount}%</Typography>
            <img src={selectedPlant.image} alt={selectedPlant.name} style={{ width: '100%', height: 'auto' }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetails} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

// PlantList component
const PlantList = ({ plants, addToCart, onShowDetails }) => (
  <Grid container spacing={4} style={{ padding: 24, marginTop: '20px' }}>
    {plants.map((plant) => (
      <Grid item key={plant.id} xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            style={{ height: '200px', objectFit: 'contain' }}
            image={plant.image}
            alt={plant.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {plant.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {plant.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: {plant.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ₹{plant.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discount: {plant.discount}%
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => addToCart(plant)}>Add to Cart</Button>
            <IconButton onClick={() => onShowDetails(plant)}>
              <InfoIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

// Cart component
const Cart = ({ cart }) => (
  <div style={{ padding: 24 }}>
    <Typography variant="h4" gutterBottom>
      Cart
    </Typography>
    {cart.length === 0 ? (
      <Typography variant="body1">Your cart is empty</Typography>
    ) : (
      <Grid container spacing={2}>
        {cart.map((item) => (
          <Grid item key={item.id} xs={12}>
            <Card style={{ marginBottom: 16 }}>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {item.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹{item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discount: {item.discount}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}
  </div>
);

// Footer component
const Footer = () => (
  <footer style={{ marginTop: 'auto', padding: 16, textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary">
      &copy; Green Paradise
    </Typography>
  </footer>
);

export default OutdoorPlants;

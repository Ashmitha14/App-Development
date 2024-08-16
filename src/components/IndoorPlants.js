// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, AppBar, Toolbar, IconButton, Badge } from '@mui/material';
// import { Link, Routes, Route } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { ArrowUpward } from '@mui/icons-material';
// import axios from 'axios';
// const scrollToTop = () => {
//   window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//   });
// };
// const indoorPlants = [
//     {
//       id: 1,
//       name: 'Peace Lily Plant',
//       description: 'A popular indoor plant with beautiful white blooms.',
//       rating: 4.8,
//       price: '399',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375',
//         'https://m.media-amazon.com/images/I/41XTG8ZsUUL._AC_UF1000,1000_QL80_.jpg'
//       ],
//     },
//     {
//       id: 2,
//       name: 'Bamboo Palm Plant',
//       description: 'An elegant plant that adds a tropical touch to your home.',
//       rating: 4.8,
//       price: '499',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355&width=375',
//         'https://example.com/bamboo-palm-plant-2.jpg'
//       ],
//     },
//     {
//       id: 3,
//       name: 'Monstera Deliciosa Plant',
//       description: 'Known for its large, split leaves, this plant makes a bold statement.',
//       rating: 4.8,
//       price: '1,499',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/2_430a864d-f4ed-46d0-b5e6-ff0d55c422db.jpg?v=1706608270&width=375',
//         'https://example.com/monstera-deliciosa-plant-2.jpg'
//       ],
//     },
//     {
//       id: 4,
//       name: 'Jade Plant Mini',
//       description: 'A small and easy-to-care-for succulent plant.',
//       rating: 4.8,
//       price: '299',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283&width=375',
//         'https://example.com/jade-plant-mini-2.jpg'
//       ],
//     },
//     {
//       id: 5,
//       name: 'Aglaonema Pink Beauty Plant',
//       description: 'This plant features striking pink and green leaves.',
//       rating: 5.0,
//       price: '899',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/DSC_3263.jpg?v=1694434958&width=375',
//         'https://example.com/aglaonema-pink-beauty-plant-2.jpg'
//       ],
//     },
//     {
//       id: 6,
//       name: 'Areca Palm Plant',
//       description: 'A graceful plant with feathery fronds.',
//       rating: 4.7,
//       price: '599',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/DSC_2431.jpg?v=1692966811&width=375',
//         'https://example.com/areca-palm-plant-2.jpg'
//       ],
//     },
//     {
//       id: 7,
//       name: 'Snake Plant - Golden Hahnii',
//       description: 'A hardy plant with striking golden-edged leaves.',
//       rating: 4.9,
//       price: '299',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-Teal_3edaf641-904e-485f-9d80-e11293f26546.jpg?v=1680435202&width=375',
//         'https://example.com/snake-plant-golden-hahnii-2.jpg'
//       ],
//     },
//     {
//       id: 8,
//       name: 'Lucky Bamboo Plant - 3 Layer',
//       description: 'A symbol of good luck and prosperity.',
//       rating: 4.8,
//       price: '499',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121&width=375',
//         'https://example.com/lucky-bamboo-plant-3-layer-2.jpg'
//       ],
//     },
//     {
//       id: 9,
//       name: 'Anthurium Red Plant',
//       description: 'Features bright red flowers and glossy leaves.',
//       rating: 4.8,
//       price: '999',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/DSC_3273.jpg?v=1695228127&width=375',
//         'https://example.com/anthurium-red-plant-2.jpg'
//       ],
//     },
//     {
//       id: 10,
//       name: 'ZZ Plant',
//       description: 'A low-maintenance plant with waxy, dark green leaves.',
//       rating: 4.8,
//       price: '599',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/products/Krish12Planter-Yellow.jpg?v=1706609279&width=375',
//         'https://example.com/zz-plant-2.jpg'
//       ],
//     },
//     {
//       "id": 11,
//       "name": "Money Plant Golden",
//       "description": "A popular and easy-to-care-for indoor plant with golden leaves.",
//       "rating": 4.7,
//       "price": "299",
//       "images": [
//         "https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-PastelPink_97fc1e67-958a-4da8-98b6-31a47bdce6b7.jpg?v=1688563979&width=375",
//         "https://example.com/money-plant-golden-2.jpg"
//       ]
//     },    
//     {
//       id: 12,
//       name: 'Ficus Lyrata Bambino',
//       description: 'An extra-large version of the popular Fiddle Leaf Fig.',
//       rating: 5.0,
//       price: '2,499',
//       images: [
//         'https://www.ugaoo.com/cdn/shop/files/AImage_e21c5516-c7ff-4070-8739-99bf1bc71006.jpg?v=1708074927&width=375',
//         'https://example.com/ficus-lyrata-bambino-xl-2.jpg'
//       ],
//     }
//   ];
  


//   const Footer = () => (
//     <footer style={{ marginTop: 'auto', padding: 16, textAlign: 'center' }}>
//       <Typography variant="body2" color="text.secondary">
//         @ Green Paradise
//       </Typography>
//     </footer>
//   );
  
//   const Cart = ({ cart }) => (
//     <div style={{ padding: 24 }}>
//       <Typography variant="h4" gutterBottom>
//         Cart
//       </Typography>
//       {cart.length === 0 ? (
//         <Typography variant="body1">Your cart is empty</Typography>
//       ) : (
//         cart.map((item, index) => (
//           <Card key={index} style={{ marginBottom: 16 }}>
//             <CardMedia
//               component="img"
//               style={{ height: '200px', objectFit: 'contain' }}
//               image={item.image}  // Ensure 'image' field is present in the cart item
//               alt={item.name}
//             />
//             <CardContent>
//               <Typography variant="h6">{item.name}</Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {item.description}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Rating: {item.rating}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Price: ₹{item.price}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </div>
//   );
  
//   const IndoorPlants = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(
//       indoorPlants.reduce((acc, plant) => {
//         acc[plant.id] = 0;
//         return acc;
//       }, {})
//     );
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
//       try {
//         // Include image field when adding to cart
//         await axios.post('http://localhost:3003/cartItems', {
//           id: plant.id,
//           name: plant.name,
//           description: plant.description,
//           rating: plant.rating,
//           price: plant.price,
//           image: plant.images[0]  // Use the first image URL or adjust as needed
//         });
//         fetchCartItems();
//       } catch (error) {
//         console.error('Error adding to cart:', error);
//       }
//     };
  
//     const toggleImage = (id) => {
//       setCurrentImageIndex((prevState) => ({
//         ...prevState,
//         [id]: (prevState[id] + 1) % indoorPlants.find((plant) => plant.id === id).images.length
//       }));
//     };
  
//     return (
//       <div>
//         <AppBar position="fixed">
//           <Toolbar>
//             <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home">
//               <HomeIcon />
//             </IconButton>
//             <Typography variant="h6" style={{ flexGrow: 1 }}>
//               Indoor Plants Emporium
//             </Typography>
//             <IconButton component={Link} to="/cart" color="inherit">
//               <Badge badgeContent={cart.length} color="secondary">
//                 <ShoppingCartIcon />
//               </Badge>
//             </IconButton>
//           </Toolbar>
//         </AppBar>
  
//         <Routes>
//           <Route path="/cart" element={<Cart cart={cart} />} />
//           <Route
//             path="/"
//             element={
//               <Grid container spacing={4} style={{ padding: 24 ,marginTop: '20px'}}>
//                 {indoorPlants.map((plant) => (
//                   <Grid item key={plant.id} xs={12} sm={6} md={3}>
//                     <Card>
//                       <CardMedia
//                         component="img"
//                         style={{ height: '200px', objectFit: 'contain', cursor: 'pointer' }}
//                         image={plant.images[currentImageIndex[plant.id]]}
//                         alt={plant.name}
//                         onClick={() => toggleImage(plant.id)}
//                       />
//                       <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                           {plant.name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {plant.description}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Rating: {plant.rating}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Price: ₹{plant.price}
//                         </Typography>
//                       </CardContent>
//                       <CardActions>
//                         <Button size="small" onClick={() => addToCart(plant)}>Add to Cart</Button>
//                       </CardActions>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             }
//           />
//         </Routes>
//         <Button
//     onClick={scrollToTop}
//     style={{
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         backgroundColor: '#333',
//         color: '#fff',
//         borderRadius: '50%',
//         boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//     }}
// >
//     <ArrowUpward />
// </Button>
//         <Footer />
//       </div>
//     );
//   };
  
//   export default IndoorPlants;





import React, { useState, useEffect } from 'react';
import {
  Grid, Card, CardMedia, CardContent, CardActions, Typography, Button,
  AppBar, Toolbar, IconButton, Badge, MenuItem, Select, FormControl, InputLabel
} from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ArrowUpward } from '@mui/icons-material';
import axios from 'axios';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const indoorPlants = [
  {
    id: 1,
    name: 'Peace Lily Plant',
    description: 'A popular indoor plant with beautiful white blooms.',
    rating: 4.8,
    price: '399',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg?v=1704867612&width=375',
      'https://m.media-amazon.com/images/I/41XTG8ZsUUL._AC_UF1000,1000_QL80_.jpg'
    ],
  },
  {
    id: 2,
    name: 'Bamboo Palm Plant',
    description: 'An elegant plant that adds a tropical touch to your home.',
    rating: 4.8,
    price: '499',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXhOKHqGi1RAe-A9fmuSIbcDIm3dsPcLQ5g&s'
    ],
  },
  {
    id: 3,
    name: 'Monstera Deliciosa Plant',
    description: 'Known for its large, split leaves, this plant makes a bold statement.',
    rating: 4.8,
    price: '1,499',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/2_430a864d-f4ed-46d0-b5e6-ff0d55c422db.jpg?v=1706608270&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7eWAEb0N_OVWxzR2eqtlRRFGhkeQRJysww&s'
    ],
  },
  {
    id: 4,
    name: 'Jade Plant Mini',
    description: 'A small and easy-to-care-for succulent plant.',
    rating: 4.8,
    price: '299',
    images: [
      'https://www.ugaoo.com/cdn/shop/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283&width=375',
      'https://images.meesho.com/images/products/278491421/njlxv_512.webp'
    ],
  },
  {
    id: 5,
    name: 'Aglaonema Pink Beauty Plant',
    description: 'This plant features striking pink and green leaves.',
    rating: 5.0,
    price: '899',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/DSC_3263.jpg?v=1694434958&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVUSTCUFTxCvUd4OPf1uDVVEyCO2xJZLbZg&s'
    ],
  },
  {
    id: 6,
    name: 'Areca Palm Plant',
    description: 'A graceful plant with feathery fronds.',
    rating: 4.7,
    price: '599',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/DSC_2431.jpg?v=1692966811&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVp1SXjk0i3Fwks-Ilu55pKLyqDPMZDsY1Rw&s'
    ],
  },
  {
    id: 7,
    name: 'Snake Plant - Golden Hahnii',
    description: 'A hardy plant with striking golden-edged leaves.',
    rating: 4.9,
    price: '299',
    images: [
      'https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-Teal_3edaf641-904e-485f-9d80-e11293f26546.jpg?v=1680435202&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pY_V2sasl8tHtFVqPlMzhuMq1tWEh3V4Og&s'
    ],
  },
  {
    id: 8,
    name: 'Lucky Bamboo Plant',
    description: 'A symbol of good luck and prosperity.',
    rating: 4.8,
    price: '499',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP4Kcj39wg_OKEvc8P24STDX6Pp3fFl3nIA&s'
    ],
  },
  {
    id: 9,
    name: 'Anthurium Red Plant',
    description: 'Features bright red flowers and glossy leaves.',
    rating: 4.8,
    price: '999',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/DSC_3273.jpg?v=1695228127&width=375',
      'https://gardenerspath.com/wp-content/uploads/2022/03/How-to-Grow-Anthuriums-Feature.jpg'
    ],
  },
  {
    id: 10,
    name: 'ZZ Plant',
    description: 'A low-maintenance plant with waxy, dark green leaves.',
    rating: 4.8,
    price: '599',
    images: [
      'https://www.ugaoo.com/cdn/shop/products/Krish12Planter-Yellow.jpg?v=1706609279&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRK2YsPmj5i23psqtNe1LJ9IlMFOAk6aX6RQ&s'
    ],
  },
  {
    "id": 11,
    "name": "Golden Money Plant",
    "description": "A popular and easy-to-care-for indoor plant with golden leaves.",
    "rating": 4.7,
    "price": "299",
    "images": [
      "https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-PastelPink_97fc1e67-958a-4da8-98b6-31a47bdce6b7.jpg?v=1688563979&width=375",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9pmpEhQ3W6cOMWuXugY5FaijfVQx84tUgA&s"
    ]
  },    
  {
    id: 12,
    name: 'Ficus Lyrata Bambino',
    description: 'An extra-large version of the popular Fiddle Leaf Fig.',
    rating: 5.0,
    price: '2,499',
    images: [
      'https://www.ugaoo.com/cdn/shop/files/AImage_e21c5516-c7ff-4070-8739-99bf1bc71006.jpg?v=1708074927&width=375',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVrKpEuLYgq1Xi_j4s_04gZJ_KcUkcokzCA&s'
    ],
  }
];

const Footer = () => (
  <footer style={{ marginTop: 'auto', padding: 16, textAlign: 'center' }}>
    <Typography variant="body2" color="text.secondary">
      @ Green Paradise
    </Typography>
  </footer>
);

const Cart = ({ cart }) => (
  <div style={{ padding: 24 }}>
    <Typography variant="h4" gutterBottom>
      Cart
    </Typography>
    {cart.length === 0 ? (
      <Typography variant="body1">Your cart is empty</Typography>
    ) : (
      cart.map((item, index) => (
        <Card key={index} style={{ marginBottom: 16 }}>
          <CardMedia
            component="img"
            style={{ height: '200px', objectFit: 'contain' }}
            image={item.image}  // Ensure 'image' field is present in the cart item
            alt={item.name}
          />
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
          </CardContent>
        </Card>
      ))
    )}
  </div>
);

const IndoorPlants = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    indoorPlants.reduce((acc, plant) => {
      acc[plant.id] = 0;
      return acc;
    }, {})
  );
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortedPlants, setSortedPlants] = useState([...indoorPlants]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    if (filter === 'priceLowToHigh') {
      setSortedPlants([...indoorPlants].sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
    } else if (filter === 'priceHighToLow') {
      setSortedPlants([...indoorPlants].sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
    } else if (filter === 'ratingHighToLow') {
      setSortedPlants([...indoorPlants].sort((a, b) => b.rating - a.rating));
    } else {
      setSortedPlants([...indoorPlants]);
    }
  }, [filter]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3003/cartItems');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (plant) => {
    try {
      // Include image field when adding to cart
      await axios.post('http://localhost:3003/cartItems', {
        id: plant.id,
        name: plant.name,
        description: plant.description,
        rating: plant.rating,
        price: plant.price,
        image: plant.images[0]  // Use the first image URL or adjust as needed
      });
      fetchCartItems();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const toggleImage = (id) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [id]: (prevState[id] + 1) % indoorPlants.find((plant) => plant.id === id).images.length
    }));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Indoor Plants Emporium
          </Typography>
          <FormControl variant="outlined" style={{ minWidth: 120, marginRight: 16 }}>
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={handleFilterChange} label="Filter">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
              <MenuItem value="ratingHighToLow">Rating: High to Low</MenuItem>
            </Select>
          </FormControl>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/"
          element={
            <Grid container spacing={4} style={{ padding: 24, marginTop: '80px' }}>
              {sortedPlants.map((plant) => (
                <Grid item key={plant.id} xs={12} sm={6} md={3}>
                  <Card>
                    <CardMedia
                      component="img"
                      style={{ height: '200px', objectFit: 'contain', cursor: 'pointer' }}
                      image={plant.images[currentImageIndex[plant.id]]}
                      alt={plant.name}
                      onMouseEnter={() => toggleImage(plant.id)}
                      onMouseLeave={() => toggleImage(plant.id)}
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
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => addToCart(plant)}>Add to Cart</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          }
        />
      </Routes>
      <Button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '50%',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}
      >
        <ArrowUpward />
      </Button>
      <Footer />
    </div>
  );
};

export default IndoorPlants;

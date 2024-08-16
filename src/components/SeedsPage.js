// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, IconButton, Badge, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import HomeIcon from '@mui/icons-material/Home';
// import axios from 'axios';

// const seeds = [
//     { id: 1, name: 'Amaranthus tricolor – siru keerai', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/10/Amaranthus-tricolorsiru-keerai-300x300.jpg', originalPrice: 90, currentPrice: 40 },
//     { id: 2, name: 'Bhendi – Ladies Finger Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Bhendi-300x300.jpg', originalPrice: 80, currentPrice: 40 },
//     { id: 3, name: 'Chedi Avarai Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Chedi-Avarai-300x300.jpg', originalPrice: 80, currentPrice: 40 },
//     { id: 4, name: 'Cluster Bean Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Cluster-Beans-300x300.jpg', originalPrice: 80, currentPrice: 40 },
//     { id: 5, name: 'Mesta Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/06/Masta-seeds_24-06-2024-1-300x300.jpg', originalPrice: 100, currentPrice: 29 },
//     { id: 6, name: 'Mochai – Field beans Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Mochai-300x300.jpg', originalPrice: 80, currentPrice: 40 },
//     { id: 7, name: 'Moringa – Drumstick Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Moringa-Seed-300x300.jpg', originalPrice: 80, currentPrice: 40 },
//     { id: 8, name: 'Palak seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/10/Palak-seeds-300x300.jpg', originalPrice: 90, currentPrice: 40 },
//     { id: 9, name: 'Radish Chinese Pink Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/RadishChinese-pink-300x300.jpg', originalPrice: 62, currentPrice: 45 },
//     { id: 10, name: 'Radish Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/06/Radish-Seeds-ex-300x300.jpg', originalPrice: 90, currentPrice: 40 },
//     { id: 11, name: 'Spleen amaranthus (arai keerai)', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/10/Spleen-amaranthusarai-keerai-300x300.jpg', originalPrice: 90, currentPrice: 40 },
//     { id: 12, name: 'Thandukeerai red plant Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Amaranthus-Red-300x300.jpg', originalPrice: 60, currentPrice: 40 },
//     { id: 13, name: 'Yard Long Bean Seeds (Green)', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Yard-Long-Bean-Green-300x300.jpg', originalPrice: 60, currentPrice: 40 },
//   ];

// const SeedsPage = () => {
//   const [cart, setCart] = useState([]);
//   const [filteredSeeds, setFilteredSeeds] = useState(seeds);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [seedType, setSeedType] = useState('all');
//   const [minRating, setMinRating] = useState(0);
//   const [isAvailable, setIsAvailable] = useState(true);
//   const [minDiscount, setMinDiscount] = useState(0);
//   const [sortOrder, setSortOrder] = useState('asc');

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   useEffect(() => {
//     handleSearch();
//     handlePriceFilter();
//     handleTypeFilter();
//     handleRatingFilter();
//     handleAvailabilityFilter();
//     handleDiscountFilter();
//     handleSort();
//   }, [searchTerm, minPrice, maxPrice, seedType, minRating, isAvailable, minDiscount, sortOrder]);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/cartItems');
//       setCart(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const addToCart = async (seed) => {
//     const cartItem = {
//       id: seed.id,
//       name: seed.name,
//       description: seed.description,
//       image: seed.image,
//       rating: seed.rating,
//       price: seed.price,
//       discount: seed.discount
//     };

//     try {
//       await axios.post('http://localhost:3003/cartItems', cartItem);
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const handleSearch = () => {
//     setFilteredSeeds(seeds.filter(seed => seed.name.toLowerCase().includes(searchTerm.toLowerCase())));
//   };

//   const handlePriceFilter = () => {
//     const min = parseInt(minPrice) || 0;
//     const max = parseInt(maxPrice) || Infinity;
//     setFilteredSeeds(seeds.filter(seed => seed.price >= min && seed.price <= max));
//   };

//   const handleTypeFilter = () => {
//     if (seedType === 'all') {
//       setFilteredSeeds(seeds);
//     } else {
//       setFilteredSeeds(seeds.filter(seed => seed.type === seedType));
//     }
//   };

//   const handleRatingFilter = () => {
//     setFilteredSeeds(seeds.filter(seed => seed.rating >= minRating));
//   };

//   const handleAvailabilityFilter = () => {
//     setFilteredSeeds(seeds.filter(seed => seed.available === isAvailable));
//   };

//   const handleDiscountFilter = () => {
//     setFilteredSeeds(seeds.filter(seed => seed.discount >= minDiscount));
//   };

//   const handleSort = () => {
//     const sortedSeeds = [...seeds].sort((a, b) => {
//       if (sortOrder === 'asc') {
//         return a.price - b.price;
//       } else {
//         return b.price - a.price;
//       }
//     });
//     setFilteredSeeds(sortedSeeds);
//   };

//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton edge="start" component="Link" to="/" color="inherit" aria-label="home">
//             <HomeIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Seeds Page
//           </Typography>
//           <IconButton component="Link" to="/cart" color="inherit">
//             <Badge badgeContent={cart.length} color="secondary">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//       <div style={{ padding: 24 }}>
//         <TextField
//           label="Search by Name"
//           variant="outlined"
//           fullWidth
//           style={{ marginBottom: 24 }}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <FormControl fullWidth style={{ marginBottom: 24 }}>
//           <InputLabel>Price Range</InputLabel>
//           <TextField
//             label="Min Price"
//             type="number"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             label="Max Price"
//             type="number"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//             variant="outlined"
//             margin="normal"
//           />
//         </FormControl>
//         <FormControl fullWidth style={{ marginBottom: 24 }}>
//           <InputLabel>Seed Type</InputLabel>
//           <Select
//             value={seedType}
//             onChange={(e) => setSeedType(e.target.value)}
//             label="Seed Type"
//           >
//             <MenuItem value="all">All</MenuItem>
//             <MenuItem value="vegetable">Vegetable</MenuItem>
//             <MenuItem value="herb">Herb</MenuItem>
//             <MenuItem value="flower">Flower</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth style={{ marginBottom: 24 }}>
//           <InputLabel>Min Rating</InputLabel>
//           <Select
//             value={minRating}
//             onChange={(e) => setMinRating(e.target.value)}
//             label="Min Rating"
//           >
//             <MenuItem value={0}>All</MenuItem>
//             <MenuItem value={4}>4 & above</MenuItem>
//             <MenuItem value={4.5}>4.5 & above</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth style={{ marginBottom: 24 }}>
//           <InputLabel>Availability</InputLabel>
//           <Select
//             value={isAvailable}
//             onChange={(e) => setIsAvailable(e.target.value)}
//             label="Availability"
//           >
//             <MenuItem value={true}>Available</MenuItem>
//             <MenuItem value={false}>Not Available</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth style={{ marginBottom: 24 }}>
//           <InputLabel>Min Discount</InputLabel>
//           <Select
//             value={minDiscount}
//             onChange={(e) => setMinDiscount(e.target.value)}
//             label="Min Discount"
//           >
//             <MenuItem value={0}>No Minimum</MenuItem>
//             <MenuItem value={10}>10% & above</MenuItem>
//             <MenuItem value={20}>20% & above</MenuItem>
//             <MenuItem value={30}>30% & above</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth style={{ marginBottom: 24 }}>
//           <InputLabel>Sort by Price</InputLabel>
//           <Select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             label="Sort by Price"
//           >
//             <MenuItem value="asc">Price: Low to High</MenuItem>
//             <MenuItem value="desc">Price: High to Low</MenuItem>
//           </Select>
//         </FormControl>
//         <Grid container spacing={3}>
//           {filteredSeeds.map((seed) => (
//             <Grid item xs={12} sm={6} md={4} key={seed.id}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   alt={seed.name}
//                   height="140"
//                   image={seed.image}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">{seed.name}</Typography>
//                   <Typography variant="body2" color="textSecondary">{seed.description}</Typography>
//                   <Typography variant="body1">${seed.price}</Typography>
//                   {seed.discount > 0 && (
//                     <Typography variant="body2" color="error">
//                       {seed.discount}% OFF
//                     </Typography>
//                   )}
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={() => addToCart(seed)}>
//                     Add to Cart
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default SeedsPage;
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, IconButton, Badge, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const seeds = [
    { id: 1, name: 'Amaranthus tricolor – siru keerai', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/10/Amaranthus-tricolorsiru-keerai-300x300.jpg', originalPrice: 90, currentPrice: 40, description: 'A nutritious leafy green.', rating: 4.5, available: true, discount: 10 },
    { id: 2, name: 'Bhendi – Ladies Finger Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Bhendi-300x300.jpg', originalPrice: 80, currentPrice: 40, description: 'Popular vegetable for a healthy diet.', rating: 4, available: true, discount: 5 },
    { id: 3, name: 'Chedi Avarai Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Chedi-Avarai-300x300.jpg', originalPrice: 80, currentPrice: 40, description: 'Ideal for soups and stews.', rating: 3.5, available: false, discount: 15 },
    { id: 4, name: 'Cluster Bean Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Cluster-Beans-300x300.jpg', originalPrice: 80, currentPrice: 40, description: 'Great for stir-fries.', rating: 4, available: true, discount: 0 },
    // { id: 5, name: 'Mesta Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/06/Masta-seeds_24-06-2024-1-300x300.jpg', originalPrice: 100, currentPrice: 29, description: 'Used for textile production.', rating: 4.5, available: true, discount: 20 },
    { id: 6, name: 'Mochai – Field beans Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Mochai-300x300.jpg', originalPrice: 80, currentPrice: 40, description: 'Nutritious beans for various dishes.', rating: 3.5, available: true, discount: 10 },
    { id: 7, name: 'Moringa – Drumstick Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Moringa-Seed-300x300.jpg', originalPrice: 80, currentPrice: 40, description: 'Known for its medicinal properties.', rating: 5, available: true, discount: 25 },
    { id: 8, name: 'Palak seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/10/Palak-seeds-300x300.jpg', originalPrice: 90, currentPrice: 40, description: 'Perfect for salads and soups.', rating: 4, available: true, discount: 0 },
    { id: 9, name: 'Radish Chinese Pink Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/RadishChinese-pink-300x300.jpg', originalPrice: 62, currentPrice: 45, description: 'Crispy and colorful radishes.', rating: 4, available: true, discount: 5 },
    { id: 10, name: 'Radish Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/06/Radish-Seeds-ex-300x300.jpg', originalPrice: 90, currentPrice: 40, description: 'Ideal for salads and garnishes.', rating: 4.5, available: true, discount: 10 },
    { id: 11, name: 'Spleen amaranthus (arai keerai)', image: 'https://www.santhionlineplants.com/wp-content/uploads/2022/10/Spleen-amaranthusarai-keerai-300x300.jpg', originalPrice: 90, currentPrice: 40, description: 'Rich in nutrients and vitamins.', rating: 4, available: true, discount: 0 },
    { id: 12, name: 'Thandukeerai red plant Seeds', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Amaranthus-Red-300x300.jpg', originalPrice: 60, currentPrice: 40, description: 'Bright and flavorful greens.', rating: 4.5, available: true, discount: 15 },
    { id: 13, name: 'Yard Long Bean Seeds (Green)', image: 'https://www.santhionlineplants.com/wp-content/uploads/2024/07/Yard-Long-Bean-Green-300x300.jpg', originalPrice: 60, currentPrice: 40, description: 'Long and tender beans.', rating: 4, available: true, discount: 0 },
  ];

const SeedsPage = () => {
  const [cart, setCart] = useState([]);
  const [filteredSeeds, setFilteredSeeds] = useState(seeds);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [isAvailable, setIsAvailable] = useState('all');
  const [minDiscount, setMinDiscount] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    filterAndSortSeeds();
  }, [searchTerm, minPrice, maxPrice, minRating, isAvailable, minDiscount, sortOrder]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3003/cartItems');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (seed) => {
    const cartItem = {
      id: seed.id,
      name: seed.name,
      description: seed.description,
      image: seed.image,
      rating: seed.rating,
      price: seed.currentPrice,
      discount: seed.discount
    };

    try {
      await axios.post('http://localhost:3003/cartItems', cartItem);
      fetchCartItems();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const filterAndSortSeeds = () => {
    let updatedSeeds = seeds;

    // Search filter
    if (searchTerm) {
      updatedSeeds = updatedSeeds.filter(seed => seed.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Price filter
    const min = parseInt(minPrice) || 0;
    const max = parseInt(maxPrice) || Infinity;
    updatedSeeds = updatedSeeds.filter(seed => seed.currentPrice >= min && seed.currentPrice <= max);

    // Rating filter
    updatedSeeds = updatedSeeds.filter(seed => seed.rating >= minRating);

    // Availability filter
    if (isAvailable !== 'all') {
      updatedSeeds = updatedSeeds.filter(seed => seed.available === (isAvailable === 'true'));
    }

    // Discount filter
    updatedSeeds = updatedSeeds.filter(seed => seed.discount >= minDiscount);

    // Sort
    updatedSeeds = updatedSeeds.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.currentPrice - b.currentPrice;
      } else {
        return b.currentPrice - a.currentPrice;
      }
    });

    setFilteredSeeds(updatedSeeds);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" component={RouterLink} to="/"color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Seeds Page
          </Typography>
          <IconButton component={RouterLink} to="/cart" color="inherit">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div style={{ padding: 24 }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: 24 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FormControl fullWidth style={{ marginBottom: 24 }}>
          {/* <InputLabel>Price Range</InputLabel> */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Min Price"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Max Price"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: 24 }}>
          <InputLabel>Min Rating</InputLabel>
          <Select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            label="Min Rating"
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={4}>4 & above</MenuItem>
            <MenuItem value={4.5}>4.5 & above</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: 24 }}>
          <InputLabel>Availability</InputLabel>
          <Select
            value={isAvailable}
            onChange={(e) => setIsAvailable(e.target.value)}
            label="Availability"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="true">Available</MenuItem>
            <MenuItem value="false">Not Available</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: 24 }}>
          <InputLabel>Min Discount</InputLabel>
          <Select
            value={minDiscount}
            onChange={(e) => setMinDiscount(e.target.value)}
            label="Min Discount"
          >
            <MenuItem value={0}>No Minimum</MenuItem>
            <MenuItem value={10}>10% & above</MenuItem>
            <MenuItem value={20}>20% & above</MenuItem>
            <MenuItem value={30}>30% & above</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: 24 }}>
          <InputLabel>Sort by Price</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            label="Sort by Price"
          >
            <MenuItem value="asc">Price: Low to High</MenuItem>
            <MenuItem value="desc">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3}>
          {filteredSeeds.map((seed) => (
            <Grid item xs={12} sm={6} md={3} key={seed.id}>
              <Card>
              <CardMedia
  component="img"
  alt={seed.name}
  image={seed.image}
  style={{ height: 150, width: '100%', objectFit: 'contain' }} // Ensure image fits the card while showing the full picture
/>

                <CardContent>
                  <Typography variant="h6">{seed.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{seed.description}</Typography>
                  <Typography variant="body1">₹{seed.currentPrice}</Typography>
                  {seed.discount > 0 && (
                    <Typography variant="body2" color="error">
                      {seed.discount}% OFF
                    </Typography>
                  )}
                  <Typography variant="body2" color="textSecondary">Rating: {seed.rating}</Typography>
                  <Typography variant="body2" color="textSecondary">Available: {seed.available ? 'Yes' : 'No'}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => addToCart(seed)}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SeedsPage;



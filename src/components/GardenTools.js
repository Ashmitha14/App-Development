import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import { ArrowUpward } from '@mui/icons-material';
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};
const tools = [
    {
      id: 1,
      name: 'Outdoor Gardening Kit',
      description: 'A comprehensive kit for outdoor gardening.',
      image: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_e1779c49-2948-47cc-aa53-5ceb4fccf9a1.jpg?v=1712922935&width=375',
      rating: 4.7,
      price: 999,
      discount: 34
    },
    {
      id: 2,
      name: 'Indoor Gardening Kit',
      description: 'Ideal for indoor gardening needs.',
      image: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_a5697ca7-30c8-4930-936d-2f051a7b33ec.jpg?v=1712922721&width=375',
      rating: 4.2,
      price: 699,
      discount: 31
    },
    {
      id: 3,
      name: 'Premium Gardening Kit',
      description: 'A premium kit for serious gardeners.',
      image: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_2e7ebd76-e199-4526-b4b0-e85b30722241.jpg?v=1712923420&width=375',
      rating: 4.7,
      price: 1499,
      discount: 26
    },
    {
      id: 4,
      name: 'Bent Scraper',
      description: 'Useful for scraping and weeding.',
      image: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/bent-scraper-31881695494276.jpg?v=1675575908&width=375',
      rating: 4.5,
      price: 295,
      discount: 24
    },
    {
      id: 5,
      name: 'Hardwood Support Sticks - 3 Ft',
      description: 'Strong and durable support sticks.',
      image: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/files/61LeflLuYCL.jpg?v=1707739291&width=375',
      rating: 4.0,
      price: 499,
      discount: 34
    },
    {
      id: 6,
      name: 'Mini Solar Light Insect Trap, Fly Killer Machine',
      description: 'Effective insect trap using solar light.',
      image: 'https://www.ugaoo.com/cdn/shop/files/DSC_4517.jpg?v=1696685011&width=750',
      rating: 5.0,
      price: 1499,
      discount: 41
    },
    {
      id: 7,
      name: 'Double-Edge Sickle',
      description: 'A versatile sickle for cutting.',
      image: 'https://www.ugaoo.com/cdn/shop/products/double-edge-sickle-31256090706052.png?v=1675578428&width=375',
      rating: 4.8,
      price: 275,
      discount: 30
    },
    {
      id: 8,
      name: 'Trowel with PVC Handle',
      description: 'A handy trowel for gardening.',
      image: 'https://www.ugaoo.com/cdn/shop/products/trowel-with-pvc-handle-32010459545732.jpg?v=1675564020&width=375',
      rating: 5.0,
      price: 199,
      discount: 21
    },
    {
      id: 9,
      name: 'Heavy Duty Bypass Pruner',
      description: 'Pruner for heavy-duty tasks.',
      image: 'https://www.ugaoo.com/cdn/shop/products/2_15ebeba3-8a5d-4b0e-a820-652ab40697aa.jpg?v=1677605268&width=375',
      rating: 5.0,
      price: 599,
      discount: 41
    },
    {
      id: 10,
      name: 'Transplanter with PVC Handle',
      description: 'Useful for transplanting plants.',
      image: 'https://www.ugaoo.com/cdn/shop/products/transplanter-with-pvc-handle-32010451255428.jpg?v=1675564023&width=375',
      rating: 4.6,
      price: 199,
      discount: 21
    },
    {
      id: 11,
      name: 'Mini Garden Bonsai Set',
      description: 'Complete set for bonsai gardening.',
      image: 'https://www.ugaoo.com/cdn/shop/files/DSC_4172.jpg?v=1695463396&width=375',
      rating: 4.7,
      price: 399,
      discount: 34
    },
    {
      id: 12,
      name: 'Heavy Duty Anvil Pruner',
      description: 'Durable anvil pruner.',
      image: 'https://www.ugaoo.com/cdn/shop/products/heavy-duty-anvil-pruner-32010533306500.jpg?v=1675563834&width=375',
      rating: 5.0,
      price: 499,
      discount: 51
    },
    {
      id: 13,
      name: 'Hedge Shear with Wooden Handle - 10 Inch',
      description: 'Shears for trimming hedges.',
      image: 'https://www.ugaoo.com/cdn/shop/products/hedge-shear-with-wooden-handle-10-inch-32010501259396.jpg?v=1675563845&width=375',
      rating: 5.0,
      price: 999,
      discount: 24
    },
    {
      id: 14,
      name: 'Handy Bypass Pruner',
      description: 'Convenient pruner for everyday use.',
      image: 'https://www.ugaoo.com/cdn/shop/products/handy-bypass-pruner-32010514563204.jpg?v=1675563839&width=375',
      rating: 4.3,
      price: 349,
      discount: 57
    },
    {
      id: 15,
      name: 'Snake Catcher Stick',
      description: 'Safe and effective snake catcher.',
      image: 'https://www.ugaoo.com/cdn/shop/files/AImage_14f61884-628d-451e-a337-0707b4b22360.jpg?v=1695464348&width=375',
      rating: 4.0,
      price: 2999,
      discount: 26
    },
    {
      id: 16,
      name: 'Straight Blade Cutter- D Handle',
      description: 'Cutter with a straight blade.',
      image: 'https://www.ugaoo.com/cdn/shop/files/5_c8447a44-6c04-4012-a88a-e8e2f31c70a3.jpg?v=1708679370&width=375',
      rating: 5.0,
      price: 299,
      discount: 41
    },
    {
      id: 17,
      name: 'Single-Edge Sickle',
      description: 'A sharp single-edge sickle.',
      image: 'https://www.ugaoo.com/cdn/shop/products/single-edge-sickle-31256089034884.png?v=1675616765&width=375',
      rating: 4.6,
      price: 245,
      discount: 33
    },
    {
      id: 18,
      name: 'Single Prong Weeder With PVC Handle',
      description: 'Efficient weeder for gardening.',
      image: 'https://www.ugaoo.com/cdn/shop/products/single-prong-weeder-with-pvc-handle-32010574200964.jpg?v=1675563666&width=375',
      rating: 5.0,
      price: 199,
      discount: 21
    },
    {
      id: 19,
      name: 'Handy Clipper',
      description: 'Easy-to-use clipper.',
      image: 'https://www.ugaoo.com/cdn/shop/products/single-prong-weeder-with-pvc-handle-32010574200964.jpg?v=1675563666&width=375',
      rating: 4.8,
      price: 349,
      discount: 57
    },
    {
      id: 20,
      name: 'Single Prong Weeder',
      description: 'Weeder for gardening tasks.',
      image: 'https://www.ugaoo.com/cdn/shop/products/single-prong-weeder-31881686253700.jpg?v=1675616757&width=375',
      rating: 4.8,
      price: 165,
      discount: 36
    },
    {
      id: 21,
      name: 'Cultivator with PVC Handle',
      description: 'A cultivator for soil preparation.',
      image: 'https://www.ugaoo.com/cdn/shop/products/cultivator-with-pvc-handle-32010466984068.jpg?v=1675564017&width=375',
      rating: 5.0,
      price: 199,
      discount: 21
    },
    {
      id: 22,
      name: 'Fruit Harvest Blade with Nylon Net',
      description: 'Effective tool for fruit harvesting.',
      image: 'https://www.ugaoo.com/cdn/shop/products/fruit-harvest-blade-with-nylon-net-31256126324868.png?v=1675587785&width=375',
      rating: 5.0,
      price: 475,
      discount: 19
    },
    {
      id: 23,
      name: 'Hedge Shear with Plastic Handle - 10 Inch',
      description: 'Shears for trimming hedges.',
      image: 'https://www.ugaoo.com/cdn/shop/products/hedge-shear-with-plastic-handle-10-inch-32010490282116.jpg?v=1675563853&width=375',
      rating: 5.0,
      price: 999,
      discount: 24
    },
    {
      id: 24,
      name: 'Bent Scraper',
      description: 'Useful for scraping and weeding.',
      image: 'https://www.ugaoo.com/cdn/shop/products/1-inch-bent-scraper-32010412490884.jpg?v=1675564029&width=375',
      rating: 5.0,
      price: 199,
      discount: 20
    }
  ];  

const GardenTools = () => {
    const [cart, setCart] = useState([]);
  
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
  
    const addToCart = async (tool) => {
      try {
        await axios.post('http://localhost:3003/cartItems', tool);
        fetchCartItems();
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    };
  
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" component={Link} to="/" color="inherit" aria-label="home">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Garden Tools
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
          <Route path="/" element={<ToolList tools={tools} addToCart={addToCart} />} />
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
  
  const ToolList = ({ tools, addToCart }) => (
    <Grid container spacing={4} style={{ padding: 24 , marginTop: '20px'}}>
      {tools.map((tool) => (
        <Grid item key={tool.id} xs={12} sm={6} md={2}>
          <Card>
            <CardMedia
              component="img"
              style={{ height: '200px', objectFit: 'contain' }}
              image={tool.image}
              alt={tool.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {tool.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tool.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {tool.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ₹{tool.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discount: {tool.discount}%
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => addToCart(tool)}>Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
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
        ))
      )}
      
    </div>
  );
  
  const Footer = () => (
    <footer style={{ marginTop: 'auto', padding: 16, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        @ Green Paradise
      </Typography>
    </footer>
  );
  
  export default GardenTools;
// import React, { useState, useEffect } from 'react';
// import { Grid, Box, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import axios from 'axios';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/cartItems');
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       console.log('Removing item with id:', id);
//       const response = await axios.delete(`http://localhost:3001/cartItems/${id}`);
//       console.log('Response from server:', response);
//       setCartItems(cartItems.filter(item => item.id !== id));
//     } catch (error) {
//       console.error('Error removing cart item:', error);
//     }
//   };
  
//   return (
//     <Box p={3}>
//       <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
//       <Grid container spacing={2}>
//         {cartItems.map((item) => (
//           <Grid item xs={12} sm={6} md={4} key={item.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 style={{ height: '200px', objectFit: 'contain' }}
//                 image={item.image}
//                 alt={item.name}
//               />
//               <CardContent>
//                 <Typography variant="h5">{item.name}</Typography>
//                 <Typography variant="body2">Description: {item.description}</Typography>
//                 <Typography variant="body2">Price: ₹{item.price}</Typography>
//                 <Button variant="contained" color="secondary" onClick={() => handleRemove(item.id)}>
//                   Remove
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default CartPage;






// import React, { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Grid, Box, Button, Typography, Card, CardContent, CardMedia, Container, List, ListItem } from '@mui/material';
// import axios from 'axios';
// import { ArrowUpward } from '@mui/icons-material';
// const scrollToTop = () => {
//   window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//   });
// };
// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/cartItems');
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       console.log('Removing item with id:', id);
//       const response = await axios.delete(`http://localhost:3001/cartItems/${id}`);
//       console.log('Response from server:', response);
//       setCartItems(cartItems.filter(item => item.id !== id));
//     } catch (error) {
//       console.error('Error removing cart item:', error);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom >
//         Shopping Cart
//       </Typography>
//       {cartItems.length === 0 ? (
//         <>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
//             <img
//               src="https://images.apollo247.in/images/ic-empty-cart.svg"
//               alt="Empty Cart"
//               style={{ width: '200px', height: '200px' }}
//             />
//           </div>
//           <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>Your cart is empty</Typography>
//           <List>
//             <ListItem>
//               <Button variant="contained" color="primary" style={{ display: 'block', margin: '20px auto' }} component={RouterLink} to="/home">
//                 Continue Shopping
//               </Button>
//             </ListItem>
//           </List>
//         </>
//       ) : (
//         <Box p={3}>
//           <Grid container spacing={2}>
//             {cartItems.map((item) => (
//               <Grid item xs={12} sm={6} md={4} key={item.id}>
//                 <Card>
//                   <CardMedia
//                     component="img"
//                     // style={{ height: '200px', objectFit: 'contain' }}
//                     image={item.image}
//                     alt={item.name}
//                   />
//                   <CardContent>
//                     <Typography variant="h5">{item.name}</Typography>
//                     <Typography variant="body2">Description: {item.description}</Typography>
//                     <Typography variant="body2">Price: ₹{item.price}</Typography>
//                     <Button variant="contained" color="secondary" onClick={() => handleRemove(item.id)}>
//                       Remove
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       )}
//       <Button
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
//     </Container>
//   );
// };

// export default Cart;


























// import React, { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { Grid, Box, Button, Typography, Card, CardContent, CardMedia, Container, List, ListItem } from '@mui/material';
// import axios from 'axios';
// import { ArrowUpward } from '@mui/icons-material';

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// };

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/cartItems');
//       setCartItems(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3003/cartItems/${id}`);
//       setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
//     } catch (error) {
//       console.error('Error removing cart item:', error);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         <br></br>
//         Shopping Cart
//       </Typography>
//       {cartItems.length === 0 ? (
//         <>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh',marginTop: '100px' }}>
//             <img
//               src="https://images.apollo247.in/images/ic-empty-cart.svg"
//               alt="Empty Cart"
//               style={{ width: '200px', height: '200px' }}
//             />
//           </div>
//           <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>Your cart is empty</Typography>
//           <List>
//             <ListItem>
//               <Button variant="contained" color="primary" style={{ display: 'block', margin: '20px auto' }} component={RouterLink} to="/home">
//                 Continue Shopping
//               </Button>
//             </ListItem>
//           </List>
//         </>
//       ) : (
//         <Box p={3}>
//           <Grid container spacing={2}>
//             {cartItems.map((item) => (
//               <Grid item xs={12} sm={6} md={4} key={item.id}>
//                 <Card>
//                   <CardMedia
//                     component="img"
//                     image={item.image}
//                     alt={item.name}
//                   />
//                   <CardContent>
//                     <Typography variant="h5">{item.name}</Typography>
//                     <Typography variant="body2">Description: {item.description}</Typography>
//                     <Typography variant="body2">Price: ₹{item.price}</Typography>
//                     <Button variant="contained" color="secondary" onClick={() => handleRemove(item.id)}>
//                       Remove
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       )}
//       <Button
//         onClick={scrollToTop}
//         style={{
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           backgroundColor: '#333',
//           color: '#fff',
//           borderRadius: '50%',
//           boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
//         }}
//       >
//         <ArrowUpward />
//       </Button>
//     </Container>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Box, Button, Typography, Card, CardContent, CardMedia, Container, List, ListItem, AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { ArrowUpward, Home as HomeIcon, ShoppingCart as ShoppingCartIcon, Payment as PaymentIcon } from '@mui/icons-material';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3003/cartItems');
      setCartItems(response.data);
      calculateTotal(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/cartItems/${id}`);
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      calculateTotal(updatedItems);
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const handleToken = async (token) => {
    try {
      const response = await axios.post('http://localhost:3003/api/checkout', {
        items: cartItems,
        token,
      });
      console.log('Payment Success:', response.data);
      // Handle successful payment
    } catch (error) {
      console.error('Payment Error:', error);
      // Handle payment error
    }
    setIsCheckoutOpen(false);
  };

  const calculateTotal = (items) => {
    const total = items.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
    setTotalAmount(total);
  };

  const handleCheckoutClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" component={RouterLink} to="/" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <Typography variant="h6" style={{ marginRight: '20px' }}>
            Total: ₹{totalAmount.toFixed(2)}
          </Typography>
          <IconButton component={RouterLink} to="/cart" color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <div style={{ position: 'relative' }}>
            <IconButton edge="end" color="inherit" onClick={handleCheckoutClick}>
              <PaymentIcon />
            </IconButton>
            {isCheckoutOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '4px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                zIndex: 1300 // Ensure it appears above other elements
              }}>
                <StripeCheckout
                  stripeKey="pk_test_51PlDKLRoOAj7fzfTM0ArkQ7QXCusilhfaiXAkyTgxYc57vvLqQt6XQ4WTE2xAReMSIMEI00jay7YiApAOBUh4Nff00zEy6KjSC" // Replace with your valid key
                  token={handleToken}
                  amount={totalAmount * 100}
                  name="Shopping Cart"
                  billingAddress
                  shippingAddress
                  onClose={() => setIsCheckoutOpen(false)}
                />
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {cartItems.length === 0 ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh', marginTop: '100px' }}>
            <img
              src="https://images.apollo247.in/images/ic-empty-cart.svg"
              alt="Empty Cart"
              style={{ width: '200px', height: '200px' }}
            />
          </div>
          <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>Your cart is empty</Typography>
          <List>
            <ListItem>
              <Button variant="contained" color="primary" style={{ display: 'block', margin: '20px auto' }} component={RouterLink} to="/home">
                Continue Shopping
              </Button>
            </ListItem>
          </List>
        </>
      ) : (
        <Box p={3}>
          <Grid container spacing={2}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="body2">Description: {item.description}</Typography>
                    <Typography variant="body2">Price: ₹{item.price}</Typography>
                    <Button variant="contained" color="secondary" onClick={() => handleRemove(item.id)}>
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
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
    </Container>
  );
};

export default Cart;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Badge,
  Box,
  Toolbar,
  Drawer,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { red } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Instagram, Facebook, YouTube, Twitter,LinkedIn } from '@mui/icons-material';
import { ArrowUpward } from '@mui/icons-material';
import SubscriptionBox from './SubscriptionBox';

const drawerWidth = 240;
const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
};
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#f0f0f0',
  padding: '5px',
};

const sectionStyle = {
  flex: 1,
  textAlign: 'center',
};

const headingStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#333',
  textDecoration: 'none',
};

const viewStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

const hoverLinkStyle = {
  textDecoration: 'underline',
};

const cartStyle = {
  textDecoration: 'none',
  color: 'white',
};
const footerSections = [
  {
    heading: 'Discover Our Garden',
    links: [
      { text: 'About Us', to: '/about-us' },
      { text: 'Join Our Team', to: '/careers' },
      { text: 'Our Blog', to: '/blog' }
    ]
  },
  {
    heading: 'Shop With Us',
    links: [
      { text: 'Featured Plants', to: '/featured-plants' },
      { text: 'Top Garden Products', to: '/top-garden-products' },
      { text: 'Gardening Tips', to: '/gardening-tips' }
    ]
  },
  {
    heading: 'Customer Support',
    links: [
      { text: 'Contact Us', to: '/contactus' },
      { text: 'FAQ', to: '/faq' },
      { text: 'Shipping & Returns', to: '/shipping-returns' }
    ]
  },
  {
    heading: 'Policy Info',
    links: [
      { text: 'Terms and Conditions', to: '/terms-and-conditions' },
      { text: 'Privacy Policy', to: '/privacy-policy' },
      { text: 'Cookie Policy', to: '/cookie-policy' }
    ]
  },
  {
    heading: 'Connect with Us',
    icons: [
      { icon: Instagram, color: '#e4405f' },
      { icon: Facebook, color: 'primary' },
      { icon: YouTube, color: '#d32f2f' },
      { icon: Twitter, color: 'primary' }
    ]
  }
];
const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate(); 
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const styles = {
    gridContainer: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
    card: {
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      },
    },
    cardMedia: {
      borderRadius: '12px 12px 0 0',
    },
    cardContent: {
      padding: '20px',
    },
    cardActions: {
      padding: '10px 20px',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      borderRadius: '20px',
      backgroundColor: '#00796b',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#004d40',
      },
    },
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.toLowerCase() === 'plant care') {
      navigate('/plant');
    } 
    else if (searchQuery.toLowerCase() === 'plant garden') {
      navigate('/garden'); 
    }
    else if (searchQuery.toLowerCase() === 'plant garden layout') {
      navigate('/layout');
    }
    else if (searchQuery.toLowerCase() === 'garden tools') {
      navigate('/tools');
    }
    else if (searchQuery.toLowerCase() === 'indoor plants') {
      navigate('/indoorp');
    }
    else if (searchQuery.toLowerCase() === 'outdoor plants') {
      navigate('/outdoor');
    }
  };const footerSections = [
  {
    heading: 'Discover Our Garden',
    links: [
      { text: 'About Us', to: '/about-us' },
      { text: 'Join Our Team', to: '/careers' },
      { text: 'Our Blog', to: '/blog' }
    ]
  },
  {
    heading: 'Shop With Us',
    links: [
      { text: 'Featured Plants', to: '/featured-plants' },
      { text: 'Top Garden Products', to: '/top-garden-products' },
      { text: 'Gardening Tips', to: '/gardening-tips' }
    ]
  },
  {
    heading: 'Customer Support',
    links: [
      { text: 'Contact Us', to: '/contactus' },
      { text: 'FAQ', to: '/faq' },
      { text: 'Shipping & Returns', to: '/shipping-returns' }
    ]
  },
  {
    heading: 'Policy Info',
    links: [
      { text: 'Terms and Conditions', to: '/terms-and-conditions' },
      { text: 'Privacy Policy', to: '/privacy-policy' },
      { text: 'Cookie Policy', to: '/cookie-policy' }
    ]
  },
  {
    heading: 'Connect with Us',
    icons: [
      { icon: Instagram, color: '#e4405f' },
      { icon: Facebook, color: 'primary' },
      { icon: YouTube, color: '#d32f2f' },
      { icon: Twitter, color: 'primary' }
    ]
  }
];

   const cardData = [
    {
      title: 'Plant Care',
      description: 'Discover essential tips and techniques for keeping your garden plants healthy and thriving.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1Hm3ROvKMJK1UmUIZHgjSjhEkPlAaH3_sw&s',
      link: '/plant'
    },
    // {
    //   title: 'Plant Growth',
    //   description: 'Explore various plants and flowers to enhance your garden\'s beauty and growth potential.',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzO2_J8wPAQ_BCLuEZvqQWDMFs8WSs_Pmlgg&s',
    //   link: '/growth'
    // },
    {
      title: 'Garden Layout',
      description: 'Design your perfect garden with tips on layout planning and plant arrangement.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD895dMPoR9lhW3eX0NJY8lVL3sW_ZGISxg4D2jJZKYEortr6Vs14dwz925rGI_Vl4Jqc&usqp=CAU',
      link: '/layout'
    },
    {
      title: 'Garden Tools',
      description: 'Find essential tools for every gardener, from basic implements to specialized equipment.',
      image: 'https://www.rasnetwork.org/wp-content/uploads/2023/10/Best-Gardening-Tools-Names-with-Pictures-and-Their-Uses.webp',
      link: '/tools'
    },
    {
      title: 'Indoor Plants',
      description: 'Explore indoor plants that add greenery to your home while purifying the air.',
      image: 'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/09/29195121/cover-copy.jpg',
      link: '/indoorp'
    },
    {
      title: 'Outdoor Plants',
      description: 'Discover outdoor plants to enhance your garden\'s beauty.',
      image: 'https://cms.interiorcompany.com/wp-content/uploads/2024/01/herbaceous-perennials-garden-plants.jpg',
      link: '/outdoor'
    },
      {
        title: 'Plant Description',
        description: 'Find detailed information about various plants and care instructions.',
        image: 'https://cdn.mos.cms.futurecdn.net/XDYmyY2eSMZxXUtTfNMExR-1024-80.jpg.webp',
        link: '/plantd'
      },
      {
        title: 'Weather Forecast',
        description: 'Get the latest weather updates to plan your gardening activities.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBg3dONzLEZuWLSyBCiccqEeeQXqkyfVAV6A&s',
        link: '/weather'
      },
      {
        title: 'Manures',
        description: 'Discover essential manures to boost plant health and growth with our expert recommendations.',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20220926163013/Fertilizers.png',
        link: '/manure'
      },      
      {
        title: 'Plant Seeds',
        description: 'Browse premium seeds to start growing beautiful plants in your garden.',
        image: 'https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/starting-seeds-right-in-your-garden/starting_seeds_right_in_your_garden_header.jpg',
        link: '/seeds'
      }
    
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}sx={{ backgroundColor: '#D4CFD0', boxShadow: 0 }}>
      <Toolbar>
  <IconButton
    color="black" 
    aria-label="open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    sx={{ mr: 2, ...(open && { display: 'none' }) }}
  >
    <MenuIcon style={{ color: 'black' }} /> 
  </IconButton>
  <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }} 
  >
    Green Paradise
  </Typography>
  <Search sx={{ color: 'black' }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: 'black' }} />
            </SearchIconWrapper>
            <form onSubmit={handleSearch} style={{ width: '100%' }}>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ color: 'black' }}
              />
            </form>
          </Search>
  <Box sx={{ flexGrow: 1 }} />
  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    <IconButton size="large" sx={{ color: 'black' }}>
      <Badge color="black" component={RouterLink} to="/cart" style={cartStyle}>
        <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
      </Badge>
    </IconButton>
    <IconButton size="large" sx={{ color: 'black' }}>
      <Badge color="black" badgeContent={0}>
        <NotificationsIcon style={{ color: 'black' }} /> 
      </Badge>
    </IconButton>
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      sx={{ color: 'black' }}
    >
      <Badge color="black" component={RouterLink} to="/registration" style={cartStyle}>
        <AccountCircle style={{ color: 'black' }} />
      </Badge>
    </IconButton>
  </Box>
  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
    <IconButton
      size="large"
      aria-label="show more"
      aria-controls="primary-search-account-menu-mobile"
      aria-haspopup="true"
      sx={{ color: 'black' }}
    >
      <MoreIcon style={{ color: 'black' }} /> 
    </IconButton>
  </Box>
</Toolbar>

      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={RouterLink} to="/contactus">
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
          {/* <ListItem button component={RouterLink} to="/indoorp">
            <ListItemIcon>
              <LocalFloristIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem> */}
          <ListItem button component={RouterLink} to="/get-in-touch">
      <ListItemIcon>
      <LocalFloristIcon />
      </ListItemIcon>
      <ListItemText primary="Get in Touch" />
    </ListItem>
          <ListItem button component={RouterLink} to="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button component={RouterLink} to="/registration">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Registration" />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
      <DrawerHeader />
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className="image-container">
          <img
            src="https://wallpapers.com/images/hd/monstera-deliciosa-simple-minimalist-plant-ul3bl3bzwsuwurs3.jpg"
            alt="Monstera Deliciosa"
          />
          <div className="text-overlay">GREEN PARADISE</div>
        </div>
        <div className="image-container">
          <img src="https://greenhouseemporium.com/wp-content/uploads/2023/08/Greenhouse-emporium-home-page-4.jpg" alt="Image 2" />
        </div>
        <div className="image-container">
          <img src="https://www.greenhousegardeningtips.com/wp-content/uploads/2014/02/Mini-greenhouse.jpg" alt="Image 3" />
          <div className="garden">
            <div className="line"><span className="bold-text">Gardening</span> is more than a hobby.</div>
            <div className="line">It is a <span className="bold-text">way of life.</span></div>
          </div>
        </div>
      </Carousel>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            <br></br>Welcome to Green Paradise
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Explore our beautiful garden and discover a wide variety of plants, flowers, and garden tools to enhance your outdoor space.
          </Typography>
          <br></br>
          {/* <Grid container spacing={4}>
            {cardData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={RouterLink}
                      to={item.link}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid> */}
<Grid container spacing={4} style={styles.gridContainer}>
      {cardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={styles.card}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.title}
              style={styles.cardMedia}
            />
            <CardContent style={styles.cardContent}>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions style={styles.cardActions}>
              <Button
                size="medium"
                component={RouterLink}
                to={item.link}
                style={styles.button}
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>

        </Container>
        <br></br>
        <br></br>
        {/* <footer style={footerStyle}>
  <div style={sectionStyle}>
    <h4 style={headingStyle}>Discover Our Garden</h4>
    <Link to="/about-us" style={linkStyle}>About Us</Link>
    <Link to="/careers" style={linkStyle}>Join Our Team</Link>
    <Link to="/blog" style={linkStyle}>Our Blog</Link>
  </div>
  <div style={sectionStyle}>
    <h4 style={headingStyle}>Shop With Us</h4>
    <Link to="/featured-plants" style={linkStyle}>Featured Plants</Link>
    <Link to="/top-garden-products" style={linkStyle}>Top Garden Products</Link>
    <Link to="/gardening-tips" style={linkStyle}>Gardening Tips</Link>
  </div>
  <div style={sectionStyle}>
    <h4 style={headingStyle}>Customer Support</h4>
    <Link to="/contactus" style={linkStyle}>Contact Us</Link>
    <Link to="/faq" style={linkStyle}>FAQ</Link>
    <Link to="/shipping-returns" style={linkStyle}>Shipping & Returns</Link>
  </div>
  <div style={sectionStyle}>
    <h4 style={headingStyle}>Policy Info</h4>
    <Link to="/terms-and-conditions" style={linkStyle}>Terms and Conditions</Link>
    <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
    <Link to="/cookie-policy" style={linkStyle}>Cookie Policy</Link>
  </div>
  <div style={sectionStyle}>
    <h4 style={headingStyle}>Connect with Us</h4>
    <InstagramIcon style={{ color: '#e4405f' }} />
    <FacebookIcon color="primary" />
    <YouTubeIcon sx={{ color: red[900] }} />
    <TwitterIcon color="primary" />
  </div>
</footer> */}
<SubscriptionBox></SubscriptionBox>
<br></br>
<br></br>
 <Box sx={{ bgcolor: '#D4CFD0', color: 'black', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Green Paradise
            </Typography>
            <Typography variant="body2">
            EcoHub Building, 123 Green Lane,
          Springfield Business Park,
          Downtown City, ABC State 1234564
            </Typography>
            <Typography variant="body2">
              <strong>Contact:</strong> +91-98765 43210 | support@greenparadise.in
            </Typography>
            <Typography variant="body2">
              <strong>Opening Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="#" color="inherit">Home</Link></li>
              <li><Link href="#about" color="inherit">About Us</Link></li>
              <li><Link href="#shop" color="inherit">Shop</Link></li>
              <li><Link href="#contact" color="inherit">Contact</Link></li>
              <li><Link href="#faq" color="inherit">FAQ</Link></li>
            </ul>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" href="https://facebook.com/homegardenemporium">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com/homegardenemporium">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com/homegardenemporium">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com/company/homegardenemporium">
              <LinkedIn />
            </IconButton>
            <Box mt={2}>
              <Typography variant="h6" gutterBottom>
                Subscribe to our Newsletter
              </Typography>
              <Box component="form" display="flex" alignItems="center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    marginRight: '8px'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#f5a623',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  Subscribe
                </button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Green Paradise. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
      </Main>
      {/* <Button
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
</Button> */}
    </Box>
  );
};

export default Home;

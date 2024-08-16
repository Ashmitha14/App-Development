
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions,AppBar, Button, Toolbar, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { ArrowUpward } from '@mui/icons-material';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const HomeGardenCare = () => {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '2200px',
        margin: '0 auto',
    };
    const heading1Style = {
        color: '#2e7d32',
    };

    const heading2Style = {
        color: '#2e7d32',
    };

    const sectionStyle = {
        marginBottom: '40px',
    };

    const imageStyle = {
        width: '80%',
        height: '500px',
        margin: '10px auto', 
        display: 'block',
        borderRadius: '10px',
    };

    const paragraphStyle = {
        lineHeight: '1.6',
    };
    return (
        <div style={containerStyle}>
            <h1 style={heading1Style}>How To Take Care Of Plants In Your Home Garden</h1>
            <div style={sectionStyle}>
                <p style={paragraphStyle}>
                    Having a green corner in your home will provide you with immense pleasure and happiness.
                    Plants always help people to distress and unwind.
                </p>
                <img
                    src="https://www.allthatgrows.in/cdn/shop/articles/Feature-Final_1100x1100.jpg?v=1606982612"
                    alt="Pick The Right Plants"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>The smell of freshly cut vegetables,
                    refreshing wind flowing through your hair, the beautiful sight of blooming plants, you get
                    all that and more when you have a garden at home.
                </p>
                <p style={paragraphStyle}>
                    But watching your plants dying can be an ugly sight. Thankfully, there are certain tips and
                    tricks that you can use to keep your plants healthy and thriving. If you’re a plant parent,
                    then these tips and tricks will help you in taking care of your plants.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={heading2Style}>Pick The Right Plants</h2>
                <img
                    src="https://cdn.shopify.com/s/files/1/1380/2059/files/Optimized-Pick_right-Plant_Care_480x480.jpg?v=1606980907"
                    alt="Pick The Right Plants"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>
                    It’s essential to find a perfect fit for your garden. Pick the plants according to the
                    climate that you’re in. Bad fits won’t stay around the garden for long. Understand the
                    requirements of the plants before growing them in your garden - the hours of sunlight they
                    need, the amount of water, type of soil, fertilizers, etc. Once you cater to all their needs -
                    they’ll flourish in your garden.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={heading2Style}>Watering (Balance, is the key)</h2>
                <img
                    src="https://cdn.shopify.com/s/files/1/1380/2059/files/Optimized-Watering-Plant_Care_480x480.jpg?v=1606981001"
                    alt="Watering"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>
                    Overwatering, as well as underwatering, can hinder the growth of your greens. Keep your plants hydrated but ensure not to drown them in water. Overwatering your plants can lead to wilted growth and cause root rot. Water your plants near the roots and not the stem/leaves to stimulate their growth. Reduce the hydration in the cold winter months and increase in the hot summer months.
                 </p>
                 <p style={paragraphStyle}>   
                    For pots, use a saucer to water your plants. Let your plants absorb water from the saucer and remove the excess water after a few hours. Always remember while watering your greens, balance is the key.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2 style={heading2Style}>Change Is (Not Always) Good</h2>
                <img
                    src="https://cdn.shopify.com/s/files/1/1380/2059/files/Optimized-Change_is_not_good-Plant_Care_480x480.jpg?v=1606981098"
                    alt="Watering"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>
                Changing the environment is a complete no-no if your plants are thriving well in their location. Plants don’t adapt well to changing environments. If you’re planning to give your plant a new home, do it slowly. Let it get used to the new environment and then leave it in its final place. Sudden change can hamper your plant’s growth.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2 style={heading2Style}>Prune Your Plants</h2>
                <img
                    src="https://cdn.shopify.com/s/files/1/1380/2059/files/Optimized-Pruning-Plant_Care_480x480.jpg?v=1606981162"
                    alt="Watering"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>
                When you see any wilted yellow leaves, cut them. Pruning your plants will promote their growth and keep them looking their best. Say goodbye to anything that’s turning yellow or is spotted. Wipe off the dust by sprinkling water or gently cleaning it with a wet cloth to ensure they receive proper sunlight. A well-groomed plant always turns out to be a healthy plant.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2 style={heading2Style}>Look Out For Bugs</h2>
                <img
                    src="https://cdn.shopify.com/s/files/1/1380/2059/files/Optimized-Look_Out_for_Bugs-Plant_Care_480x480.jpg?v=1606981373"
                    alt="Watering"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>
                Bugs and diseases can disrupt the growth of plants. Aphids are the most common bugs you’ll find lurking around and making their way to feed on your precious plants. If you notice your plants growing weaker, cure them with a natural mixture of neem oil & soap water. Spray this magical mixture every now and then and keep your plants pest and disease-free.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2 style={heading2Style}>Potting Mixture</h2>
                <img
                    src="https://cdn.shopify.com/s/files/1/1380/2059/files/Optimized-Potting_mix-Plant_Care_480x480.jpg?v=1606981429"
                    alt="Watering"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>
                Use a good potting mixture for your plants. You can source potting mixture from any local nursery or DIY by mixing equal amounts of red sand, organic compost, and cocopeat. Prepare a crumbly textured soil that can retain moisture. Keep your soil packed with nutrients by adding organic compost such as tea compost, fruit peels, etc. Healthy soil is the key to healthy plants. 

A little bit of attention and care will go a long way! Plant parenting can be a bit tricky at times, check on your greens regularly to ensure their health. Grab high-quality seeds from AllThatGrows and start exercising your green thumb. Happy Gardening!
                </p>
            </div>
        </div>
    );
};

const plantCareTips = [
    { title: 'Watering', description: 'Ensure your plants get enough water but do not overwater.', image: 'https://cdn.shopify.com/s/files/1/1489/8850/files/Watering-flower-garden_480x480.jpg?v=1650279901' },
    { title: 'Sunlight', description: 'Most plants need plenty of sunlight to thrive.', image: 'https://mother-nature.ca/wp-content/uploads/2020/07/mother-nature-powell-river-how-to-determine-sun-exposure-yard-shade.png' },
    { title: 'Soil', description: 'Use the right soil for your plant type.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5678h9GLfVbCPw4lZ4cdq62wO8IIpkiX-PQ&s' },
];

const popularPlants = [
    { 
        title: 'Vegetable Plant', 
        description: 'Requires at least 6 hours of sunlight daily and regular watering. Use nutrient-rich soil.',
        image: 'https://static.vecteezy.com/system/resources/previews/040/075/810/non_2x/ai-generated-golden-hour-casts-a-warm-inviting-light-on-a-home-vegetable-garden-enhancing-the-lush-greenery-and-produce-gardening-concept-photo.jpg',
        link: '/vegetable' 
    },
    { 
        title: 'Flowering Plant', 
        description: 'Needs moderate sunlight and well-drained soil. Prune regularly to promote growth.',
        image: 'https://www.marthastewart.com/thmb/_-aAIvlv1tj7o9-k_UPOGrdccLM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1414023501-adc556405d4c439b8cb077d15522d00e.jpg',
        link: '/fcare' 
    },
    { 
        title: 'Indoor Plant',
        description: 'Thrives in indirect sunlight and minimal watering. Perfect for low-light conditions.',
        image: 'https://images.herzindagi.info/image/2024/Apr/summer-plants.jpg',
        link: "/indoor" 
    }
];

const PlantCare = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" component={RouterLink} to="/" color="inherit" aria-label="home">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Plant Care
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <HomeGardenCare />
                <Typography variant="h4" gutterBottom>Plant Care Tips</Typography>
                <Grid container spacing={3}>
                    {plantCareTips.map((tip, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={tip.title}
                                    height="140"
                                    image={tip.image}
                                    title={tip.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {tip.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {tip.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small" component={RouterLink} to="/products">
                                        View More
                                    </Button> */}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h4" gutterBottom style={{ marginTop: '2rem' }}>Plant Care Instructions</Typography>
                <Grid container spacing={3}>
                    {popularPlants.map((plant, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={plant.title}
                                    height="140"
                                    image={plant.image}
                                    title={plant.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {plant.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {plant.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={RouterLink} to={plant.link}>
                                        View More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
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
            
        </div>
    );
};

export default PlantCare;

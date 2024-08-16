// import React from 'react';
// import { Container, Typography, Box, Grid } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';

// const AboutUs = () => {
//   return (
//     <Container maxWidth="lg" sx={{ my: 4 }}>
//       <Typography variant="h2" align="center" gutterBottom>
//         About Us
//       </Typography>
//       <Typography variant="h5" align="center" paragraph>
//         Welcome to Green Paradise, your premier destination for all things gardening. We are passionate about helping you create a beautiful and thriving garden. Our team is dedicated to providing high-quality plants, garden tools, and expert advice to make your gardening experience enjoyable and successful.
//       </Typography>
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Our Mission
//         </Typography>
//         <Typography paragraph>
//           At Green Paradise, our mission is to inspire and empower gardeners of all levels. We believe in the transformative power of gardening and strive to offer a diverse selection of plants and tools to meet your needs. Our knowledgeable staff is here to offer guidance and support to help you achieve your gardening goals.
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Our Story
//         </Typography>
//         <Typography paragraph>
//           Green Paradise started as a small local nursery with a big dream. Over the years, we have grown into a trusted name in the gardening community, thanks to our commitment to quality and customer satisfaction. Our journey has been fueled by our love for plants and our desire to share that passion with others.
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Get in Touch
//         </Typography>
//         <Typography paragraph>
//           We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to <RouterLink to="/contact-us">contact us</RouterLink>. Our team is always here to help.
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default AboutUs;
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
    <img 
      src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU=" 
      alt="Our Mission" 
      style={{ maxWidth: '100%', height: '300px' }}
    />
  </Box>
      <Typography variant="h5" align="center" paragraph>
        Welcome to Green Paradise, your premier destination for all things gardening. We are passionate about helping you create a beautiful and thriving garden. Our team is dedicated to providing high-quality plants, garden tools, and expert advice to make your gardening experience enjoyable and successful.
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" gutterBottom>
          Our Mission
        </Typography>
        <Typography paragraph>
          At Green Paradise, our mission is to inspire and empower gardeners of all levels. We believe in the transformative power of gardening and strive to offer a diverse selection of plants and tools to meet your needs. Our knowledgeable staff is here to offer guidance and support to help you achieve your gardening goals.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Our Story
        </Typography>
        <Typography paragraph>
          Green Paradise started as a small local nursery with a big dream. Over the years, we have grown into a trusted name in the gardening community, thanks to our commitment to quality and customer satisfaction. Our journey has been fueled by our love for plants and our desire to share that passion with others.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography paragraph>
          Our team of gardening experts is dedicated to providing the best advice and support. From our knowledgeable horticulturists to our friendly customer service staff, we are here to help you every step of the way. Get to know the faces behind Green Paradise and learn about their passion for gardening.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Our Values
        </Typography>
        <Typography paragraph>
          We believe in sustainability, community, and the joy of gardening. Our commitment to these values is reflected in everything we do. We source our plants responsibly, support local growers, and strive to create a welcoming environment for all gardening enthusiasts.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Get in Touch
        </Typography>
        <Typography paragraph>
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to <RouterLink to="/contact-us">contact us</RouterLink>. Our team is always here to help.
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Visit Us
              </Typography>
              <Typography paragraph>
                123 Green Lane<br />
                Gardenville, GA 12345<br />
                (555) 123-4567
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Typography paragraph>
                Stay updated with our latest news and promotions:
              </Typography>
              <Typography paragraph>
                <RouterLink to="/social-media">Facebook</RouterLink> | <RouterLink to="/social-media">Twitter</RouterLink> | <RouterLink to="/social-media">Instagram</RouterLink>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;

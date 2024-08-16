// // src/pages/GetInTouch.js
// import React from 'react';
// import { Container, Typography, TextField, Button, Grid } from '@mui/material';

// const GetInTouch = () => {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Get in Touch
//       </Typography>
//       <Typography variant="body1" paragraph>
//         We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us.
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Send Us a Message
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Your Name"
//             variant="outlined"
//             margin="normal"
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Your Email Address (optional)"
//             variant="outlined"
//             margin="normal"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Your Message"
//             variant="outlined"
//             margin="normal"
//             multiline
//             rows={4}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary">
//             Send Message
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default GetInTouch;





// src/pages/GetInTouch.js
// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Grid } from '@mui/material';
// import emailjs from 'emailjs-com';

// const GetInTouch = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       message: message,
//     };

//     emailjs.send('service_42y82nn', 'template_v6f2b79', templateParams, 'kFO2TP8USLKdAa_hD')
//       .then((response) => {
//         setFeedback('Message sent successfully!');
//         setIsSubmitting(false);
//       })
//       .catch((err) => {
//         setFeedback('Failed to send message. Please try again later.');
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Get in Touch
//       </Typography>
//       <Typography variant="body1" paragraph>
//         We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us.
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Send Us a Message
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Your Name"
//               variant="outlined"
//               margin="normal"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Your Email Address (optional)"
//               variant="outlined"
//               margin="normal"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Your Message"
//               variant="outlined"
//               margin="normal"
//               multiline
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </Button>
//           </Grid>
//         </Grid>
//         {feedback && <Typography variant="body1" color={feedback.includes('success') ? 'green' : 'red'}>{feedback}</Typography>}
//       </form>
//     </Container>
//   );
// };

// export default GetInTouch;


import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_42y82nn', 'template_v6f2b79', templateParams, 'kFO2TP8USLKdAa_hD')
      .then((response) => {
        setFeedback('Message sent successfully!');
        setIsSubmitting(false);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        setFeedback('Failed to send message. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <Container component="main" maxWidth="md" style={{ marginTop: 40 }}>
      <Paper elevation={3} style={{ padding: 24 }}>
        <Typography variant="h4" gutterBottom align="center">
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph align="center">
          We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Send Us a Message
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Your Email Address (optional)"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="john.doe@example.com"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Write your message here..."
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Grid>
          </Grid>
          {feedback && (
            <Typography variant="body1" color={feedback.includes('success') ? 'green' : 'red'} align="center" style={{ marginTop: 16 }}>
              {feedback}
            </Typography>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default GetInTouch;

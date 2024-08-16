import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    textAlign: 'center',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fff', // White background
  color: '#4CAF50', // Green text color
  border: '1px solid #4CAF50', // Green border
  '&:hover': {
    backgroundColor: '#f0f0f0', // Slightly darker background on hover
    borderColor: '#45a049', // Darker green border on hover
  },
}));

const SubscriptionBox = () => {
  const [email, setEmail] = useState('');
  const [contactNews, setContactNews] = useState(false);
  const [contactPartners, setContactPartners] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
    // Handle the form submission logic
    setOpen(true); // Open the success dialog
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ maxWidth: '700px', mx: 'auto', p: 3, border: '1px solid #ddd', borderRadius: 2 ,backgroundColor:'#F5F5F5'}}>
      <Typography variant="h6" gutterBottom>
        Gardening tips, videos, info and more delivered right to your inbox!
      </Typography>
      <Typography variant="body1" paragraph>
        Sign up for the Gardening Know How newsletter today and receive a free download of our most popular eBook "How to Grow Delicious Tomatoes."
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <TextField
          required
          id="email"
          label="Your Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mr: 2 }}
        />
        <CustomButton
          type="submit"
          variant="outlined"
          
        >
          Sign Me Up
        </CustomButton>
      </Box>
      <FormControlLabel
        control={<Checkbox checked={contactNews} onChange={(e) => setContactNews(e.target.checked)} />}
        label="Contact me with news and offers from other Future brands"
      />
      <FormControlLabel
        control={<Checkbox checked={contactPartners} onChange={(e) => setContactPartners(e.target.checked)} />}
        label="Receive email from us on behalf of our trusted partners or sponsors"
      />
      <Typography variant="body2" color="textSecondary" align="center">
        By submitting your information you agree to the Terms & Conditions and Privacy Policy and are aged 16 or over.
      </Typography>
      
      {/* Success Dialog */}
      <StyledDialog
        open={open}
        onClose={handleClose}
      >
        <StyledDialogTitle>
          Subscription Successful
        </StyledDialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Thank you for subscribing! Check your email for the free eBook.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </StyledDialog>
    </Box>
  );
};

export default SubscriptionBox;

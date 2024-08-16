import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const { data } = await axios.post('http://localhost:3001/create-payment-intent', {
      amount: 1000,
    });

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      setError(confirmError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Box mt={3}>
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">Payment successful!</Typography>}
        <Button variant="contained" color="primary" type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay'}
        </Button>
      </Box>
    </form>
  );
};

export default CheckoutForm;

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51PlDKLRoOAj7fzfTM0ArkQ7QXCusilhfaiXAkyTgxYc57vvLqQt6XQ4WTE2xAReMSIMEI00jay7YiApAOBUh4Nff00zEy6KjSC');

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;

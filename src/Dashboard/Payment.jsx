import React from 'react';
import SectionTile from '../Utilitites/SectionTile';
import CheckoutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../hooks/useCart';

const Payment = () => {
    const [cart] =useCart();
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <SectionTile title={'Payment page'}></SectionTile>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
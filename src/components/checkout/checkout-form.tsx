
'use client';

import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } 

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-6 rounded-lg">
      <PaymentElement />
      <Button disabled={!stripe || loading} className="w-full mt-6">
        {loading ? 'Processing...' : 'Pay'}
      </Button>
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
    </form>
  );
}

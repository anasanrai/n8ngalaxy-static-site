
'use client';

import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';

export function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="glass p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-subtext">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                  <Image src={item.image_url || '/placeholder.svg'} alt={item.name} layout="fill" objectFit="cover" />
                </div>
                <div>
                  <p className="font-semibold text-text">{item.name}</p>
                  <p className="text-sm text-subtext">${item.price}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <div className="border-t border-border pt-4 mt-4">
            <div className="flex justify-between font-bold text-lg text-text">
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <Button className="w-full mt-4">Proceed to Checkout</Button>
            <Button variant="outline" className="w-full mt-2" onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      )}
    </div>
  );
}

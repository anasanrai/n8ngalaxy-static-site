
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Template } from '@/types';

interface CartContextType {
  cart: Template[];
  addToCart: (template: Template) => void;
  removeFromCart: (templateId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Template[]>([]);

  const addToCart = (template: Template) => {
    setCart((prevCart) => [...prevCart, template]);
  };

  const removeFromCart = (templateId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== templateId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

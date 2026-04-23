import React from 'react';
import { Navbar } from './Navbar';
import { CartDrawer } from './CartDrawer';
import { Background3D } from './Background3D';
import type { CartHook } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  cartHook: CartHook;
}

export function Layout({ children, cartHook }: LayoutProps) {
  const { cart, isCartOpen, setIsCartOpen, updateCartItemQuantity, removeCartItem, clearCart } = cartHook;

  return (
    <div className="min-h-screen relative">
      <Background3D />
      
      <div className="relative z-10">
        <Navbar 
          cartItems={cart}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main className="relative">
          {children}
        </main>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeCartItem}
        onClearCart={clearCart}
      />
    </div>
  );
}
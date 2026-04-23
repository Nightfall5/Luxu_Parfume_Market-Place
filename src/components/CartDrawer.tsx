import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CheckoutModal } from './checkout/CheckoutModal';
import type { CartItem } from '../types';
import { formatToRupiah } from '../utils/currency';
import { useToast } from '../hooks/useToast';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { showToast } = useToast();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckoutSuccess = () => {
    showToast('Order placed successfully!', 'success');
    onClearCart();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-indigo-600" />
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-indigo-100 transition-colors"
                    >
                      <img 
                        src={item.image_url} 
                        alt={item.name} 
                        className="h-24 w-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-indigo-600 font-semibold mt-1">
                          {formatToRupiah(item.price)}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.stock}
                            className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t p-6 bg-gray-50">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">{formatToRupiah(total)}</span>
              </div>
              <div className="flex justify-between mb-6 text-sm text-gray-500">
                <span>Shipping & taxes calculated at checkout</span>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                disabled={items.length === 0}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 
                         disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={items}
        total={total}
        onSuccess={handleCheckoutSuccess}
      />
    </>
  );
}
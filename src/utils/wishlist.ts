import { Product } from '../types';

const WISHLIST_KEY = 'tokokita:wishlist';

export const getWishlist = (): string[] => {
  const stored = localStorage.getItem(WISHLIST_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addToWishlist = (productId: string): void => {
  const wishlist = getWishlist();
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (productId: string): void => {
  const wishlist = getWishlist();
  const updated = wishlist.filter(id => id !== productId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
};

export const isInWishlist = (productId: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.includes(productId);
};

export const getWishlistProducts = (allProducts: Product[]): Product[] => {
  const wishlist = getWishlist();
  return allProducts.filter(product => wishlist.includes(product.id));
};
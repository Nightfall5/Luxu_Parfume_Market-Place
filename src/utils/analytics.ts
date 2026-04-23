import { Product } from '../types';

export const trackPageView = (page: string) => {
  // Implementation would connect to your analytics service
  console.log(`Page view: ${page}`);
};

export const trackProductView = (product: Product) => {
  console.log(`Product view: ${product.name}`);
};

export const trackAddToCart = (product: Product, quantity: number) => {
  console.log(`Add to cart: ${product.name} x ${quantity}`);
};

export const trackPurchase = (orderId: string, total: number) => {
  console.log(`Purchase: Order ${orderId}, Total: ${total}`);
};

export const trackSearch = (query: string, resultsCount: number) => {
  console.log(`Search: "${query}" - ${resultsCount} results`);
};
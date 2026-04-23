import { Product } from '../types';

export const checkStock = (product: Product, quantity: number): boolean => {
  return product.stock >= quantity;
};

export const calculateShipping = (
  items: { weight: number; quantity: number }[],
  destination: string
): number => {
  // Simplified shipping calculation
  const totalWeight = items.reduce((sum, item) => sum + item.weight * item.quantity, 0);
  const baseRate = 10000; // Base shipping rate in IDR
  const weightRate = 5000; // Rate per kg in IDR
  
  return baseRate + (totalWeight * weightRate);
};

export const estimateDelivery = (destination: string): { min: number; max: number } => {
  // Simplified delivery estimation in days
  const estimates = {
    'jakarta': { min: 1, max: 2 },
    'java': { min: 2, max: 4 },
    'other': { min: 3, max: 7 }
  };

  const region = destination.toLowerCase().includes('jakarta')
    ? 'jakarta'
    : destination.toLowerCase().includes('java')
    ? 'java'
    : 'other';

  return estimates[region];
};
import { useMemo } from 'react';

export function useProductAnalytics(productId: string) {
  return useMemo(() => ({
    // Simulated analytics data
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    reviews: Math.floor(Math.random() * (500 - 50) + 50),
    recentViews: Math.floor(Math.random() * (1000 - 50) + 50)
  }), [productId]);
}
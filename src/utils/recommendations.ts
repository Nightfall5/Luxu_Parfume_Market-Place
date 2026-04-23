import { Product } from '../types';

export const getRelatedProducts = (
  product: Product,
  allProducts: Product[],
  limit = 4
): Product[] => {
  return allProducts
    .filter(p => 
      p.id !== product.id && 
      p.category_id === product.category_id
    )
    .slice(0, limit);
};

export const getFrequentlyBoughtTogether = (
  product: Product,
  allProducts: Product[],
  orderHistory: { products: string[] }[],
  limit = 3
): Product[] => {
  // Find orders containing the current product
  const relevantOrders = orderHistory.filter(order => 
    order.products.includes(product.id)
  );

  // Count co-occurrences of other products
  const coOccurrences = new Map<string, number>();
  relevantOrders.forEach(order => {
    order.products
      .filter(id => id !== product.id)
      .forEach(id => {
        coOccurrences.set(id, (coOccurrences.get(id) || 0) + 1);
      });
  });

  // Sort products by co-occurrence frequency
  return allProducts
    .filter(p => coOccurrences.has(p.id))
    .sort((a, b) => 
      (coOccurrences.get(b.id) || 0) - (coOccurrences.get(a.id) || 0)
    )
    .slice(0, limit);
};

export const getPersonalizedRecommendations = (
  userId: string,
  viewHistory: { productId: string; timestamp: number }[],
  allProducts: Product[],
  limit = 8
): Product[] => {
  // Get user's recently viewed categories
  const recentCategories = viewHistory
    .map(view => {
      const product = allProducts.find(p => p.id === view.productId);
      return product?.category_id;
    })
    .filter((category): category is string => Boolean(category));

  // Count category frequencies
  const categoryFrequency = recentCategories.reduce((acc, category) => {
    acc.set(category, (acc.get(category) || 0) + 1);
    return acc;
  }, new Map<string, number>());

  // Sort products by category preference and exclude viewed products
  const viewedProductIds = new Set(viewHistory.map(v => v.productId));
  
  return allProducts
    .filter(product => !viewedProductIds.has(product.id))
    .sort((a, b) => {
      const aFreq = categoryFrequency.get(a.category_id) || 0;
      const bFreq = categoryFrequency.get(b.category_id) || 0;
      return bFreq - aFreq;
    })
    .slice(0, limit);
};
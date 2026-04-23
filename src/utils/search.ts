import { Product } from '../types';

export const searchProducts = (products: Product[], query: string) => {
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
  
  return products.filter(product => {
    const searchText = `${product.name} ${product.description} ${product.category_id}`.toLowerCase();
    return searchTerms.every(term => searchText.includes(term));
  });
};

export const getSuggestions = (products: Product[], query: string, limit = 5) => {
  if (!query) return [];
  
  const matches = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return matches
    .slice(0, limit)
    .map(product => ({
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    }));
};

export const getPopularSearches = (products: Product[], limit = 5) => {
  return products
    .sort((a, b) => b.stock - a.stock)
    .slice(0, limit)
    .map(product => product.name);
};
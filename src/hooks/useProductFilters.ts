import { useState, useMemo } from 'react';
import type { Product } from '../types';
import type { FilterState, SortOption } from '../types/filters';

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    searchQuery: '',
    sortBy: 'popularity'
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(product => product.category_id === filters.category);
    }

    // Apply search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'latest':
        // Assuming newer products have higher IDs
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'popularity':
      default:
        // For demo purposes, we'll use stock as a proxy for popularity
        result.sort((a, b) => b.stock - a.stock);
    }

    return result;
  }, [products, filters]);

  const setCategory = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const setSearchQuery = (searchQuery: string) => {
    setFilters(prev => ({ ...prev, searchQuery }));
  };

  const setSortBy = (sortBy: SortOption) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  return {
    filters,
    filteredProducts,
    setCategory,
    setSearchQuery,
    setSortBy
  };
}
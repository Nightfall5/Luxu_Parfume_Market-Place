import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { ProductsFilter } from '../components/ProductsFilter';
import { SAMPLE_PRODUCTS } from '../data/products';
import { useProductFilters } from '../hooks/useProductFilters';
import { useCompare } from '../hooks/useCompare';
import type { CartHook } from '../types';

interface ProductsPageProps {
  cartHook: CartHook;
}

export function ProductsPage({ cartHook }: ProductsPageProps) {
  const { addToCart } = cartHook;
  const { toggleCompare, isComparing } = useCompare();
  const categories = ['all', ...new Set(SAMPLE_PRODUCTS.map(product => product.category_id))];
  
  const {
    filters,
    filteredProducts,
    setCategory,
    setSearchQuery,
    setSortBy
  } = useProductFilters(SAMPLE_PRODUCTS);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Our Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of premium products
        </p>
      </div>

      <ProductsFilter
        {...filters}
        setCategory={setCategory}
        setSearchQuery={setSearchQuery}
        setSortBy={setSortBy}
        categories={categories}
        totalProducts={filteredProducts.length}
      />

      <ProductGrid
        products={filteredProducts}
        onAddToCart={addToCart}
        onCompare={toggleCompare}
        isComparing={isComparing}
      />
    </div>
  );
}
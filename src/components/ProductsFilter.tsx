import React, { useState } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import type { FilterState, FilterActions } from '../types/filters';

interface ProductsFilterProps extends FilterState, FilterActions {
  categories: string[];
  totalProducts: number;
}

export function ProductsFilter({
  category,
  searchQuery,
  sortBy,
  setCategory,
  setSearchQuery,
  setSortBy,
  categories,
  totalProducts
}: ProductsFilterProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 relative group">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                     transition-all duration-300 group-hover:border-indigo-300"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 
                           group-hover:text-indigo-500 transition-colors duration-300" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 
                       transition-colors focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative min-w-[180px]">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none border border-gray-300 rounded-lg pl-4 pr-10 py-3 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                       transition-all duration-300 hover:border-indigo-300
                       bg-white cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className={`flex items-center gap-2 px-4 py-3 border rounded-lg transition-all duration-300 ${
              showAdvancedFilters
                ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                : 'border-gray-300 hover:bg-gray-50 hover:border-indigo-300'
            }`}
          >
            <SlidersHorizontal className="h-5 w-5" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>

      {showAdvancedFilters && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white
                               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                               transition-all duration-300">
                <option value="all">All Prices</option>
                <option value="under-1m">Under 1 Million</option>
                <option value="1m-5m">1-5 Million</option>
                <option value="above-5m">Above 5 Million</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Stock Status</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white
                               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                               transition-all duration-300">
                <option value="all">All</option>
                <option value="in-stock">In Stock</option>
                <option value="low-stock">Low Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white
                               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                               transition-all duration-300">
                <option value="all">All Ratings</option>
                <option value="4-plus">4+ Stars</option>
                <option value="3-plus">3+ Stars</option>
                <option value="2-plus">2+ Stars</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between text-sm text-gray-600 border-t pt-4">
        <p>
          Showing <span className="font-medium">{totalProducts}</span> products
          {category !== 'all' && (
            <span> in <span className="font-medium">{category}</span></span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="border-none bg-transparent focus:ring-0 text-indigo-600 font-medium cursor-pointer"
          >
            <option value="popularity">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
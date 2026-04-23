import React from 'react';
import { Laptop, Watch, Briefcase, Camera, Headphones, Smartphone } from 'lucide-react';
import { CategoryCard } from '../components/CategoryCard';
import { SAMPLE_PRODUCTS } from '../data/products';

const getCategoryCount = (categoryId: string) => {
  return SAMPLE_PRODUCTS.filter(product => product.category_id === categoryId).length;
};

const categories = [
  {
    name: 'Electronics',
    icon: Laptop,
    description: 'Latest laptops, computers, and accessories',
    count: getCategoryCount('electronics')
  },
  {
    name: 'Accessories',
    icon: Watch,
    description: 'Essential gadget accessories and add-ons',
    count: getCategoryCount('accessories')
  },
  {
    name: 'Office',
    icon: Briefcase,
    description: 'Professional office equipment and supplies',
    count: getCategoryCount('office')
  },
  {
    name: 'Cameras',
    icon: Camera,
    description: 'Professional cameras and photography gear',
    count: getCategoryCount('cameras')
  },
  {
    name: 'Audio',
    icon: Headphones,
    description: 'High-quality audio equipment and accessories',
    count: getCategoryCount('audio')
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    description: 'Smartphones and mobile accessories',
    count: getCategoryCount('mobile')
  }
];

export function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Browse Our Categories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of products across different categories
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </div>
  );
}
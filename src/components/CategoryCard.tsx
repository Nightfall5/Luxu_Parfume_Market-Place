import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  count: number;
  description: string;
}

export function CategoryCard({ name, icon: Icon, count, description }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${name.toLowerCase()}`}
      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {count} products
          </div>
        </div>
      </div>
    </Link>
  );
}
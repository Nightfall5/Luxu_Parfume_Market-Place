import React, { useState } from 'react';
import { ArrowRight, Star, Eye, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SAMPLE_PRODUCTS } from '../../data/products';
import { formatToRupiah } from '../../utils/currency';

export function TrendingSection() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const trendingProducts = SAMPLE_PRODUCTS.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Latest Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of premium tech products, hand-picked for innovation and quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {product.stock < 5 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Low Stock
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`} />
                <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ${
                  hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <div className="flex items-center justify-between text-white mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">4.8 (120 reviews)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">1.2k views</span>
                    </div>
                  </div>
                  <Link
                    to={`/products?category=${product.category_id}`}
                    className="inline-flex items-center px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">
                      {formatToRupiah(product.price)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.stock} units available
                    </p>
                  </div>
                  <button className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors group"
          >
            Explore All Products
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
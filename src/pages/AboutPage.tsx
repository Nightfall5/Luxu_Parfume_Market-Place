import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About TokoKita</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to TokoKita, your trusted online shopping destination. Created by Adhy, 
            this platform offers high-quality products at competitive prices, backed by 
            excellent customer service.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            To provide the best online shopping experience through innovative technology, 
            comprehensive product selection, and reliable customer support.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-700">Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-700">+62 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-700">contact@tokokita.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
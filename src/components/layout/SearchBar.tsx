import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search...' }: SearchBarProps) {
  return (
    <div className="relative group flex-1">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                 transition-all duration-300 group-hover:border-indigo-300"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 
                        group-hover:text-indigo-500 transition-colors duration-300" />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 
                   transition-colors focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
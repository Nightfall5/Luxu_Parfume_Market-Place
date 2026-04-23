import React, { useState } from 'react';
import { LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../common/Button';

export function UserMenu() {
  const { user, setUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setIsMenuOpen(false);
  };

  if (!user) return null;

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2"
      >
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.profile?.full_name || user.email)}&background=random`}
          alt={user.profile?.full_name || user.email}
          className="w-6 h-6 rounded-full"
        />
        <span>{user.profile?.full_name || user.email}</span>
      </Button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
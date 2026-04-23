import React from 'react';
import { Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';

interface WishlistButtonProps {
  productId: string;
  isLiked: boolean;
  onToggle: () => void;
}

export function WishlistButton({ productId, isLiked, onToggle }: WishlistButtonProps) {
  const { user } = useAuth();
  const { showToast } = useToast();

  const handleClick = () => {
    if (!user) {
      showToast('Please login to save items to your wishlist', 'info');
      return;
    }
    onToggle();
    showToast(
      isLiked ? 'Removed from wishlist' : 'Added to wishlist',
      'success'
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-all duration-300 ${
        isLiked
          ? 'bg-red-50 text-red-500'
          : 'bg-white/90 hover:bg-white text-gray-600'
      }`}
      aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`}
      />
    </button>
  );
}
import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { TrendingSection } from '../components/home/TrendingSection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TrendingSection />
      <NewsletterSection />
    </div>
  );
}
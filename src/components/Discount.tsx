import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

export default function Discount() {
  return (
    <section id="offers" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Tag className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold mb-6">New Year Special Offer!</h2>
          <div className="text-7xl font-bold mb-6">
            30% OFF
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Celebrate the new year with an exclusive 30% discount on all our design services. 
            Transform your space for less!
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
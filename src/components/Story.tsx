import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80"
              alt="Shivani Verma - Interior Designer"
              className="rounded-lg shadow-lg w-full h-[300px] sm:h-[500px] object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Discover Our Story</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              With a passion for creating beautiful and functional spaces, designer Shivani Verma brings years of 
              expertise in interior design. Her unique approach combines modern aesthetics with timeless 
              elegance, ensuring each project reflects the client's personality while maintaining the 
              highest standards of design excellence.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              From residential makeovers to commercial projects, every space is thoughtfully crafted 
              to create an environment that inspires and delights.
            </p>
            <a
              href="http://www.linkedin.com/in/shivani-verma-741183244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#0077b5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-[#006396] transition-colors text-sm sm:text-base"
            >
              <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
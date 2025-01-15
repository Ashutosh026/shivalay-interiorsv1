import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const whatsappLink = "https://wa.me/message/5CCHLJ3RHARZC1";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://raw.githubusercontent.com/Ashutosh026/shivalay-interiorsv1/refs/heads/main/src/assets/logo1.png" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold text-[##000000]">Shivalay Interiors</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#offers" className="text-gray-700 hover:text-indigo-600">Offers</a>
            <a href="#portfolio" className="text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Book Free Consultation
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#offers" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Offers</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

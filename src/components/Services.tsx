import React from 'react';
import { Palette, Ruler, Box, Users, Home, Lightbulb, Sofa, Grid } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Consultation",
    description: "One-on-one design consultation to understand your vision, style preferences, and requirements.",
    price: "Free"
  },
  {
    icon: Ruler,
    title: "Kitchen design",
    description: "The Heart of Your Home, Perfectly Designed with elegant designing and good finishing.",
    price: "Custom Quote"
  },
  {
    icon: Box,
    title: "Wardrobe",
    description: "Maximising space and enhancing beauty with 10 year warranty",
    price: "Custom Quote"
  },
  {
    icon: Home,
    title: "Full Interior Work",
    description: "End-to-end interior design service including concept, execution, and styling.",
    price: "Custom Quote"
  },
  {
    icon: Sofa,
    title: "Furniture Design",
    description: "Custom furniture design and manufacturing tailored to your space and style preferences.",
    price: "Based on Design"
  },
  {
    icon: Grid,
    title: "Modular Designing",
    description: "Efficient and customizable modular solutions for kitchens, wardrobes, and storage units.",
    price: "₹1800/sq.ft"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From initial concept to final styling, we offer comprehensive interior design services
            tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="h-10 sm:h-12 w-10 sm:w-12 text-indigo-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
              <p className={`font-semibold ${service.price === 'Free' ? 'text-green-600' : 'text-indigo-600'}`}>
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
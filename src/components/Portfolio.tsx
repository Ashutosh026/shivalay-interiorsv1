import React from 'react';

const projects = [
  {
    title: "Modern Minimalist Home",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80"
  },
  {
    title: "Luxury Restaurant",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80"
  },
  {
    title: "Contemporary Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
  },
  {
    title: "Bohemian Studio",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80"
  },
  {
    title: "Urban Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80"
  },
  {
    title: "Boutique Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
            Explore our collection of thoughtfully designed spaces that reflect our commitment
            to excellence and creativity.
          </p>
          <a
            href="https://jumpshare.com/b/vnrhMYsHLHvxSyJEcLsy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-indigo-700 transition-colors mb-8 sm:mb-12 text-sm sm:text-base"
          >
            View Our Executed Projects
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-200 text-sm sm:text-base">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
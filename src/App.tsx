import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Story from './components/Story';
import Discount from './components/Discount';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Discount />
      <Story />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
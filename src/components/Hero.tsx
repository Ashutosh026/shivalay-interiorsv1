import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Transform Your Space\nInto a Work of Art",
    description:
      "Award-winning interior designer Shivani Verma brings your vision to life with innovative designs and exceptional attention to detail.",
    image:
     "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
  },
  {
    title: "Custom Furniture Tailored to Perfection",
    description:
      "Handcrafted furniture designed exclusively for your space, blending functionality with timeless elegance to enhance every corner of your home.",
    image:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Modern Modular Design",
    description:
      "Contemporary modular solutions crafted with cutting-edge materials. Durability meets sophistication in every piece we create.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");
  const whatsappLink = "https://wa.me/message/5CCHLJ3RHARZC1";

  useEffect(() => {
    const intervalTime = currentSlide === 0 ? 4000 : 3000;
    const timer = setInterval(() => {
      setDirection("right");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleSlideChange = (index, dir) => {
    setDirection(dir);
    setCurrentSlide(index);
  };

  return (
    <div id="home" className="relative h-[calc(100vh-4rem)] md:h-screen overflow-hidden pt-16 md:pt-0">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            </div>
            <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-white">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <a  
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-md hover:bg-indigo-900"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              handleSlideChange(
                index,
                index > currentSlide ? "right" : "left"
              )
            }
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
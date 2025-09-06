import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  console.log('App component loaded');
  
  return (
    <div className="app">
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default App;

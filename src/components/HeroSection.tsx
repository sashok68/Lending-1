import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  return (
    <section className="hero-section">
      <nav className="hero-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <h2>Luxury Villas</h2>
            </div>
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#gallery">Portfolio</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            console.log('Video failed to load, using fallback image');
            const video = e.target as HTMLVideoElement;
            video.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'hero-video-fallback';
            fallback.style.backgroundImage = 'url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)';
            fallback.style.backgroundSize = 'cover';
            fallback.style.backgroundPosition = 'center';
            fallback.style.width = '100%';
            fallback.style.height = '100%';
            video.parentNode?.appendChild(fallback);
          }}
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Exclusive Villas Built for You
            </h1>
            <p className="hero-subtitle fade-in-up">
              Construction. Quality Control. Property Management.
            </p>
            <div className="hero-cta fade-in-up">
              <button className="btn-primary">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

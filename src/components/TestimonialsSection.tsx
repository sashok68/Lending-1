import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialsSection.css';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'James Mitchell',
      location: 'Monaco',
      rating: 5,
      text: 'Exceptional craftsmanship and attention to detail. Our villa exceeded all expectations. The team delivered a masterpiece that perfectly captures luxury living.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Sophie Laurent',
      location: 'Cannes',
      rating: 5,
      text: 'From concept to completion, the entire process was seamless. The quality control standards are unmatched. We couldn\'t be happier with our investment.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Robert Chen',
      location: 'Nice',
      rating: 5,
      text: 'Professional, reliable, and truly dedicated to excellence. The property management services have been outstanding. Highly recommend for luxury projects.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Isabella Rodriguez',
      location: 'Antibes',
      rating: 5,
      text: 'The team transformed our vision into reality. Every detail was carefully considered and executed to perfection. A truly exceptional experience.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Hear from our satisfied clients about their luxury villa experience
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="client-details">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-location">{testimonial.location}</p>
                  </div>
                </div>
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
              </div>
              
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

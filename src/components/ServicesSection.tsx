import React from 'react';
import { Building2, ShieldCheck, Settings } from 'lucide-react';
import './ServicesSection.css';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <Building2 size={48} />,
      title: 'Construction',
      description: 'Custom luxury villa construction with premium materials and innovative design solutions.'
    },
    {
      id: 2,
      icon: <ShieldCheck size={48} />,
      title: 'Quality Control',
      description: 'Rigorous quality assurance processes ensuring every detail meets our exacting standards.'
    },
    {
      id: 3,
      icon: <Settings size={48} />,
      title: 'Property Management',
      description: 'Comprehensive property management services for your luxury villa investment.'
    }
  ];

  return (
    <section className="services-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Delivering excellence in every aspect of luxury villa development
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

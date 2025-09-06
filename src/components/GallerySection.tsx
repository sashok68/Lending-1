import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './GallerySection.css';

interface Villa {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
}

const GallerySection: React.FC = () => {
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const villas: Villa[] = [
    {
      id: 1,
      title: 'Oceanfront Villa',
      location: 'Monaco',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Luxurious oceanfront villa with panoramic sea views and private beach access.'
    },
    {
      id: 2,
      title: 'Modern Villa',
      location: 'Cannes',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Contemporary design meets luxury living in this stunning modern villa.'
    },
    {
      id: 3,
      title: 'Classic Villa',
      location: 'Nice',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Timeless elegance and traditional architecture in a prime location.'
    },
    {
      id: 4,
      title: 'Hillside Villa',
      location: 'Antibes',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Spectacular hillside villa with breathtaking views of the Mediterranean.'
    },
    {
      id: 5,
      title: 'Minimalist Villa',
      location: 'Saint-Tropez',
      image: 'https://images.unsplash.com/photo-1600566753190-17f63ca14493?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Clean lines and minimalist design create a serene living environment.'
    },
    {
      id: 6,
      title: 'Luxury Villa',
      location: 'Cap Ferrat',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'Ultimate luxury living with world-class amenities and stunning architecture.'
    }
  ];

  const openModal = (villa: Villa) => {
    setSelectedVilla(villa);
    setCurrentImageIndex(villas.findIndex(v => v.id === villa.id));
  };

  const closeModal = () => {
    setSelectedVilla(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % villas.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + villas.length) % villas.length);
  };

  return (
    <section className="gallery-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Discover our collection of exclusive luxury villas
          </p>
        </div>
        
        <div className="gallery-grid">
          {villas.map((villa) => (
            <div key={villa.id} className="gallery-item" onClick={() => openModal(villa)}>
              <div className="gallery-image">
                <img src={villa.image} alt={villa.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3 className="gallery-title">{villa.title}</h3>
                    <p className="gallery-location">{villa.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVilla && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-image-container">
              <img 
                src={villas[currentImageIndex].image} 
                alt={villas[currentImageIndex].title}
                className="modal-image"
              />
              
              <button className="modal-nav modal-nav-prev" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>
              
              <button className="modal-nav modal-nav-next" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="modal-info">
              <h3 className="modal-title">{villas[currentImageIndex].title}</h3>
              <p className="modal-location">{villas[currentImageIndex].location}</p>
              <p className="modal-description">{villas[currentImageIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

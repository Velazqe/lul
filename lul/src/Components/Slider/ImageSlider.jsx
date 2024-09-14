import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import Guacamayos from '../../guacamayos.jpg'; // Adjust path to the image
import Apagones from '../../apagones.jpg'; // Adjust path to the image
import { Slide } from 'react-slideshow-image';


const images = [
  { src: Guacamayos, alt: 'Guacamayos', title: 'Guacamayos', description: 'Beautiful macaws in their natural habitat.' },
  { src: Apagones, alt: 'Apagones', title: 'Apagones', description: 'A stunning landscape during sunset.' },
  // Add more images as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="image-section">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="image-overlay">
              <h2 className="overlay-title">{image.title}</h2>
              <p className="overlay-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;

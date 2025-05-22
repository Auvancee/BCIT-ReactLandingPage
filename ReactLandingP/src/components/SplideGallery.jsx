// components/SplideGallery.jsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./SplideGallery.css"

const SplideGallery = ({ media }) => {
  if (!media || media.length === 0) return null;

  return (
    <div className="MediaWrapper">
  <Splide
    options={{
  type: 'loop',
  perPage: 1,
  perMove: 1,
  autoplay: true,
  arrows: true,
  pagination: true,
  heightRatio: 0.515625,
  cover: true,
  drag: true,
  swipe: true,
  flickPower: 500,
  flickMaxPages: 1,
  breakpoints: {
      1300: { perPage: 1, gap: "1rem" }, // Tablet
      1100: { perPage: 1, gap: "1rem", heightRatio: 0.5671875 }, // Tablet
      900: { perPage: 1, gap: "1rem", arrows: false }, // Tablet
      750: { perPage: 1, gap: "1rem", arrows: false }, // Small Tablet
      500: { perPage: 1, gap: "1rem", arrows: false}, // Mobile
      320: { perPage: 1, gap: "0.5rem", arrows: false, 
        heightRatio: 0.7425, pagination: false, autoplay: true}, // Extra Small Screens
  },
}}

    className="MediaCarousel"
  >
    {media.map((item, i) => (
      <SplideSlide key={i}>
        {item.type === 'image' && (
          <img src={item.src} alt={`Slide ${i}`} className="ProjectMedia" />
        )}
        {item.type === 'video' && (
          <video 
            autoPlay
            playsInline
            muted
            loop   
            className="ProjectMedia">
  
            <source src={item.src} type="video/mp4" />
          </video>
        )}
        {item.type === 'youtube' && (
          <iframe
            className="ProjectMedia"
            src={item.src}
            title={`YouTube video ${i}`}
            allowFullScreen
          />
        )}
      </SplideSlide>
    ))}
  </Splide>
</div>


  );
};

export default SplideGallery;

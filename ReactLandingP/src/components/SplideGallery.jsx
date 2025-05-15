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
      autoplay: true,
      arrows: true,
      pagination: true,
      heightRatio: 0.46875, // ← this is the key
      cover: true,
    }}
    className="MediaCarousel"
  >
    {media.map((item, i) => (
      <SplideSlide key={i}>
        {item.type === 'image' && (
          <img src={item.src} alt={`Slide ${i}`} className="ProjectMedia" />
        )}
        {item.type === 'video' && (
          <video controls className="ProjectMedia">
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

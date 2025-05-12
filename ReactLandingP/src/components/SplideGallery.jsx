// components/SplideGallery.jsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SplideGallery = ({ media }) => {
  if (!media || media.length === 0) return null;

  return (
    <div className="SplideGallery" style={{ width: '100%', maxWidth: 'auto', margin: '0 auto' }}>
  <Splide
    options={{
      type: 'loop',
      perPage: 1,
      autoplay: true,
      arrows: true,
      pagination: true,
      heightRatio: 0.5625, // 16:9 ratio
      cover: true,
    }}
  >
    {media.map((item, i) => (
      <SplideSlide key={i}>
        {item.type === 'image' && (
          <img src={item.src} alt={`Slide ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
        {item.type === 'video' && (
          <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={item.src} type="video/mp4" />
          </video>
        )}
        {item.type === 'youtube' && (
          <iframe
            width="100%"
            height="100%"
            style={{ aspectRatio: "16/9" }}
            src={item.src}
            title={`YouTube video ${i}`}
            frameBorder="0"
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

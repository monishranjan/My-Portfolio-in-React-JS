import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import img1 from '../assets/images/12.jpg'; // Adjust the path as needed

const ScrollImageGallery = () => {
  useEffect(() => {
    const row1 = document.querySelector('.image-row-1');
    const row2 = document.querySelector('.image-row-2');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      gsap.to(row1, {
        x: scrollPosition * 0.5, // Adjust this factor for speed
        ease: 'power2.out',
      });

      gsap.to(row2, {
        x: -scrollPosition * 0.5, // Moves in the opposite direction
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <div className="w-full space-y-20 overflow-hidden mb-96">
      {/* First row of images */}
      <div className="flex space-x-4 image-row-1 transform rotate-45 origin-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="relative">
            <img
              src={img1}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Second row of images */}
      <div className="flex space-x-4 image-row-2 transform rotate-[35deg] origin-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index + 6} className="relative">
            <img
              src={img1}
              alt={`Image ${index + 7}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollImageGallery;

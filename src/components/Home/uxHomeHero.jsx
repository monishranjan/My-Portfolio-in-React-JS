import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const UxHomeHero = () => {
  const professionRef1 = useRef(null);
  const professionRef2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // Short repeat delay for smoother transitions

    // Initial state: Display the first profession without delay
    tl.set(professionRef1.current, { y: '0%', opacity: 1 })
      .to(professionRef1.current, { y: '-100%', opacity: 0, duration: 0.75, ease: 'power2.inOut', delay: 1.5 }) // Animate first text up
      .fromTo(professionRef2.current, { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.75, ease: 'power2.inOut' }) // Animate second text in
      .to(professionRef2.current, { y: '-100%', opacity: 0, duration: 0.75, ease: 'power2.inOut', delay: 1.5 }) // Animate second text up
      .fromTo(professionRef1.current, { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.75, ease: 'power2.inOut' }); // Animate first text back in

    return () => {
      tl.kill(); // Cleanup GSAP timeline on component unmount
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-32 md:py-60 leading-none">
      <div className="text-center md:text-left">
        {/* Responsive heading */}
        <h1 className="text-5xl md:text-[120px] lg:text-[200px] font-bold tracking-tight">
          Monish Ranjan
        </h1>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          {/* Responsive profession section */}
          <div className="hero-profession text-xl md:text-3xl w-full md:w-1/2 ml-0 md:ml-3 relative overflow-hidden h-10 font-semibold">
            <h2 ref={professionRef1} className="absolute top-0 left-0 w-full">
              UI/UX Designer
            </h2>
            <h2 ref={professionRef2} className="absolute top-0 left-0 w-full">
              Web & App Developer
            </h2>
          </div>
          {/* Responsive tagline */}
          <h2 className="mt-4 md:mt-0 text-lg md:text-2xl font-light">
            Creating apps & websites that do more than just exist online — leave a lasting impression.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UxHomeHero;
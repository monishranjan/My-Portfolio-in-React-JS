import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const marqueeAnimation = useRef(null);

  // List of items
  const items = ["Innovative", "Creative", "Dynamic", "Reliable", "Efficient"];

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // Clone content for seamless scrolling
    const clonedContent = marqueeElement.innerHTML;
    marqueeElement.innerHTML += clonedContent;

    const contentWidth = marqueeElement.scrollWidth / 2; // Original content width

    // GSAP animation for infinite scroll
    marqueeAnimation.current = gsap.to(marqueeElement, {
      x: -contentWidth, // Scroll left by the exact width of the content
      duration: contentWidth / 100, // Adjust duration dynamically
      ease: "none", // No easing for smooth linear motion
      repeat: -1, // Infinite repeat
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth), // Reset without jerk
      },
    });

    // Cleanup on unmount
    return () => {
      if (marqueeAnimation.current) marqueeAnimation.current.kill();
    };
  }, []);

  const handleHover = () => {
    if (marqueeAnimation.current) {
      marqueeAnimation.current.reverse(); // Reverse animation on hover
    }
  };

  const handleLeave = () => {
    if (marqueeAnimation.current) {
      marqueeAnimation.current.play(); // Resume animation on mouse leave
    }
  };

  return (
    <div
      className="overflow-hidden w-full h-16 bg-secondaryColor flex items-center relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap w-auto"
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="text-xl font-semibold mx-6 text-primaryColor font-malinton"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

import React from "react";
import Marquee from "react-fast-marquee";

const CustomMarquee = () => {
  // List of items
  const items = ["Innovative", "Creative", "Dynamic", "Reliable", "Efficient"];

  return (
    <div className="w-full h-16 bg-secondaryColor flex items-center">
      <Marquee
        gradient={false} // Disable gradient at edges
        speed={50}       // Set scrolling speed
        pauseOnHover={true} // Pause marquee on hover
      >
        {/* Repeat enough items to ensure seamless looping */}
        {[...Array(10)].flatMap(() => items).map((item, index) => (
          <span
            key={index}
            className="text-xl font-semibold mx-6 text-primaryColor font-malinton"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
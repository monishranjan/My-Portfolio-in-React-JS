import React, { useEffect } from 'react';
import leafSVG from '../../assets/images/leaf.svg'; // Path to your leaf SVG
import cursorSVG from '../../assets/logos/D1.svg'; // Path to your custom cursor SVG

const LeafCursor = () => {
  useEffect(() => {
    // Set the custom cursor
    document.body.style.cursor = `url(${cursorSVG}), auto`;

    const handleClick = (e) => {
      // Create a new leaf element on click
      const leaf = document.createElement('img');
      leaf.src = leafSVG;
      leaf.style.position = 'absolute';
      leaf.style.left = `${e.clientX}px`;
      leaf.style.top = `${e.clientY}px`;
      leaf.style.width = '30px'; // Adjust size as needed
      leaf.style.pointerEvents = 'none';
      leaf.style.transition = 'transform 3s ease-in, opacity 3s';

      // Append the leaf to the body
      document.body.appendChild(leaf);

      // Animate the leaf to fall
      setTimeout(() => {
        leaf.style.transform = `translateY(${window.innerHeight - e.clientY}px) rotate(${Math.random() * 360}deg)`;
        leaf.style.opacity = '0';
      }, 50);

      // Remove the leaf after the animation completes
      setTimeout(() => {
        document.body.removeChild(leaf);
      }, 3000);
    };

    // Add the click event listener
    window.addEventListener('click', handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.body.style.cursor = 'auto'; // Reset the cursor
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return null; // This component renders nothing directly, only adds behavior
};

export default LeafCursor;

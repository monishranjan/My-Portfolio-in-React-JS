import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

// Importing Images
import D2 from "../assets/logos/D2.svg";
import D3 from "../assets/logos/D3.svg";
import D4 from "../assets/logos/D4.svg";
import D5 from "../assets/logos/D5.svg";
import D6 from "../assets/logos/D6.svg";

const Landing = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (page) => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    setIsAnimating(true);

    // GSAP animation to close the page from bottom to top and spin images
    gsap.timeline()
      .to(".landing-container", {
        y: "-100vh", // Move the container upwards
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".main-section img", {
        rotation: 360, // Spin the images
        duration: 1,
        stagger: 0.2, // Apply stagger to each image
        ease: "power2.inOut",
      })
      .eventCallback("onComplete", () => {
        // After animation completes, navigate to the respective page
        if (page === "uiux") {
          navigate("/home");
        } else if (page === "graphicdesign") {
          navigate("/graphic-design");
        }
      });
  };

  return (
    <div className="landing-container fixed top-0 left-0 w-full h-full bg-primaryColor flex justify-center items-center">
      <div className="main-section flex gap-8 h-32">
        <img src={D6} alt="Logo D6" />
        <img src={D5} alt="Logo D5" />
        <img src={D4} alt="Logo D4" />
        <img src={D3} alt="Logo D3" />
        <img src={D2} alt="Logo D2" />
      </div>

      {/* Buttons */}
      <div className="buttons-container absolute right-16 bottom-12 space-x-8">
        <button
          className="button text-secondaryColor px-8 py-5 border-2 border-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all"
          onClick={() => handleButtonClick("uiux")}
        >
          <span className="block text-xl">UI/UX Designer</span>
        </button>
        <button
          className="button text-secondaryColor px-8 py-5 border-2 border-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all"
          onClick={() => handleButtonClick("graphicdesign")}
        >
          <span className="block text-xl">Graphic Designer</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Landing = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (page) => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    setIsAnimating(true);

    // GSAP animation to close the page from bottom to top
    gsap.to(".landing-container", {
      y: "-100vh", // Move the container upwards
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // After animation completes, navigate to the respective page
        if (page === "uiux") {
          navigate("/home");
        } else if (page === "graphicdesign") {
          navigate("/graphic-design");
        }
      },
    });
  };

  return (
    <div className="landing-container fixed top-0 left-0 w-full h-full bg-primaryColor flex justify-center items-center">
      <div className="buttons-container flex space-x-8">
        <button
          className="button text-black p-8 rounded-xl border-2 border-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all"
          onClick={() => handleButtonClick("uiux")}
        >
          <span className="block text-xl">UI/UX Designing</span>
        </button>
        <button
          className="button text-black p-8 rounded-xl border-2 border-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all"
          onClick={() => handleButtonClick("graphicdesign")}
        >
          <span className="block text-xl">Graphic Design</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;

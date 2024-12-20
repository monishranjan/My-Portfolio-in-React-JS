import React, { useRef, useState, useEffect } from "react";
import HomeHeader from "../components/Home/HomeHeader";
import UxHomeHero from "../components/Home/uxHomeHero";
import ExperienceList from "../components/Home/ExperienceList";
import WorkItem from "../components/Home/WorkListing";
import CustomFooter from "../components/Home/CustomFooter"

// Importing Images
import img1 from "../assets/images/12.jpg";
import gsap from "gsap";

const Home = () => {
  const workRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const imgRef = useRef(null);
  const imgBannerRef = useRef(null);

  useEffect(() => {
    // Mouse movement effect
    const handleMouseMove = (e) => {
      const { clientWidth, clientHeight } = imgBannerRef.current; // Get dimensions of the banner
      const { clientX, clientY } = e; // Get mouse position relative to the viewport

      // Calculate the position of the mouse relative to the img-banner container
      const offsetX =
        clientX - imgBannerRef.current.getBoundingClientRect().left;
      const offsetY =
        clientY - imgBannerRef.current.getBoundingClientRect().top;

      // Calculate movement of the image based on mouse position
      const moveX = (offsetX / clientWidth - 0.5) * 20; // Adjust multiplier for movement intensity
      const moveY = (offsetY / clientHeight - 0.5) * 20;

      // Apply GSAP animation to the image to move it slightly
      gsap.to(imgRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Scroll effect for subtle image movement
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Use GSAP to move the image slightly when scrolling
      gsap.to(imgRef.current, {
        y: scrollPosition * 0.1, // Adjust the multiplier for scroll movement
        ease: "power2.out",
      });
    };

    // Event listeners for mouse move and scroll
    const imgBanner = imgBannerRef.current;
    imgBanner.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      imgBanner.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full text-secondaryColor bg-primaryColor">
      {/* Header */}
      <HomeHeader
        scrollToWork={scrollToWork}
        scrollToExperience={scrollToExperience}
      />

      {/* Home Page Content */}
      <div>
        <UxHomeHero />

        {/* Image Banner with fixed positioning */}
        <div
          ref={imgBannerRef}
          className="img-banner overflow-hidden relative h-[600px] sm:h-[800px] md:h-[900px]"
        >
          <img
            ref={imgRef}
            src={img1}
            alt="Banner"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>

        {/* UI & Development Works */}
        <div
          ref={workRef}
          className="pt-20 sm:pt-40 md:pt-60 px-8 sm:px-12 md:px-20"
        >
          <div className="section-header">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-4">
              My Works
            </h1>
            <div className="h-[1px] bg-secondaryColor"></div>
          </div>

          <WorkItem />
        </div>

        {/* Experience */}
        <div
          ref={experienceRef}
          className="py-20 sm:py-40 md:py-60 px-8 sm:px-12 md:px-20"
        >
          <ExperienceList />
        </div>

        {/* Footer */}
        <div>
          <CustomFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;

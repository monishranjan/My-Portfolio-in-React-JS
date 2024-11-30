import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import D2 from "../../assets/logos/D2.svg";
import D3 from "../../assets/logos/D3.svg";
import D4 from "../../assets/logos/D4.svg";
import D5 from "../../assets/logos/D5.svg";
import D6 from "../../assets/logos/D6.svg";
import { CgMenuRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const HomeHeader = ({ scrollToWork, scrollToExperience }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => setIsMenuOpen(false),
      });
      return;
    }

    setIsMenuOpen(true);
  };

  return (
    <>
      {/* Header */}
      <div className="border-b-2 border-tertiaryColor flex py-6 px-6 md:px-20 justify-between items-center">
        {/* Left Logo */}
        <div className="right-logo flex gap-2 h-7">
          <img src={D6} alt="Logo D6" />
          <img src={D5} alt="Logo D5" className="h-8" />
          <img src={D4} alt="Logo D4" />
          <img src={D3} alt="Logo D3" />
          <img src={D2} alt="Logo D2" />
        </div>

        {/* Right Side Content */}
        <div className="hidden md:flex gap-5 items-center">
          <h1 onClick={scrollToWork} className="hover:font-semibold cursor-pointer">
            Work
          </h1>
          <h1 onClick={scrollToExperience} className="hover:font-semibold cursor-pointer">
            Experience
          </h1>
          <h1
            onClick={() => navigate("/about")}
            className="hover:font-semibold cursor-pointer"
          >
            About
          </h1>
          <a
            href="/files/ATS CV Monish.pdf"
            download="Monish-CV.pdf"
            className="download-cv-button bg-secondaryColor text-white text-sm font-light px-5 py-3 rounded-sm"
          >
            Download CV
          </a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="flex md:hidden cursor-pointer flex-col gap-1"
          onClick={handleMenuToggle}
        >
          <CgMenuRight className="text-3xl" />
        </div>
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-secondaryColor flex flex-col justify-center items-center z-50 fullscreen-menu"
        >
          <button
            className="absolute border-[1px] border-primaryColor hover:border-transparent hover:bg-primaryColor hover:text-secondaryColor rounded-full px-3 py-[2px] top-4 right-4 text-white text-3xl"
            onClick={handleMenuToggle}
          >
            &times;
          </button>
          <ul className="text-white text-2xl font-light space-y-6 text-center">
            <li onClick={scrollToWork} className="hover:font-semibold cursor-pointer">
              Work
            </li>
            <li
              onClick={scrollToExperience}
              className="hover:font-semibold cursor-pointer"
            >
              Experience
            </li>
            <li
              onClick={() => navigate("/about")}
              className="hover:font-semibold cursor-pointer"
            >
              About
            </li>
            <li>
              <a
                href="/files/ATS CV Monish.pdf"
                download="Monish-CV.pdf"
                className="bg-primaryColor text-secondaryColor text-sm font-normal px-5 py-3 rounded-sm"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HomeHeader;

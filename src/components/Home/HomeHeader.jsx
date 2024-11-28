import React, { useEffect, useState } from "react";
import gsap from "gsap";
import D2 from "../../assets/logos/D2.svg";
import D3 from "../../assets/logos/D3.svg";
import D4 from "../../assets/logos/D4.svg";
import D5 from "../../assets/logos/D5.svg";
import D6 from "../../assets/logos/D6.svg";

// Importing Icons
import { CgMenuLeft } from "react-icons/cg";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const logos = document.querySelectorAll(".right-logo img");

    const startEngineAnimation = () => {
      logos.forEach((logo, index) => {
        const tl = gsap.timeline();

        tl.fromTo(
          logo,
          { rotation: 0 },
          {
            rotation: index % 2 === 0 ? 360 : -360,
            duration: 2,
            ease: "power1.in",
          }
        )
          .to(logo, {
            rotation: index % 2 === 0 ? -360 : 360,
            duration: 1.5,
            ease: "power1.out",
          })
          .to(logo, {
            rotation: index % 2 === 0 ? 0 : 0,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .to(logo, {
            rotation: index % 2 === 0 ? 360 : -360,
            duration: 10,
            repeat: -1,
            ease: "none",
          });
      });
    };

    startEngineAnimation();

    const handleScroll = () => {
      gsap.killTweensOf(".right-logo img");
      startEngineAnimation();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        {/* Right Side Content (Hidden below md size) */}
        <div className="hidden md:flex gap-5 items-center">
          <h1 className="hover:font-semibold cursor-pointer">Work</h1>
          <h1 className="hover:font-semibold cursor-pointer">Experience</h1>
          <h1 className="hover:font-semibold cursor-pointer">Process</h1>
          <h1 className="hover:font-semibold cursor-pointer">About</h1>
          <a
            href="/files/ATS CV Monish.pdf"
            download="Monish-CV.pdf"
            className="download-cv-button bg-secondaryColor text-white text-sm font-light px-5 py-3 rounded-sm"
          >
            Download CV
          </a>
        </div>

        {/* Hamburger Menu (Visible below md size) */}
        <div
          className="flex md:hidden cursor-pointer flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* <div className="h-1 w-6 bg-black rounded"></div>
          <div className="h-1 w-6 bg-black rounded"></div>
          <div className="h-1 w-6 bg-black rounded"></div> */}
          <CgMenuLeft className="text-3xl"/>
        </div>
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
          <button
            className="absolute border-[1px] border-primaryColor hover:border-transparent hover:bg-primaryColor hover:text-secondaryColor rounded-full px-3 py-[2px] top-4 right-4 text-white text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="text-white text-2xl font-light space-y-6 text-center">
            <li className="hover:font-semibold cursor-pointer">Work</li>
            <li className="hover:font-semibold cursor-pointer">Experience</li>
            <li className="hover:font-semibold cursor-pointer">Process</li>
            <li className="hover:font-semibold cursor-pointer">About</li>
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

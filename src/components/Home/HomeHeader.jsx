import React, { useEffect } from "react";
import gsap from "gsap";
import D2 from "../../assets/logos/D2.svg";
import D3 from "../../assets/logos/D3.svg";
import D4 from "../../assets/logos/D4.svg";
import D5 from "../../assets/logos/D5.svg";
import D6 from "../../assets/logos/D6.svg";

const HomeHeader = () => {
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
    <div className="border-b-2 border-tertiaryColor flex py-6 px-20 justify-between items-center">
      {/* Left Logo */}
      <div className="right-logo flex gap-2 h-7">
        <img src={D6} alt="Logo D6" />
        <img src={D5} alt="Logo D5" className="h-8" />
        <img src={D4} alt="Logo D4" />
        <img src={D3} alt="Logo D3" />
        <img src={D2} alt="Logo D2" />
      </div>

      {/* Right Side Content */}
      <div className="flex gap-5 items-center">
        <h1 className="hover:font-semibold cursor-pointer">Work</h1>
        <h1 className="hover:font-semibold cursor-pointer">Experience</h1>
        <h1 className="hover:font-semibold cursor-pointer">Process</h1>
        <h1 className="hover:font-semibold cursor-pointer">About</h1>

        {/* Download CV Button */}
        <a
          href="/files/ATS CV Monish.pdf"
          download="Monish-CV.pdf" // Set a custom name for the downloaded file
          className="download-cv-button bg-secondaryColor text-white text-sm font-light px-5 py-3 rounded-sm"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default HomeHeader;

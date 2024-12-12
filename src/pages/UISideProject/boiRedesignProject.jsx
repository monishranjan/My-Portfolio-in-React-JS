import React, { useEffect, useState } from "react";
import ProjectHeader from "../../components/UiSideProject/projectHeader";
import Marquee from "react-fast-marquee";

// Importing images
import TopImage from "../../assets/images/boi1.jpg";
import BOILogo from "../../assets/logos/BOI Logo 2.png";
import ProfileM from "../../assets/images/project/boi/profile.png";
import SplashScreenM from "../../assets/images/project/boi/splashscreen.png";
import HomePageM from "../../assets/images/project/boi/homepage1.png";
import CardsM from "../../assets/images/project/boi/cards1.png";
import ProjectNavigation from "../../components/UiSideProject/ProjectNavigation";

const BoiRedesignProject = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = React.useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Handle sticky navigation visibility
  useEffect(() => {
    const handleScroll = () => {
      const navSection = document.getElementById("navSection");
      if (navSection) {
        const rect = navSection.getBoundingClientRect();

        // Show sticky nav when navSection is out of viewport
        if (rect.top <= 0 || rect.bottom <= 0) {
          setShowStickyNav(true);
        } else {
          setShowStickyNav(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll event triggered");
      const sections = document.querySelectorAll("[data-section]");
      console.log("Sections found:", sections);
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        console.log("Section Rect:", section.id, rect);
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          console.log(`Currently visible: ${section.id}`);
          setActiveSection(section.id);
        }
      });
    };

    const sectionsCheck = document.querySelectorAll("[data-section]");
    console.log("Initial Sections Check:", sectionsCheck);

    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100); // Wait for DOM updates
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-secondaryColor bg-primaryColor">
      {/* Header */}
      <div className="relative z-10">
        <ProjectHeader />
      </div>
      {/* =========================== */}

      {/* Top Image Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src={TopImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-56">
          <h1 className="text-[#197FBF] text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Bank of India
          </h1>
          <p className="text-primaryColor text-base md:text-lg max-w-xl font-light">
            We ara a leading public sector bank in India, offering a wide range
            of banking services with a focus on customer satisfaction and
            digital innovation.
          </p>
        </div>
      </div>
      {/* =========================== */}

      {/* About Project */}
      <div className="project-details py-24 px-56">
        {/* Company Detail */}
        <div className="flex justify-between items-center">
          <div className="relative about-company w-1/2">
            <div className="">
              <h1 className="text-3xl font-semibold">Background</h1>
              <div className="h-[1px] bg-secondaryColor mt-4"></div>
            </div>
            <h4 className="text-lg mt-8">
              Bank of India (BOI) is one of the leading public sector banks in
              India, established in 1906. It offers a wide range of banking
              services, including personal, corporate, and digital banking, with
              a strong focus on customer satisfaction and financial inclusion.
              BOI aims to leverage technology to provide accessible and
              efficient banking solutions to its diverse customer base.
            </h4>
          </div>
          <div className="">
            <img src={BOILogo} alt="" className="h-36" />
          </div>
        </div>

        {/* Project Details */}
        <div className="flex mt-24">
          <div className="project-poroblem w-1/2">
            <div className="">
              <h1 className="text-3xl font-semibold">THE PROBLEM</h1>
              <div className="h-[1px] bg-secondaryColor mt-4"></div>
            </div>
            <h4 className="text-lg mt-8">
              The Bank of India mobile app has a cluttered interface, making
              navigation difficult for users. Essential features are poorly
              placed, and finding specific banking services is frustrating due
              to an overwhelming layout.{" "}
            </h4>
          </div>
          <div className="project-poroblem w-1/2 pl-24">
            <div className="">
              <h1 className="text-3xl font-semibold">THE SOLUTION</h1>
              <div className="h-[1px] bg-secondaryColor mt-4"></div>
            </div>
            <h4 className="text-lg mt-8">
              The app redesign focuses on simplifying the homepage with a
              cleaner, more intuitive layout. Key features, such as the "Tap to
              view balance" button, were repositioned for better accessibility.
              Essential services are now consolidated into a single,
              user-friendly interface to improve navigation. These changes aim
              to deliver a seamless and efficient banking experience, enhancing
              user satisfaction.
            </h4>
          </div>
        </div>
        <div className="flex my-24 justify-between">
          <div className="role">
            <h1 className="text-xl font-semibold">ROLE</h1>
            <h4 className="text-lg mt-6">UI Design</h4>
            <h4 className="text-lg mt-3">UX Research</h4>
            {/* <h4 className="text-lg mt-3 ">Re-Design</h4> */}
          </div>
          <div className="timeline">
            <h1 className="text-xl font-semibold">TIMELINE</h1>
            <h4 className="text-lg mt-6">1 Week</h4>
          </div>
          <div className="design-process">
            <h1 className="text-xl font-semibold">DESIGN PROCESS</h1>
            <h4 className="text-lg mt-3">Empathize</h4>
            <h4 className="text-lg mt-3">Define</h4>
            <h4 className="text-lg mt-3">Ideate</h4>
            <h4 className="text-lg mt-3">Design</h4>
          </div>
          <div className="tools">
            <h1 className="text-xl font-semibold">TOOLS</h1>
            <h4 className="text-lg mt-3">Figma</h4>
            <h4 className="text-lg mt-3">Adobe Photoshop</h4>
          </div>
        </div>
      </div>
      {/* =========================== */}

      {/* Image Showcase with Marquee */}
      <div className="pb-32">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          <img
            src={SplashScreenM}
            alt="Splash Screen"
            className="h-[560px] mx-24"
            />
          <img src={HomePageM} alt="Home Page" className="h-[560px] mx-24" />
          <img src={ProfileM} alt="Profile" className="h-[560px] mx-24" />
          <img src={CardsM} alt="Cards" className="h-[560px] mx-24" />
        </Marquee>
      </div>
      {/* =========================== */}

      {/* Project Navigation */}
      <div className="project-navigation flex">
        <div className=""></div>
      </div>

      {/* Sticky Navigation */}
      {showStickyNav && (
        <div className="fixed top-0 left-0 w-full bg-primaryColor shadow-lg z-50 py-8 border-b-[1px] border-secondaryColor">
          <div className="flex justify-center items-center">
            <button
              onClick={() => scrollToSection("section1")}
              className={`px-6 py-2 rounded-full border-[1px] flex items-center justify-center text-sm font-normal transition-all duration-300 ${
                activeSection === "section1"
                  ? "bg-secondaryColor text-primaryColor"
                  : "border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor"
              }`}
            >
              Discovery
            </button>
            <div className="h-[1px] w-16 bg-secondaryColor"></div>
            <button
              onClick={() => scrollToSection("section2")}
              className={`px-6 py-2 rounded-full border-[1px] flex items-center justify-center text-sm font-normal transition-all duration-300 ${
                activeSection === "section2"
                  ? "bg-secondaryColor text-primaryColor"
                  : "border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor"
              }`}
            >
              Ideation
            </button>
            <div className="h-[1px] w-16 bg-secondaryColor"></div>
            <button
              onClick={() => scrollToSection("section3")}
              className={`px-6 py-2 rounded-full border-[1px] flex items-center justify-center text-sm font-normal transition-all duration-300 ${
                activeSection === "section3"
                  ? "bg-secondaryColor text-primaryColor"
                  : "border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor"
              }`}
            >
              Design
            </button>
            <div className="h-[1px] w-16 bg-secondaryColor"></div>
            <button
              onClick={() => scrollToSection("section4")}
              className={`px-6 py-2 rounded-full border-[1px] flex items-center justify-center text-sm font-normal transition-all duration-300 ${
                activeSection === "section4"
                  ? "bg-secondaryColor text-primaryColor"
                  : "border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor"
              }`}
              >
              Dev Handoff
            </button>
            <div className="h-[1px] w-16 bg-secondaryColor"></div>
            <button
              onClick={() => scrollToSection("section5")}
              className={`px-6 py-2 rounded-full border-[1px] flex items-center justify-center text-sm font-normal transition-all duration-300 ${
                activeSection === "section5"
                  ? "bg-secondaryColor text-primaryColor"
                  : "border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor"
              }`}
            >
              Reflection
            </button>
          </div>
        </div>
      )}
      {/* ================== */}

      {/* Navigation Section */}
      <div
        id="navSection"
        className="flex items-center justify-center mt-8 mb-32"
      >
        <div className="flex items-center justify-center">
          <button
            onClick={() => scrollToSection("section1")}
            className={`px-8 py-2 rounded-full border-[1px] flex items-center justify-center text-lg font-normal transition-all duration-300 ${
              activeSection === "section1" ? "bg-secondaryColor text-primaryColor" : "border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor"
            }`}
          >
            Discovery
          </button>
          <div className="h-[1px] w-16 bg-secondaryColor"></div>
          <button
            onClick={() => scrollToSection("section2")}
            className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300"
          >
            Ideation
          </button>
          <div className="h-[1px] w-16 bg-secondaryColor"></div>
          <button
            onClick={() => scrollToSection("section3")}
            className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300"
          >
            Design
          </button>
          <div className="h-[1px] w-16 bg-secondaryColor"></div>
          <button
            onClick={() => scrollToSection("section4")}
            className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300"
          >
            Dev Handoff
          </button>
          <div className="h-[1px] w-16 bg-secondaryColor"></div>
          <button
            onClick={() => scrollToSection("section5")}
            className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor transition-all duration-300"
          >
            Reflection
          </button>
        </div>
      </div>
      {/* ================== */}

      {/* Sections */}
      <div
        id="section1"
        data-section="section1"
        className="h-screen bg-gray-100 flex items-center justify-center text-4xl"
      >
        Discovery Content
      </div>
      <div
        id="section2"
        data-section="section2"
        className="h-screen bg-gray-200 flex items-center justify-center text-4xl"
      >
        Ideation Content
      </div>
      <div
        id="section3"
        data-section="section3"
        className="h-screen bg-gray-300 flex items-center justify-center text-4xl"
      >
        Design Content
      </div>
      <div
        id="section4"
        data-section="section4"
        className="h-screen bg-gray-400 flex items-center justify-center text-4xl"
      >
        Dev Handoff Content
      </div>
      <div
        id="section5"
        data-section="section5"
        className="h-screen bg-gray-500 flex items-center justify-center text-4xl"
      >
        Reflection Content
      </div>
    </div>
  );
};

export default BoiRedesignProject;

import React, { useEffect, useState, useRef } from "react";
import ProjectHeader from "../../components/UiSideProject/projectHeader";
import Marquee from "react-fast-marquee";
import { motion, useAnimation } from "framer-motion";

// Importing images
import TopImage from "../../assets/images/boi1.jpg";
import BOILogo from "../../assets/logos/BOI Logo 2.png";
import ProfileM from "../../assets/images/project/boi/profile.png";
import SplashScreenM from "../../assets/images/project/boi/splashscreen.png";
import HomePageM from "../../assets/images/project/boi/homepage1.png";
import CardsM from "../../assets/images/project/boi/cards1.png";
import ProjectNavigation from "../../components/UiSideProject/ProjectNavigation";
import ColorTheoryImage from "../../assets/images/project/boi/color-theory.svg"
import CompetetiveAnalysis from "../../assets/images/project/boi/Competetive-Analysis.svg"
import UserReviewImg from "../../assets/images/project/boi/user-review.svg"
import UP1 from "../../assets/images/project/boi/user-persona-1.svg";
import UP2 from "../../assets/images/project/boi/user-persona-2.svg";

// Wireframe Images
import W1 from "../../assets/images/project/boi/wireframes/lf1.png"
import W2 from "../../assets/images/project/boi/wireframes/lf2.png"
import W3 from "../../assets/images/project/boi/wireframes/lf3.png"

// Design System Images
import DesignSystem1 from "../../assets/images/project/boi/design-system1.svg"
import DS1 from "../../assets/images/project/boi/ds1.svg"
import DS2 from "../../assets/images/project/boi/ds2.svg"
import DS3 from "../../assets/images/project/boi/ds3.svg"

// Importing Icons
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const BoiRedesignProject = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = React.useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Handle sticky navigation visibility
  useEffect(() => {
    // window.scrollTo(0, 0);
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
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    const sectionsCheck = document.querySelectorAll("[data-section]");

    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100); // Wait for DOM updates
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currentSection, setCurrentSection] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3); // 3 sections
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
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
          <div className="project-problem w-1/2">
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
          <div className="project-problem w-1/2 pl-24">
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
      <section
        id="section1"
        data-section="section1"
        className="h-full flex justify-center text-secondaryColor bg-primaryColor mx-72 mb-12"
      >
        <div className="discovery-section mt-20">
          <h1 className="title text-5xl font-medium flex justify-center mb-24">
            Discovery
          </h1>

          {/* Product Research */}
          <div className="product-research">
            <h1 className="text-xl font-medium uppercase mb-3">
              Product Research
            </h1>
            <h3 className="text-lg">
              In my research for the Bank of India App redesign, I
              conducted a <span className="font-bold">heuristic evaluation</span> alongside feedback from family
              members and friends who use the app regularly. Their insights
              revealed key <span className="font-bold">usability challenges</span>, such as difficulties in
              locating cards, inconsistent navigation for payment services, and
              a crowded interface due to unnecessary elements. Additionally, the
              layout of recent transactions and the inefficient use of space in
              the card display were highlighted. These findings have guided the
              redesign process to create a more intuitive, streamlined, and
              <span className="font-bold"> user-friendly experience</span>.
            </h3>
          </div>
          {/* ---------------- */}

          {/* Heuristic Evaluation */}
          <div className="heuristic-evaluation flex mt-32 gap-40 items-center">
            <div className="w-3/5">
              <h1 className="uppercase text-xl font-medium mb-3">
                Heuristic Evaluation
              </h1>
              <div className="description text-lg">
                <h3 className="text-lg">
                  While conducting a heuristic evaluation of the Bank of India
                  Mobile App, I gathered <span className="font-bold">feeback</span> from my family members and
                  friends who use the app regularly. Through this process, I
                  identified areas for improving usability and enhancing the
                  overall <span className="font-bold">user experience</span>.
                </h3>
                <h3 className="text-lg mt-6">
                  Few insights into heuristics are:
                </h3>
                <ul className="list-disc mt-4 text-base space-y-2 pl-10">
                  <li>
                    <span className="font-bold">Users find it challenging</span>{" "}
                    to locate their cards, unsure whether to swipe or tap,
                    leading to <span className="font-bold">confusion</span>.
                  </li>
                  <li>
                    <span className="font-bold">Payment services</span> are hard
                    to find, especially during{" "}
                    <span className="font-bold">urgent</span> tasks, making
                    navigation time-consuming.
                  </li>
                  <li>
                    <span className="font-bold">Recent transactions</span> are
                    displayed prominently, consuming valuable space and making
                    the layout feel <span className="font-bold">congested</span>
                    .
                  </li>
                  <li>
                    The <span className="font-bold">draggable container</span>{" "}
                    for services adds an extra step, requiring users to scroll
                    for quick access.
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-image w-2/5">
              <img src={TopImage} alt="" />
            </div>
          </div>
          {/* -------------------- */}

          {/* Competitive Analysis */}
          <div className="competitive-analysis flex mt-32 gap-32 items-center">
            <div className="h-image w-2/5">
              <img src={CompetetiveAnalysis} alt="" />
            </div>
            <div className="w-3/5">
              <h1 className="uppercase text-xl font-medium mb-3">Competitive Analysis</h1>
              <div className="comp-desc text-lg">
                <h3 className="">I conducted a competitive analysis of the <span className="font-bold">Bank of India (BOI) Mobile App</span> alongside <span className="font-bold">HDFC Bank</span> and <span className="font-bold">SBI YONO</span>. While BOI provides essential banking features, it struggles with outdated design, inconsistent navigation, and a crowded interface. HDFC stands out with its clean, modern look and advanced features, while SBI YONO offers a wide range of services but faces <span className="font-bold">usability challenges</span> .</h3>
                <h3 className="mt-3">Through this analysis, I identified areas for improvement, such as modernizing the <span className="font-bold">user interface</span>, simplifying navigation for key features like cards and payments, and improving the layout of the cards screen for better usability. These changes aim to create a more intuitive and user-friendly experience.</h3>
              </div>
            </div>
          </div>
          {/* -------------------- */}

          {/* Color Theory */}
          <div className="competitive-analysis flex mt-32 gap-32 items-center">
            <div className="w-1/2">
              <h1 className="uppercase text-xl font-medium mb-3">Color Theory</h1>
              <div className="comp-desc text-lg">
                <h3 className="">I conducted research on the color theory of blue to understand its <span className="font-bold">psychological impact </span> on users' experiences. Blue is often associated with <span className="font-bold">trust, reliability and professionalism</span>, making it an excellent choice for fostering a sense of security and clarity in design. This color creates a calming and focused environment, aligning perfectly with the goals of enhancing user confidence and crafting a <span className="font-bold">visually engaging</span> and intuitive experience.</h3>
              </div>
            </div>
            <div className="h-image w-1/2">
              <img src={ColorTheoryImage} alt="" />
            </div>
          </div>
          {/* -------------------- */}

          {/* User Review */}
          <div className="user-review mt-20">
            <h1 className="text-xl font-medium uppercase mb-3">User Review</h1>
            <h3 className="text-lg">I reviewed Play Store feedback for the Bank of India Mobile App to understand user challenges with the UI and UX. Users consistently mentioned issues like a confusing interface, difficult navigation, and features that are hard to find such as downloading passbooks. Many compared the current app unfavorably to the older version, calling for a simpler, user-friendly design tailored to everyday users. These insights are helping shape my redesign to address these core concerns effectively.</h3>
            <div className="user-review mt-8">
              <img src={UserReviewImg} alt="Users review from play-store" />
            </div>
          </div>
          {/* ------------------------------ */}
        </div>
      </section>
      <section
        id="section2"
        data-section="section2"
        className="h-full bg-primaryColor text-secondaryColor flex items-center justify-center mx-72"
      >
        <div className="ideation-section mt-20">
          {/* Header */}
          <h1 className="title text-5xl font-medium flex justify-center mb-24">Ideation</h1>
          {/* ------------------------------ */}

          {/* User Stories */}
          <div className="user-stories">
            <h1 className="text-xl font-medium uppercase mb-3">User Stories</h1>
            <h3 className="text-lg">I reviewed Play Store feedback for the Bank of India Mobile App to understand user challenges with the UI and UX. Users consistently mentioned issues like a confusing interface, difficult navigation, and features that are hard to find such as downloading passbooks. Many compared the current app unfavorably to the older version, calling for a simpler, user-friendly design tailored to everyday users. These insights are helping shape my redesign to address these core concerns effectively.</h3>

            <div className="user-stories-points">
              <div className="mt-8">
                <h2 className="text-lg mb-4">After reviewing the user feedback from my previous research, I have identified the following points:</h2>
                <ol className="list-decimal pl-10 space-y-4 text-base">
                  <li><span className="font-bold">As a user</span>, I want payment services and cards to be easy to locate so that I can navigate the app quickly and without confusion.</li>
                  <li><span className="font-bold">As a user</span>, I want unnecessary options like recent transactions and draggable containers to be removed or relocated so that the homepage feels clean and organized.</li>
                  <li><span className="font-bold">As a user</span>, I want all services to be consolidated in one place so that I don’t have to search across the app for essential features.</li>
                  <li><span className="font-bold">As a user</span>, I want the app layout and card design to be visually balanced and intuitive so that it feels appealing and easy to use.</li>
                  <li><span className="font-bold">As a new user</span>, I want the app interface to be simple and accessible, catering to both tech-savvy and non-tech-savvy users, so that it’s inclusive for all.</li>
                </ol>
              </div>
            </div>
          </div>
          {/* ------------------------------ */}

          {/* User Personas */}
          <div className="user-persona mt-20">
            <h1 className="text-xl font-medium uppercase mb-3">User Persona</h1>
            <h3 className="text-lg">As part of this redesign project, I have identified two key user personas to better understand the diverse needs and expectations of users. These personas help highlight specific frustrations, goals, and motivations, guiding the redesign to meet their unique requirements.</h3>

            <div className="user-persona-images flex gap-8 mt-8">
              <img src={UP1} alt="" className="w-1/2" />
              <img src={UP2} alt="" className="w-1/2" />
            </div>
          </div>
          {/* ------------------------------ */}

          {/* Wireframes */}
          <div className="wireframes mt-20">
            <h1 className="text-xl font-medium uppercase mb-3">Wireframe</h1>
            <h3 className="text-lg">I created the wireframes for this project, experimenting with layouts to improve usability. Key changes include more streamlined, visually intuitive experience and focusing on better navigation and user interaction.</h3>

            <div className="user-persona-images flex justify-between bg-[#E68040] mt-8 p-8">
              <img src={W1} alt="" className="" />
              <img src={W2} alt="" className="" />
              <img src={W3} alt="" className="" />
            </div>
          </div>
          {/* ------------------------------ */}
        </div>
      </section>
      <div
        id="section3"
        data-section="section3"
        className="h-full bg-primaryColor text-secondaryColor flex items-center justify-center mx-72"
      >
        <div className="design-section mt-40">
          {/* Header */}
          <h1 className="title text-5xl font-medium flex justify-center mb-24">Design</h1>
          {/* ----------------------------- */}

          {/* Design Systems */}
          <div className="design-system">
            <h1 className="text-xl font-medium uppercase mb-3">Design System</h1>
            <h3 className="text-lg">I created a cohesive design system for the Bank of India Mobile App, including typography, a brand-aligned color palette, intuitive icons, and custom buttons for card pages, profiles, and services. The system also features sliders, dot sliders, a tailored iPhone status bar, and visually appealing ATM, credit, and debit card designs, ensuring consistency and enhancing the user experience.</h3>

            <div className="design-systems-content mt-16 h-full">
              <img src={DesignSystem1} alt="Design System of BOI including Typography, Icons, Colors and Components" className="" />
            </div>
          </div>
          {/* ----------------------------- */}

          {/* Hi-Fi Screens */}
          <div className="hi-fi-screens mt-24">
            <h1 className="text-xl font-medium uppercase mb-3">Hi-Fi Screens</h1>
            <h3 className="text-lg">For the Hi-Fi Screens, I focused on redesigning key interfaces to enhance user engagement and usability. The Home Page was reimagined with a cleaner layout for better navigation and quick access to essential services. The Cards Page now features an intuitive design that highlights card details and actions in a visually appealing way. The Profile Page was simplified for easy access to personal information and account settings. Lastly, the Splash Screen was updated with a modern, welcoming look to create a strong first impression for users.</h3>

            <div className="before-redesign mt-16 flex gap-40">
              <div className="before-content">
                <h1 className="text-xl font-medium uppercase mb-3">Before</h1>
                <h3 className="text-lg">The Bank of India mobile app faced several usability challenges that hindered a seamless <span className="font-bold">user experience</span>. One major issue was the difficulty users faced in accessing their cards. New users often struggled to understand whether they needed to swipe or tap, while even repeat users found this <span className="font-bold">interaction confusing</span>. Payment services, an essential feature, were buried within the app, making them hard to locate, especially for users in a hurry. Additionally, the <span className="font-bold">interface was cluttered</span> with unnecessary buttons that distracted from key functionalities and made navigation cumbersome. <br /><br />The app's layout further contributed to the problem. Recent transactions occupied a significant portion of the screen, creating a congested and overwhelming <span className="font-bold">visual experience</span>. Services were not intuitively grouped, forcing users to search across the app for their desired features—a frustrating experience, particularly for first-time users. The card display was misaligned, with cards unevenly positioned to the left, lacking the <span className="font-bold">visual balance</span> expected in modern apps. Furthermore, the inclusion of a draggable container for services added to the complexity, while some options were misplaced in the services section instead of being appropriately housed in a settings menu.</h3>

                <div className="before-image mt-12">
                  <h2 className="bg-secondaryColor text-primaryColor text-center py-4">How the app looked earlier?</h2>
                  <img src={DS1} alt="" className="" />
                </div>
              </div>
              <div className="after-content">
                <h1 className="text-xl font-medium uppercase mb-3">After</h1>
                <h3 className="text-lg">The redesign aimed to address these pain points and transform the app into a more <span className="font-bold">user-friendly</span> platform. The card access issue was resolved by introducing clear, interactive cues, ensuring both new and repeat users could easily access their cards. Payment services were reorganized and prominently displayed, reducing the time and effort required to locate them. Unnecessary buttons were either removed or <span className="font-bold">strategically repositioned</span>, creating a cleaner, more focused interface. <br /><br />The overall layout was also re-imagined to reduce clutter. Recent transactions were moved to a separate section, freeing up valuable screen space and providing a more organized appearance. Services were grouped under clearly labeled categories, making them more <span className="font-bold">accessible and intuitive</span> for all users. The card layout was redesigned with balanced alignment, offering an aesthetically pleasing and functional display. Draggable containers were eliminated, and services were integrated directly into the navigation bar for better accessibility. Options that were previously misplaced were relocated to a dedicated settings menu, further streamlining the <span className="font-bold">user experience</span>. <br /><br />This redesign not only resolved existing usability issues but also provided a modern, intuitive, and visually appealing experience tailored to the needs of all users.</h3>

                <div className="after-image mt-12">
                  <h2 className="bg-secondaryColor text-primaryColor text-center py-4">What changes I have made to the app design?</h2>
                  <img src={DS3} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------- */}
        </div>
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

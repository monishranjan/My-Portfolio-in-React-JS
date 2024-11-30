import React from 'react';

// Importing Icons
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { GiTireIronCross } from "react-icons/gi";
import Marquee from './Marqeue';

const CustomFooter = () => {
  return (
    <section className="bg-secondaryColor text-primaryColor flex flex-col items-center pb-8 mt-24 md:pb-16 pt-6">
      <Marquee />
      {/* Availability Button */}
      <div className="flex gap-2 items-center bg-primaryColor rounded-full py-2 px-4 mt-20 md:mt-32">
        <GoDotFill className="text-greenAccentColor text-lg" />
        <h1 className="text-secondaryColor text-xs md:text-sm lg:text-base font-medium">
          Available for new work
        </h1>
      </div>

      {/* Main Heading */}
      <div className="flex flex-col md:flex-row items-center mt-16 md:mt-24 lg:mt-32 mb-16 md:mb-32 lg:mb-40 gap-4 md:gap-2 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl lg:text-8xl">
          Let's {window.innerWidth < 768 ? "collaborate" : "work together"}
        </h2>
        <IoArrowForwardOutline className="text-6xl md:text-7xl lg:text-8xl hidden md:block" />
      </div>

      {/* Social Links */}
      <div className="socials grid grid-cols-2 gap-8 md:flex md:gap-16 lg:gap-24 text-center md:text-left">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/monishranjan/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group justify-center md:justify-start"
        >
          <GiTireIronCross className="h-4 group-hover:animate-spinSlow transition-transform" />
          <h4 className="hover:text-purple-500 transition-colors">
            LinkedIn
          </h4>
        </a>

        {/* Behance */}
        <a
          href="https://www.behance.net/monish9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group justify-center md:justify-start"
        >
          <GiTireIronCross className="h-4 group-hover:animate-spinSlow transition-transform" />
          <h4 className="hover:text-purple-500 transition-colors">
            Behance
          </h4>
        </a>

        {/* Dribbble */}
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group justify-center md:justify-start"
        >
          <GiTireIronCross className="h-4 group-hover:animate-spinSlow transition-transform" />
          <h4 className="hover:text-purple-500 transition-colors">
            Dribbble
          </h4>
        </a>

        {/* Download CV */}
        <a
          href="/files/ATS CV Monish.pdf"
          download
          className="flex items-center gap-2 group justify-center md:justify-start"
        >
          <GiTireIronCross className="h-4 group-hover:animate-spinSlow transition-transform" />
          <h4 className="hover:text-greenAccentColor transition-colors">
            Download CV
          </h4>
        </a>
      </div>
    </section>
  );
};

export default CustomFooter;

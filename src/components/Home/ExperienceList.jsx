import React, { useEffect, useRef, useState } from "react";

const ExperienceList = () => {
  const containerRef = useRef(null);
  const companiesRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    // Set the line height to match the height of the companies section
    const updateLineHeight = () => {
      const companiesSection = companiesRef.current;
      if (companiesSection) {
        setLineHeight(companiesSection.offsetHeight);
      }
    };

    window.addEventListener("resize", updateLineHeight);

    // Initial setup
    updateLineHeight();

    return () => {
      window.removeEventListener("resize", updateLineHeight);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-start relative mt-16 text-secondaryColor"
    >
      {/* Section Header */}
      <div className="section-header w-full md:w-2/5 mb-8 md:mb-0">
        <h1 className="font-semibold text-3xl md:text-6xl mb-4">
          The Journey:{" "}
          <span className="text-xl md:text-5xl font-normal text-[#383838]">
            From Beginnings to Breakthroughs
          </span>
        </h1>
      </div>

      {/* Vertical Line */}
      <div
        className="hidden md:block bg-secondaryColor"
        style={{
          width: "1px",
          height: `${lineHeight}px`,
        }}
      ></div>

      {/* Companies Section */}
      <div ref={companiesRef} className="w-full md:w-2/5 md:ml-8">
        {/* Experience 1 */}
        <div className="mb-12">
          <div className="flex items-start mb-4">
            <h1 className="text-2xl md:text-3xl font-medium">Sukan Foods</h1>
            <h2 className="text-lg font-normal ml-4">/01</h2>
          </div>
          <h2 className="designation text-base md:text-lg font-light">
            UI/UX & Graphic Designer
          </h2>
          <div className="work-details mt-4">
            <li className="text-sm md:text-lg font-normal">
              Working on the UI Design for the client of Sukan.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Designed the logos for two clients of Sukan.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Complete re-branding of Sukan (Including - Banners, Profile
              Pictures, Printing Assets, etc.).
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-12"></div>
        </div>

        {/* Experience 2 */}
        <div className="mb-12">
          <div className="flex items-start mb-4">
            <h1 className="text-2xl md:text-3xl font-medium">
              TechSphere Inc.
            </h1>
            <h2 className="text-lg font-normal ml-4">/02</h2>
          </div>
          <h2 className="designation text-base md:text-lg font-light">
            Frontend Developer
          </h2>
          <div className="work-details mt-4">
            <li className="text-sm md:text-lg font-normal">
              Developed a modern web app using ReactJS.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Optimized the performance of existing features.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Collaborated with a team of designers to enhance user experience.
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-12"></div>
        </div>

        {/* Experience 3 */}
        <div className="mb-12">
          <div className="flex items-start mb-4">
            <h1 className="text-2xl md:text-3xl font-medium">
              TechSphere Inc.
            </h1>
            <h2 className="text-lg font-normal ml-4">/03</h2>
          </div>
          <h2 className="designation text-base md:text-lg font-light">
            Frontend Developer
          </h2>
          <div className="work-details mt-4">
            <li className="text-sm md:text-lg font-normal">
              Developed a modern web app using ReactJS.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Optimized the performance of existing features.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Collaborated with a team of designers to enhance user experience.
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-12"></div>
        </div>

        {/* Experience 4 */}
        <div>
          <div className="flex items-start mb-4">
            <h1 className="text-2xl md:text-3xl font-medium">
              Creative Studio
            </h1>
            <h2 className="text-lg font-normal ml-4">/04</h2>
          </div>
          <h2 className="designation text-base md:text-lg font-light">
            Graphic Designer
          </h2>
          <div className="work-details mt-4">
            <li className="text-sm md:text-lg font-normal">
              Created digital illustrations for branding projects.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Managed multiple design projects under tight deadlines.
            </li>
            <li className="text-sm md:text-lg font-normal">
              Enhanced the overall design strategy for clients.
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-12"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;

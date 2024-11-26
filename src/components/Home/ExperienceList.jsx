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
    <div ref={containerRef} className="flex items-start relative mt-16 text-secondaryColor">
      {/* Section Header */}
      <div className="section-header w-2/5">
        <h1 className="font-semibold text-6xl mb-4">
          The Journey :{" "}
          <span className="text-5xl font-normal text-[#383838]">
            From Beginnings to Breakthroughs
          </span>
        </h1>
      </div>

      {/* Vertical Line */}
      <div
        className="bg-secondaryColor"
        style={{
          width: "1px",
          height: `${lineHeight}px`,
        }}
      ></div>

      {/* Companies Section */}
      <div ref={companiesRef} className="w-2/5 ml-8">
        {/* Experience 1 */}
          <div className="h-[1px] w-full bg-secondaryColor mb-24"></div>
        <div className="mb-24">
          <div className="title-designation">
            <div className="flex items-start">
              <h1 className="text-3xl font-medium">Sukan Foods</h1>
              <h2 className="text-lg font-normal ml-4">/01</h2>
            </div>
            <h2 className="designation text-lg font-light">
              UI/UX & Graphic Designer
            </h2>
          </div>
          <div className="work-details mt-6">
            <li className="text-lg font-normal">
              Working on the UI Design for the client of Sukan.
            </li>
            <li className="text-lg font-normal">
              Designed the logos for two clients of Sukan.
            </li>
            <li className="text-lg font-normal">
              Complete re-branding of Sukan (Including - Banners, Profile
              Pictures, Printing Assets, etc.).
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-24"></div>
        </div>

        {/* Experience 2 */}
        <div className="mb-24">
          <div className="title-designation">
            <div className="flex items-start">
              <h1 className="text-3xl font-medium">TechSphere Inc.</h1>
              <h2 className="text-lg font-normal ml-4">/02</h2>
            </div>
            <h2 className="designation text-lg font-light">
              Frontend Developer
            </h2>
          </div>
          <div className="work-details mt-6">
            <li className="text-lg font-normal">
              Developed a modern web app using ReactJS.
            </li>
            <li className="text-lg font-normal">
              Optimized the performance of existing features.
            </li>
            <li className="text-lg font-normal">
              Collaborated with a team of designers to enhance user experience.
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-24"></div>
        </div>

        {/* Experience 3 */}
        <div className="mb-24">
          <div className="title-designation">
            <div className="flex items-start">
              <h1 className="text-3xl font-medium">TechSphere Inc.</h1>
              <h2 className="text-lg font-normal ml-4">/03</h2>
            </div>
            <h2 className="designation text-lg font-light">
              Frontend Developer
            </h2>
          </div>
          <div className="work-details mt-6">
            <li className="text-lg font-normal">
              Developed a modern web app using ReactJS.
            </li>
            <li className="text-lg font-normal">
              Optimized the performance of existing features.
            </li>
            <li className="text-lg font-normal">
              Collaborated with a team of designers to enhance user experience.
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-24"></div>
        </div>

        {/* Experience 4 */}
        <div className="">
          <div className="title-designation">
            <div className="flex items-start">
              <h1 className="text-3xl font-medium">Creative Studio</h1>
              <h2 className="text-lg font-normal ml-4">/04</h2>
            </div>
            <h2 className="designation text-lg font-light">
              Graphic Designer
            </h2>
          </div>
          <div className="work-details mt-6">
            <li className="text-lg font-normal">
              Created digital illustrations for branding projects.
            </li>
            <li className="text-lg font-normal">
              Managed multiple design projects under tight deadlines.
            </li>
            <li className="text-lg font-normal">
              Enhanced the overall design strategy for clients.
            </li>
          </div>
          <div className="border-b-[1px] border-secondaryColor mt-24"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;

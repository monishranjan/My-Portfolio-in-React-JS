import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import workThumbnail1 from "../../assets/images/1.jpg";
import workThumbnail2 from "../../assets/images/2.jpg";
import workThumbnail3 from "../../assets/images/3.jpg";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoBanOutline } from "react-icons/io5";

const WorkItem = () => {
  const navigate = useNavigate();

  const workItems = [
    {
      title: "Bank of India App - Redesign",
      description:
        "Redesigned key pages of the Bank of India mobile app, including the home page, profile page, and cards page, to enhance usability and accessibility. Focused on addressing user challenges and aligning with BOI’s motto, 'Relationship beyond banking.' The redesign emphasizes research-driven improvements for a seamless user experience.",
      tags: ["UI Design", "Web Design", "Case Study"],
      live: false,
      thumbnail: workThumbnail1,
      link: "/projects/bank-of-india-redesign", // Link for the project page
    },
    {
      title: "UX Design Project",
      description:
        "A UX design for a mobile application with a user-centric approach.",
      tags: ["UX Design", "App Design"],
      live: false,
      thumbnail: workThumbnail2,
      link: "/projects/ux-design-project", // Link for the project page
    },
    {
      title: "Brand Identity Design",
      description:
        "A comprehensive brand identity including logos, typography, and color schemes.",
      tags: ["Branding", "Logo Design"],
      live: true,
      thumbnail: workThumbnail3,
      link: "/projects/brand-identity-design", // Link for the project page
    },
  ];

  const handleNavigation = (link) => {
    navigate(link); // Navigate to the specified page
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {workItems.map((item, index) => (
        <div
          className="relative group overflow-hidden cursor-pointer rounded-md shadow-lg"
          key={index}
          onClick={() => handleNavigation(item.link)} // Navigate on click
        >
          {/* Thumbnail */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-all duration-300"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex text-white p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col justify-between w-full">
              {/* Top Button */}
              <div className="upper-content flex justify-end transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {item.live ? (
                  <button
                    className="border-[1px] border-primaryColor hover:border-[#60ff60] hover:bg-[#60ff60] hover:text-secondaryColor text-2xl p-4 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents triggering parent click
                      handleNavigation(item.link);
                    }}
                  >
                    <HiArrowUpRight />
                  </button>
                ) : (
                  <button
                    className="border-[1px] border-primaryColor hover:border-[#ff6767] hover:bg-[#ff6767] hover:text-secondaryColor text-2xl p-4 rounded-full"
                    onClick={(e) => e.stopPropagation()} // Prevent navigation for unavailable projects
                  >
                    <IoBanOutline />
                  </button>
                )}
              </div>

              {/* Bottom Content */}
              <div className="lower-content transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <div className="mt-2 sm:mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs sm:text-sm font-normal text-secondaryColor bg-tertiaryColor px-4 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm sm:text-base font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkItem;

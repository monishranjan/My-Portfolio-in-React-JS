import React from "react";
import workThumbnail1 from "../../assets/images/1.jpg";
import workThumbnail2 from "../../assets/images/2.jpg";
import workThumbnail3 from "../../assets/images/3.jpg";
import workThumbnail4 from "../../assets/images/4.jpg";

import { HiArrowUpRight } from "react-icons/hi2";
import { IoBanOutline } from "react-icons/io5";

const WorkItem = () => {
  const workItems = [
    {
      title: "UI Design Project",
      description:
        "A simple UI design project that focuses on minimalistic design principles.",
      tags: ["UI Design", "Web Design"],
      live: true,
      thumbnail: workThumbnail1, // Placeholder thumbnail
    },
    {
      title: "UX Design Project",
      description:
        "A UX design for a mobile application with a user-centric approach.",
      tags: ["UX Design", "App Design"],
      live: false,
      thumbnail: workThumbnail2, // Placeholder thumbnail
    },
    {
      title: "Brand Identity Design",
      description:
        "A comprehensive brand identity including logos, typography, and color schemes.",
      tags: ["Branding", "Logo Design"],
      live: true,
      thumbnail: workThumbnail3, // Placeholder thumbnail
    },
    // Add more items here as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      {workItems.map((item, index) => (
        <div
          className="relative group overflow-hidden cursor-pointer rounded-md"
          key={index}
        >
          {/* Thumbnail */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-[540px] object-cover transition-all duration-300"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex text-white p-8">
            <div className="flex flex-col justify-between w-full">
              <div className="upper-content flex justify-end transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {item.live ? (
                  <button className="border-[1px] border-primaryColor hover:border-[#60ff60] hover:bg-[#60ff60] hover:text-secondaryColor text-2xl p-4 rounded-full text-white">
                    <HiArrowUpRight/>
                  </button>
                ) : (
                  <button className="border-[1px] border-primaryColor hover:border-[#ff6767] hover:bg-[#ff6767] hover:text-secondaryColor text-2xl p-4 rounded-full text-white">
                    <IoBanOutline/>
                  </button>
                )}
              </div>

              <div className="lower-content transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-3xl font-medium tracking-tight">{item.title}</h3>
                <div className="mt-4 flex gap-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm font-normal text-secondaryColor bg-tertiaryColor px-8 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-base font-normal">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkItem;

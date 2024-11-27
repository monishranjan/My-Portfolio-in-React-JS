import React from "react";

const UnderDevelopment = () => {
  return (
    <div className="fixed left-4 bottom-4 md:left-8 md:bottom-8 z-50">
      <div className="bg-yellow-500 text-black px-4 py-2 md:px-8 md:py-4 rounded-md shadow-lg flex items-center gap-2 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-sm md:text-base font-semibold">
          This site is under development!
        </span>
      </div>
    </div>
  );
};

export default UnderDevelopment;

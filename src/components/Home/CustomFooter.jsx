import React from 'react'

// Importing Images
import D2 from "../../assets/logos/D2.svg";
import D3 from "../../assets/logos/D3.svg";
import D4 from "../../assets/logos/D4.svg";
import D5 from "../../assets/logos/D5.svg";
import D6 from "../../assets/logos/D6.svg";

// Importing Icons
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaBehance } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";

const CustomFooter = () => {
  return (
    <section className="bg-secondaryColor text-primaryColor flex flex-col items-center pt-40 pb-10">
      <div className="the-button flex gap-2 items-center bg-primaryColor rounded-full py-3 px-4">
        <GoDotFill className='text-greenAccentColor' />
        <h1 className="text-secondaryColor font-medium">Available for new work</h1>
      </div>

        <div className="flex items-end mt-40 mb-48 gap-2">
            <h2 className="text-8xl">Let's work together</h2>
            <IoArrowForwardOutline className='text-8xl'/>
        </div>

        <div className="socials flex gap-24">
          {/* LinkedIn */}
          <div className="flex items-center gap-2">
            <GiTireIronCross className='h-[14px]' />
            <h4 className="">LinkedIn</h4>
          </div>
          {/* Behance */}
          <div className="flex items-center gap-2">
            <GiTireIronCross className='h-[14px]' />
            <h4 className="">Behance</h4>
          </div>
          {/* Dribble */}
          <div className="flex items-center gap-2">
            <GiTireIronCross className='h-[14px]' />
            <h4 className="">Dribble</h4>
          </div>
          {/* Download CV */}
          <div className="flex items-center gap-2">
            <GiTireIronCross className='h-[14px]' />
            <h4 className="">Download CV</h4>
          </div>
        </div>
    </section>
  )
}

export default CustomFooter
import React from 'react'

const ProjectNavigation = () => {
  return (
    <div className='flex justify-center items-center my-32'>
        <button onClick={() => scrollToSection('section1')} className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-white transition-all duration-300">Discovery</button>
        <div className="h-[1px] w-16 bg-secondaryColor"></div>
        <button onClick={() => scrollToSection('section1')} className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-white transition-all duration-300">Ideation</button>
        <div className="h-[1px] w-16 bg-secondaryColor"></div>
        <button onClick={() => scrollToSection('section1')} className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-white transition-all duration-300">Design</button>
        <div className="h-[1px] w-16 bg-secondaryColor"></div>
        <button onClick={() => scrollToSection('section1')} className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-white transition-all duration-300">Dev Handoff</button>
        <div className="h-[1px] w-16 bg-secondaryColor"></div>
        <button onClick={() => scrollToSection('section1')} className="px-8 py-2 rounded-full border-[1px] border-secondaryColor flex items-center justify-center text-lg font-normal text-secondaryColor hover:bg-secondaryColor hover:text-white transition-all duration-300">Reflection</button>
    </div>
  )
}

export default ProjectNavigation
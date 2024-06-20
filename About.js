import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import myImg from '../assests/fotor-20240619221057.png'
import { Link } from "react-router-dom";

function About() {

  return (
    <>
    {/* -------------------------------------Mobile devices-------------------------------------/ */}
 <div className='max-w-full mx-0 px-8 block md:hidden pt-28'>
 <div class="relative flex flex-col text-gray-700 bg-[#f4ece6] shadow-xl z-[-1]">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-clip-border">
    <img src={myImg} alt="profile-picture"className='sm:px-28 pt-5 px-16' />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl sm:text-3xl antialiased leading-snug tracking-normal font-bold text-black">
      Rishika <br/> Sharma
    </h4>
    <p className='block justify-center font-bold text-4xl sm:text-5xl text-blue-700 relative bottom-7 sm:bottom-9'>__</p>
      <div className='block space-x-2 py-5'>
      <Link to = "https://drive.google.com/file/d/1ZgKcCIhG3Ta_N-kbmveLJIiFwoD1nQDE/view?usp=sharing"><button className="bg-blue-700 border-2 sm:text-lg border-blue-700 text-white font-semibold px-2 sm:px-5 py-1 rounded-full">Resume</button></Link>
      <Link to ="/contact"><button className="bg-transparent sm:text-lg text-black font-semibold border-2 border-black px-2 sm:px-5 py-1 rounded-full">Hire Me</button></Link>
      </div>
    <p
      class="hidden md:block font-sans text-base antialiased font-medium leading-relaxed  bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      FRONTEND DEVELOPER
    </p>
  </div>
  <div class="flex justify-center p-6 py-2 mb-4 gap-7 shadow-sm bg-white">
    <Link to="https://github.com/Rishikasharma11"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-900">
      <i class="fab fa-github" aria-hidden="true"></i>
    </Link>
    <Link to ="mailto: rishikaosharma@gmail.com"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-900">
      <i class="fas fa-envelope"></i>
    </Link>
    <Link to ="https://www.linkedin.com/in/rishikasharma11/"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-900"><i
        class="fab fa-linkedin" aria-hidden="true">
      </i>
    </Link>
  </div>
</div>
</div>
<div className=' bg-[#e6dace] relative bottom-60 z-[-2] pb-10 pt-80 px-4 block md:hidden'>
  <h1 className='text-6xl font-extrabold'>Hello</h1>
  <h2 className="py-6 text-2xl font-semibold">Here's who I am & what I do</h2>
  <p className="text-lg text-justify tracking-wide leading-relaxed">
  I specialize in frontend development using React, focusing on creating dynamic and visually appealing user interfaces. I am dedicated to continuously learning and mastering new technologies to enhance my skill set. My goal is to continuously learn and improve, ensuring I deliver high-quality work that meets and exceeds client expectations.<br/><br/>
  I'm all about mixing creativity and technology. I embrace challenges with a positive spirit and am always eager to learn.
  </p>
</div>

<div className="mx-0 max-w-full px-3 block md:hidden z-[-2]">
  
  <hr className='bg-black w-full'/>
  <p className='text-sm pb-2 text-center text-black'>
  Designed & Developed by Rishika Sharma:)
  </p>
</div>

{/* -------------------------------------------------------------------MEDIUM AND LARGE SCREN---------------------------------- */}
<div className="w-full mx-0 md:block hidden md:pt-28 pt-12">
  <div className='bg-[#e6dace] float-left w-[45%] h-screen pl-10 lg:pl-32 pt-24 xl:pl-52 2xl:pl-80'>
  <div class="relative flex flex-col text-gray-700 bg-[#f4ece6] shadow-xl left-8 lg:left-12">
  <div class="relative mt-4 overflow-hidden text-gray-700 bg-clip-border">
    <img src={myImg} alt="profile-picture"className='md:px-16 lg:px-12 pt-10' />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl lg:text-3xl antialiased leading-snug tracking-normal font-bold text-black">
      Rishika <br/> Sharma
    </h4>
      <p className='justify-center font-bold text-7xl text-blue-700 relative bottom-12'>__</p>
    <p
      class="hidden md:block lg:text-2xl text-xl relative bottom-2 antialiased font-medium leading-relaxed  bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 pb-6">
      FRONTEND DEVELOPER
    </p>
  </div>
  <div class="flex justify-center p-6 py-2 mb-4 gap-7 shadow-sm bg-white">
  <Link to="https://github.com/Rishikasharma11"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-900">
      <i class="fab fa-github" aria-hidden="true"></i>
    </Link>
    <Link to ="mailto: rishikaosharma@gmail.com"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-900">
      <i class="fas fa-envelope"></i>
    </Link>
    <Link to ="https://www.linkedin.com/in/rishikasharma11/"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 to-gray-900"><i
        class="fab fa-linkedin" aria-hidden="true">
      </i>
    </Link>
  </div>
</div>
  </div>

  <div className='bg-white h-screen px-10 pt-3 pr-28 lg:pt-16 lg:pr-32 xl:pr-52 2xl:pr-80'>
  <div className='relative bottom-60 pb-10 md:pt-[340px] lg:pt-[310px] xl:pt-[] px-7 left-10 lg:left-20 lg:px-10 overflow-hidden'>
  <h1 className='text-6xl font-extrabold'>Hello</h1>
  <h2 className="py-5 text-xl lg:text-2xl font-semibold">Here's who I am & what I do</h2>

  <div className='md:block space-x-8 pb-3'>
      <Link to = "https://drive.google.com/file/d/1ZgKcCIhG3Ta_N-kbmveLJIiFwoD1nQDE/view?usp=sharing" target='blank'><button className="bg-blue-700 border-2 text-xl border-blue-700 text-white font-semibold px-5 py-1 rounded-full">Resume</button></Link>
      <Link to = "/contact"><button className="bg-transparent text-xl text-black font-semibold border-2 border-black px-5 py-1 rounded-full">Hire Me</button></Link>
  </div>

  <div className=''>
  <p className="text-sm lg:text-lg text-justify tracking-wide leading-relaxed">
  I specialize in frontend development using React, focusing on creating dynamic and visually appealing user interfaces. I am dedicated to continuously learning and mastering new technologies to enhance my skill set. My goal is to continuously learn and improve, ensuring I deliver high-quality work that meets and exceeds client expectations.<br/><br/></p>
  <p className="text-sm lg:text-lg text-justify tracking-wide leading-relaxed">
  I'm all about mixing creativity and technology. I embrace challenges with a positive spirit and am always eager to learn.
  </p>
  </div>

</div>
  </div>
</div>

    </>
  )
}

export default About;

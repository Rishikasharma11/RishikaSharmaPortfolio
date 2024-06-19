import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import myImg from '../assests/fotor-20240619221057.png'

function Home() {

  return (
    <>
    {/* <div className='bg-white mx-0 max-w-full py-8 px-4 md:shadow-xl'>
      <div className="flex space-x-2">
      <p className='w-4 h-4 mt-2 bg-blue-700'></p>
      <h1 class="font-bold text-black text-2xl">Rishika Sharma</h1>
      </div>
      <h1 className='font-thin text-lg text-gray-700'>FRONTEND DEVELOPER</h1> 
    </div> */}
    
 <div className='max-w-full mx-0 px-8 block md:hidden pt-16'>
 <div class="relative flex flex-col text-gray-700 bg-[#f4ece6] shadow-xl">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-clip-border">
    <img src={myImg} alt="profile-picture"className='sm:px-28 pt-5 px-20' />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl sm:text-3xl antialiased leading-snug tracking-normal font-bold text-black">
      Rishika <br/> Sharma
    </h4>
    <p className='block justify-center font-bold text-4xl sm:text-5xl text-blue-700 relative bottom-7 sm:bottom-9'>__</p>
      <div className='block space-x-2 py-5'>
      <button className="bg-blue-700 border-2 sm:text-lg border-blue-700 text-white font-semibold px-5 py-1 rounded-full">Resume</button>
      <button className="bg-transparent sm:text-lg text-black font-semibold border-2 border-black px-5 py-1 rounded-full">Projects</button>
      </div>
    <p
      class="hidden md:block font-sans text-base antialiased font-medium leading-relaxed  bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      FRONTEND DEVELOPER
    </p>
  </div>
  <div class="flex justify-center p-6 py-2 mb-4 gap-7 shadow-sm bg-white">
    <a href="#facebook"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
      <i class="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a href="#twitter"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
      <i
        class="fab fa-twitter" aria-hidden="true">
      </i>
    </a>
    <a href="#instagram"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
        class="fab fa-instagram" aria-hidden="true">
      </i>
    </a>
  </div>
</div>
</div>
<div className=' bg-[#e6dace] relative bottom-60 z-[-1] pb-10 pt-80 px-8 block md:hidden'>
  <h1 className='text-6xl font-extrabold'>Hello</h1>
  <h2 className="py-6 text-2xl font-semibold">Here's who I am & what I do</h2>
  <p className="text-lg text-justify tracking-wide leading-relaxed">
  A motivated software engineer with a hunger for knowledge and experience in programming languages, as well as the capability to work effectively in teams by providing valuable support.<br/><br/>
  I'm all about mixing creativity and technology. I embrace challenges with a positive spirit and am always eager to learn.
  </p>
</div>

<div className="relative bottom-48 mx-0 max-w-full px-4 block md:hidden">
  <table className=''>
    <tr>
      <td className='font-bold text-xl py-2'>Call</td>
      <td className='font-medium text-sm'>+918109480729</td>
      </tr>
    <tr>
      <td className='font-bold text-xl py-2'>Write</td>
      <td className='font-medium text-sm tracking-wide'>rishikaosharma@gmail.com</td>
    </tr>
    <tr>
      <td className='font-bold text-xl py-2'>Follow</td>
      <td className='font-semibold text-xl'><i class="fa fa-linkedin" aria-hidden="true"></i><i class="fa-brands fa-github"></i></td>
    </tr>
  </table>
  <p>
   Let's connect to explore possibilities and chat about tech, ideas, or anything exciting!
  </p>
  <p>
  Designed and Developed Rishika Sharma
  </p>
</div>

{/* -------------------------------------------------------------------MEDIUM AND LARGE SCREN---------------------------------- */}
<div className="w-full mx-0 md:block hidden pt-32">
  <div className='bg-[#e6dace] float-left w-[45%] h-screen pl-10 lg:pl-32 pt-20 xl:pl-80'>
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
    <a href="#facebook"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
      <i class="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a href="#twitter"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
      <i
        class="fab fa-twitter" aria-hidden="true">
      </i>
    </a>
    <a href="#instagram"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
        class="fab fa-instagram" aria-hidden="true">
      </i>
    </a>
  </div>
</div>
  </div>

  <div className='bg-white h-screen px-10 pt-3 pr-10 lg:pt-16 lg:pr-32 xl:pr-80'>
  <div className='relative bottom-60 pb-10 pt-80 px-8 left-10 lg:left-20 lg:px-20'>
  <h1 className='text-6xl font-extrabold'>Hello</h1>
  <h2 className="py-5 text-xl lg:text-2xl font-semibold">Here's who I am & what I do</h2>
  <div className='md:block space-x-8 pb-3'>
      <button className="bg-blue-700 border-2 text-xl border-blue-700 text-white font-semibold px-5 py-1 rounded-full">Resume</button>
      <button className="bg-transparent text-xl text-black font-semibold border-2 border-black px-5 py-1 rounded-full">Projects</button>
      </div>
  <p className="text-sm lg:text-lg text-justify tracking-wide leading-relaxed">
  A motivated software engineer with a hunger for knowledge and experience in programming languages, as well as the capability to work effectively in teams by providing valuable support.<br/><br/>
  I'm all about mixing creativity and technology. I embrace challenges with a positive spirit and am always eager to learn.
  </p>
</div>
  </div>
</div>
{/* <div className='mx-0 max-w-full float-left pl-40 pr-10 py-32 bg-[#e6dace]'>
<div class="relative flex flex-col text-gray-700 bg-[#f4ece6] shadow-xl left-20">
  <div class="relative mx-4 mt-4 text-gray-700">
    <img src={myImg} alt="profile-picture"className='w-[40%]' />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased leading-snug tracking-normal font-bold text-black">
      Rishika <br/> Sharma
    </h4>
      <p className='block h-1 mt-2 justify-center bg-blue-700'></p>
      <div className='block space-x-2 py-5'>
      <button className="bg-blue-700 border-2 border-blue-700 text-white font-semibold px-5 py-1 rounded-full">Resume</button>
      <button className="bg-transparent text-black font-semibold border-2 border-black px-5 py-1 rounded-full">Projects</button>
      </div>
    <p
      class="block font-sans text-base antialiased font-medium leading-relaxed  bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      CEO / Co-Founder
    </p>
  </div>
  <div class="flex justify-center p-6 py-2 mb-4 gap-7 shadow-sm bg-white">
    <a href="#facebook"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
      <i class="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a href="#twitter"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
      <i
        class="fab fa-twitter" aria-hidden="true">
      </i>
    </a>
    <a href="#instagram"
      class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
        class="fab fa-instagram" aria-hidden="true">
      </i>
    </a>
  </div>
</div>

</div>
<div className=' bg-white relative z-[-1] h-screen left-14 pt-40 px-8 pr-40 block max-w-full mx-0'>
  <h1 className='text-6xl font-extrabold'>Hello</h1>
  <h2 className="py-6 text-2xl font-semibold">Here's who I am & what I do</h2>
  <p className="text-lg text-justify tracking-wide leading-relaxed">
  A motivated software engineer with a hunger for knowledge and experience in programming languages, as well as the capability to work effectively in teams by providing valuable support.<br/><br/>
  I'm all about mixing creativity and technology. I embrace challenges with a positive spirit and am always eager to learn.
  </p>
</div> */}







    {/* <div className='w-full  mx-0 md:pt-60 pt-32  lg:px-60 h-screen'>
    <img src={myImg} className='md:float-right rounded-full md:w-[30%] md:pr-4  md:px-0 px-20 hidden md:block'/> */}
    {/* ---------------------------------------------HOME------------------------------------- */}
      {/* <h1 className='md:text-6xl text-[#5b3629] font-bold text-2xl pl-2 md:py-0 py-4 text-center lg:text-left md:text-left'>I'm a <br/>
      <TypeAnimation className='lg:text-7xl md:text-5xl font-bold text-3xl'
  sequence={[
    " Frontend Developer",
    1000, 
    " Designer",
    1000,
    " Freelancer",
    1000,
  ]}
  wrapper="span"
  speed={50}
  style={{ color: '#8A2BE2', display: 'inline-block' }}
  repeat={Infinity}
/> */}
      {/* </h1>
      <img src={myImg} className='md:float-right rounded-full md:w-[30%] md:pr-4  md:px-0 px-20 md:hidden'/> */}
      {/* <img src='Portfolio-pic.jpg' className='h-[50%] w-[50%] px-40 m-0 '/> */}
     
      {/* <p className='px-2 text-justify pt-3 md:pt-10 md:text-2xl md:pr-96 text-[#918983] font-'>I'm all about mixing creativity and technology. I embrace challenges with a positive spirit and am always eager to learn.</p>

      <button className='mx-28 px-3 md:mx-0 md:px-4 py-3 bg-gradient-to-t from-purple-500 to-purple-700 rounded-md hover:scale-105 duration-500 text-xl text-white font-semibold mt-2 md:mt-6'>
        Hire Me 
      </button>
     
    </div> */}
    </>
  )
}

export default Home;
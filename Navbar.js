import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons'


const Navbar = () => {

  const[nav, setNav] = useState(false);
  let [open,setOpen]=useState(false); 
 
  const links = [
  {
    // id:1,
    // link: (<div><i className="fa fa-home"></i> Home</div>),
  },
  {
    id:2,
    link: (<NavLink onClick={() => setOpen(!open)} to="/about"><i className="fa-solid fa-user"></i> About</NavLink>),
  },
  {
    id:3,
    link: (<NavLink onClick={() => setOpen(!open)} to="/skills"><i class="fa-solid fa-lightbulb"></i> Skills</NavLink>),
  },
  {
    id:4,
    link: (<NavLink onClick={() => setOpen(!open)} to="/projects"><i class="fa-solid fa-desktop"></i> Projects</NavLink>),
  },
  {
    id:5,
    link: (<NavLink onClick={() => setOpen(!open)} to="/contact"><i class="fa fa-address-book" aria-hidden="true"></i> Contact</NavLink>),
  },
 ];
  return (
   <>
    <div className='flex justify-between items-center bg-white md:shadow-xl text-white fixed px-4 w-full h-30 md:z-10'>
       <div className='mx-0 max-w-full py-8 px-4 lg:py-12'>
        <div className="flex space-x-2"> 
          {/* <h1 className='text-5xl text-purple-600 font-signature ml-2'>Rishika</h1> */}
          <p className='w-4 h-4 mt-2 bg-blue-700'></p>
          <h1 class="font-bold text-black text-xl sm:text-2xl md:text-3xl">Rishika Sharma</h1>
          <h1 className='font-thin text-md sm:text-lg text-gray-700 hidden lg:block tracking-wide pt-2'>/ FRONTEND DEVELOPER</h1> 
        </div>
        <h1 className='font-thin text-md sm:text-lg text-gray-700 block lg:hidden tracking-wide'>FRONTEND DEVELOPER</h1> 
        </div>
        
      <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
         <li 
         key={id}
         className='px-4 cursor-pointer capitalize font-thin text-gray-600 hover:scale-105 duration-200'>
          {/* <i class="fa fa-home" aria-hidden="true"></i> */}
          {link}</li>
        ))}
      </ul>

        <div onClick = {() => setNav(!nav)} className='cursor-pointer md:hidden pr-2 z-10 text-gray-500 text-xl'>
          {nav ? <i class="fa fa-close" size={30}/> : <i class="fa fa-bars" size={30}/> }
        </div>
       
       {nav  && (
        <ul className='flex flex-col pt-2 text-gray-600 justify-center items-center fixed top-0 left-0 w-full h-screen bg-[#f4ece6]'>
        {links.map(({id, link}) => (
         <li 
         key={id}
         className='text-4xl capitalize cursor-pointer py-6'>
        {link}</li>
        ))}
       </ul>
       )}

       
      
    </div>
    </>
  )
}

export default Navbar

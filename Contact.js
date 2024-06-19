import React from 'react'
import { Link } from "react-router-dom";

function Contact()  {
  return (
    <>
    <div className='md:px-46 lg:px-60 xl:px-80 pt-28 md:pt-40 text-center bg-[#e6dace] h-screen mx-0 max-w-full'>
 
      <h1 class="md:text-6xl text-3xl font-bold text-center py-5">Lets's Talk</h1>
      <p className='text-blue-700 pt-2'>Let's connect to explore possibilities and chat about tech, ideas, or anything exciting!</p>
      <div class="flex justify-center pt-2  gap-7">
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

      <div className='flex items-center justify-center'>
          <form className="max-w-2xl py-4 px-4 lg:py-12 text-center mx-auto space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm" />
                    <input type='email' placeholder='Email'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm" />
                    <textarea placeholder='Message' rows="6"
                        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5"></textarea>
                    <button type='button'
                        className="bg-blue-700 border-2 sm:text-lg border-blue-700 text-white font-semibold px-3 sm:px-5 py-1 rounded-full">Send</button>
          </form>
      </div>
   
   
   
     
    </div>
    </>
  )
}

export default Contact
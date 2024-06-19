import React from "react";
import govyapar from "../assests/govyapar.png";
import chatApp from "../assests/Chatting Application.png"
import { Link } from "react-router-dom";


const Projects = () => {
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch(error => {
  //       console.error("Error attempting to play", error);
  //     });
  // };

  // useEffect(() => {
  //   attemptPlay();
  // }, []);
  return (
    <>
    {/* ------------------------------------------------PROJECTS-------------------------------------------------- */}
    <div>
      <div className='md:px-46 lg:px-60 xl:px-80 bg-[#e6dace] pt-28 md:pt-40'
      data-bgcolor="#3b2525"
      data-textcolor="#dob6c0">
        <h1 className='md:text-6xl text-3xl font-bold text-center py-5'>Projects</h1>
      
        {/* ------------------------------------------------FREELANCING PROJECT-------------------------------------------------- */}
        <h1 className='md:text-xl font-semibold text-blue-700 text-center pb-7 md:py-5'>FREELANCING PROJECT</h1>

        <div className="text-center bg-white cursor-pointer max-w-2xl md:grid md:grid-rows-1 md:grid-cols-2 mx-auto shadow-lg shadow-black">

          <div className="px-4 md:mx-0">

          <div className="flex">
          <p className='w-2 h-12 mt-5 bg-blue-700'></p>
          <div className="p-4 ">
          <a href="https://govyapar.com/"><h1 className="text-blue-700 text-left font-extrabold text-lg">GOVYAPAR <i class="fa-solid fa-link"></i></h1></a>
          <h2 className="text-blue-700 text-left font-bold text-sm md:text-lg">Full Stack Developer</h2>
          </div>
          </div>

          <div className="p-2 md:p-4">
          <p className="text-black text-justify text-sm">Govyapar is a user-friendly online platform for SMEs in India, simplifying business management and compliance. Govyapar offers services like ITR filing, legal notice resolution, tax consultation, NGO registration, startup funding, GST filing, company formation, trademark registration, and virtual CFO services.🚀</p> <br/>
          <p className="text-black text-justify pt-2 text-sm">The tech stack includes React and Tailwind CSS for a dynamic frontend, with Node.js and MongoDB powering the backend. Key features include sign-in/sign-up, data storage for contact forms and documents, email marketing, and Razorpay payment gateway.🔐</p> <br/>
          <p className="text-black text-justify pt-2 text-sm">It's a live project built from scratch, and I'm continuously adding new features to make it even better!🌟</p>

          <div className="md:hidden block">
          <img src={govyapar} alt='' className='px-2 md:px-0 w-[40%] md:w-[60%] mx-auto border-2 border-black m-5 rounded-lg'/>
          </div> 

          </div>
       
          </div>
          
          <div className="bg-gray-500 mx-4 md:mx-0 hidden md:block">
          <img src={govyapar} alt='' className='px-2 md:px-0 w-[40%] md:w-[60%]  mx-auto border-2 border-black my-14 rounded-lg'/>
          </div> 
          
        </div>
       
 {/* ------------------------------------------------PERSONAL PROJECT------------------------------------------------- */}
      <div className="py-10">
        <h1 className='md:text-xl font-semibold text-center text-blue-700  py-5 md:py-10'>PERSONAL PROJECT</h1>

        <div className="text-center bg-white cursor-pointer max-w-2xl md:grid md:grid-rows-1 md:grid-cols-2 mx-auto shadow-lg shadow-black">

          <div className="px-4 md:mx-0">

            <div className="flex">
            <p className='w-2 h-12 mt-5 bg-blue-700'></p>
            <div className="p-4 ">
            <a href="https://github.com/Rishikasharma11/Chatting-Appliction"><h1 className="text-blue-700 text-left font-extrabold text-lg">CHAT APP <i class="fa-solid fa-link"></i></h1></a>
            <h2 className="text-blue-700 text-left font-bold text-sm md:text-lg">Java</h2>
            </div>
          </div>

          <div className="p-2 md:p-4">
            <p className="text-black text-justify text-sm">During my college years🎓, I developed a robust Chatting Application📱 using Java Swing. Leveraging socket programming for real-time communication, I delivered a user-friendly messaging platform that facilitated seamless interaction between users💬.</p> <br/>
            <p className="text-black text-justify pt-2 text-sm">This project not only honed my programming skills but also provided valuable experience in developing real-time applications🛠️.</p>

            <div className="md:hidden block">
            <img src={chatApp} alt='' className='px-2 md:px-0 w-[40%] md:w-[60%] mx-auto border-2 border-black m-5 rounded-lg'/>
            </div> 
          </div>
        </div>
          
        <div className="bg-gray-500 mx-4 md:mx-0 hidden md:block">
          <img src={chatApp} alt='' className='px-2 md:px-0 w-[40%] md:w-[60%]  mx-auto border-2 border-black my-14 rounded-lg'/>
        </div> 
          
        </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Projects

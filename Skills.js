import React from 'react'
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import reactimg from "../assests/react.png";
import tailwind from "../assests/tailwind.png";
import java from "../assests/java.png";
import nodejs from "../assests/nodejs.jpeg";
import mongodb from "../assests/mongodb.jpeg";
import eclipse from "../assests/eclipse.png";
import figma from "../assests/figma.png";
import firebaseimg from "../assests/firebase.png";
import vscode from "../assests/visual-studio-code.png";
import aws from "../assests/aws.png";
import godaddy from "../assests/godaddy.jpg";
import github from "../assests/github.png";

function Skills() {

    const techs = [
        {
            id : 1,
            src : html,
            title : 'HTML',
            style : 'shadow-orange-500',

        },
        {
            id : 2,
            src : css,
            title : 'CSS',
            style : 'shadow-blue-500',

        },
        {
            id : 3,
            src : javascript,
            title : 'JavaScript',
            style : 'shadow-yellow-500',

        },
        {
            id : 4,
            src : reactimg,
            title : 'React',
            style : 'shadow-blue-500',

        },
        {
            id : 5,
            src : tailwind,
            title : 'Tailwind',
            style : 'shadow-orange-500',

        },
        {
            id : 6,
            src : java,
            title : 'Java',
            style : 'shadow-blue-500',

        },
        {
            id : 7,
            src : nodejs,
            title : 'NodeJs',
            style : 'shadow-blue-500',

        },
        {
            id : 8,
            src : mongodb,
            title : 'MongoDB',
            style : 'shadow-blue-500',

        },
    ]

    const tools = [
        {
            id : 1,
            src : vscode,
            title : 'VS Code',
        },
        {
            id : 2,
            src : aws,
            title : 'Amazon Web Services ',
        },
        {
            id : 3,
            src : figma,
            title : 'Figma',
        },
        {
            id : 4,
            src : firebaseimg,
            title : 'Firebase',
        },
        {
            id : 5,
            src : eclipse,
            title : 'Eclipse',
        },
        {
            id : 6,
            src : godaddy,
            title : 'GoDaddy Hosting'
        },
        {
            id: 7,
            src : github,
            title : 'Github',
        }
    ]
  return (
    <>
     {/* ------------------------------------------------SKILLS-------------------------------------------------- */}
     {/* ------------------------------------------------Techs---------------------------------------------------- */}
     <div className='md:px-46 lg:px-60 xl:px-80 pt-28 md:pt-40'
     data-bgcolor="#070707"
     data-textcolor="#fffff"
     >
      <h1 className='md:text-6xl text-3xl font-bold text-center md:py-5'>Skills</h1>
      <h1 className='md:text-xl font-semibold text-center py-5 md:py-10'>Technical <span className='md:text-xl text-[#5f22d9] font-extrabold'> Skills</span></h1>
      <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 text-center py-8 px-12 sm:px-0'>
        {
            techs.map(({id, src, title, style}) => (
                <div 
                key={id}
                className={'hover:scale-105 duration-500 py-2 rounded-lg ${style}'}>
                <img src = {src} alt='' className='w-28 mx-auto'/>
                <p className='mt-4'>{title}</p>
                </div>
            ))
        }
      </div>
    </div>

    {/* -----------------------------------------------Tools------------------------------------------------------- */}
    <div className='md:px-46 lg:px-60 md:pt-10 xl:px-80'>
    <h1 className='md:text-xl font-semibold text-center'><span className='md:text-xl text-[#5f22d9] font-extrabold'>Tools </span>I Use</h1>
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 text-center py-8 px-12 sm:px-0'>
        {
            tools.map(({id, src, title}) => (
                <div 
                key={id}
                className={'hover:scale-105 duration-500 py-2 rounded-lg'}>
                <img src = {src} alt='' className='w-28 mx-auto'/>
                <p className='mt-4'>{title}</p>
                </div>
            ))
        }
      </div>
      </div>

      {/* ---------------------------------------------Days I Code----------------------------------------------- */}
      {/* <div className='md:px-46 lg:px-60 md:py-10 xl:px-80'>
      <h1 className='md:text-3xl font-semibold text-center'>Days I <span className='md:text-3xl text-[#5f22d9] font-extrabold'> Code</span></h1>
      <img src={codeDays} alt='' className='shadow-md rounded-lg'/>
      </div> */}
        
    </>
  )
}
    
export default Skills;
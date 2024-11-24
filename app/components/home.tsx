"use client";
import Image from 'next/image';
export default function HomePage() {
  return (
    <div id="Home">
      <div className=" flex flex-col lg:flex-row items-start lg:items-center bg-slate-500 min-h-screen">
    <div className="w-full lg:w-1/2 flex justify-centre lg:justify-end p-10">
         <Image
           src="/home.webp"
           alt="My Profile.."
           width={600}
           height={400}
           style={{ objectFit: 'cover' }}
           />
        </div>
       <div>
        <div>
          <h1 className=" pb-5 flex justify-center md:flex-row w-full lg:w-1/2 font-bold lg:text-5xl sm:text-4xl sm:text-slate-600 md:text-slate-800 lg:text-slate-700 xl:text-black hover:text-neutral-700  "> 
            HI,I'AM
          </h1>
        </div>

        <div>
          <h1 className=" pb-5 flex justify-center md:flex-row font-bold lg:text-5xl sm:text-4xl sm:text-slate-600 md:text-slate-800 lg:text-slate-700 xl:text-black hover:text-neutral-700 ">
            ANOOSHA NADEEM.
          </h1>
        </div>

        <div className=" bg-slate-500  rounded-lg shadow-md max-w-lg animate-pulse">
        <p className=" md:pl-10">
            A passionate software developer, with experience in front-end
           development using HTML, CSS, and JavaScript, 
           as well as modern frameworks like React and Next.js(●'◡'●)
        </p>
        </div>
        <div className='md:'>
        <button className=" flex justify-center lg:flex-row mt-12 bg-gray-800 hover:bg-gray-500 rounded-lg w-32">
          <a href="https://www.linkedin.com/in/anoosha-nadeem-92a087330/"target="_blank">Connect on Linkedin!</a>
          </button>
          </div>
          <hr className="mt-10 md:mt-0"/>
          </div>
          </div>
         </div>
  )
         }
        


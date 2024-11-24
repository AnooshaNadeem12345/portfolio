import React from 'react'
import Image from 'next/image';
export default function About() {
  return (
    <div id="About" className="">
       <div className='min-h-screen flex flex-col lg:flex-row  bg-slate-500'>
            <h1 className="   ml-10 sm:ml-3 lg:pt-24 sm:pt-28 hover:text-neutral-700 text-5xl text-black font-bold">ABOUT ME:</h1>
             <div className=' pl-10  bg-slate-500 p-6 rounded-lg shadow-md max-w-lg animate-pulse'>
             {/* Text Container */}
         <p className="   flex justify-center font-bold pt-10 font-sans ">
          👋Hello! I'm a passionate and driven software developer👩‍💻 with a strong
            foundation in web technologies. With experience in front-end
            development using HTML, CSS, and JavaScript, as well as modern
            frameworks like React and Next.js(●'◡'●), I love building clean, efficient,
            and user-friendly applications. I’m always learning and staying
            up-to-date with the latest industry trends📈🚀, and I strive to create
            seamless, intuitive web experiences. Whether working on a
            collaborative project or tackling a solo challenge💨, I enjoy
            problem-solving and turning ideas into fully functional, interactive
            websites. Feel free to explore my work and get in touch!💟
            </p> 
            <button className="ml-10 w-32 h-11 mt-10 bg-gray-800 hover:bg-gray-500 rounded-lg ">
          <a href="https://github.com/AnooshaNadeem12345"target='_blank'>Github</a>
        </button> 
              <hr className='mt-28'/>
            </div>

              {/* Image Conatiner */}
            <div className='  w-full lg:w-1/2 flex justify-center lg:justify-end p-10 rounded-lg'>
            <Image
            src="/about.webp" 
            alt="Languages.."
            width={600}
            height={400}
            style={{ objectFit: 'cover' }}
            />
            </div>
            </div>
            </div>
            
   )
   }

import React from 'react'
import amazon from '../images/amazon.png';
import netflix from '../images/netflix.png';
import WorkImg from '../images/workImg.jpeg'
import realEstate from '../images/realestate.jpg'
import { IoLogoGithub } from 'react-icons/io';



const Projects = () => {
    return (
      <div id='projects' name='work' className='w-full md:h-screen text-gray-300 '>
        <div className='max-w-[80%] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#355C7D]'>
              Projects
            </p>
            <p className='py-6'>// Check out some of my recent works</p>
          </div>
  
  {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
             
            <div
              style={{ backgroundImage: `url(${netflix})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://netflix-clone-8da1b.firebaseapp.com/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='https://github.com/jahidshakil/netflix-clone'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${amazon})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://clone-f1832.firebaseapp.com/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='https://github.com/jahidshakil/amazon-clone'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code

                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${netflix})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://netflix-clone-8da1b.firebaseapp.com/'>
                    <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='https://github.com/jahidshakil/netflix-clone'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Projects
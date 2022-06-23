import React from 'react';

import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JavaScript from '../images/javascript.png';
import ReactImg from '../images/react.png';
import Node from '../images/node.png';
import FireBase from '../images/firebase.png';
import AWS from '../images/aws.png';
import GitHub from '../images/github.png';
import Tailwind from '../images/tailwind.png';
import Mongo from '../images/mongo.png';
import c from '../images/cc.jpg';
import sass from '../images/sass.png';
import python from '../images/python.png';
import cpp from '../images/cpp.png';
import bootstrap from '../images/bootstrap.png';
import materialui from '../images/materialui.png'
import java from '../images/java.png';


const Skills = () => {
  return (
    <div name='skills' className='w-[100%]  text-gray-300'>
        
          <div className='max-w-[80%] mx-auto p-4 flex flex-col justify-center w-full h-full' id='skills' >
              <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#355C7D] '>Skills</p>
              <p className='py-4 text-lg text-textBase'>// Technologies I've worked with</p>
          </div>

              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-lg text-textBase'>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={c} alt="HTML icon" />
                  <p className='my-4'>C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={cpp} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={sass} alt="HTML icon" />
                  <p className='my-4'>SASS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={materialui} alt="HTML icon" />
                  <p className='my-4'>MATERIAL UI</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
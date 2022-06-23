import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import { useState } from 'react';
import { motion } from "framer-motion";
import { HiOutlineMail } from 'react-icons/hi';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';



const Nav = () => {
    const [isActive, setisActive] = useState(false);
  return (
    <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
    <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
      <p className="text-lg text-slate-200 font-medium">Jahid</p>

      <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
        <a
          href="#home"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
        >
          About
          </a>
          <a
          href="#skills"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
        >
          Contact
        </a>
       
      </div>

      <motion.div
        whileTap={{ scale: 0.6 }}
        className="block md:hidden  ml-auto cursor-pointer"
        onClick={() => setisActive(!isActive)}
      >
        <IoIosMenu className="text-2xl text-textBase " />
      </motion.div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: "0.1s", type: "spring" }}
          className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
        >
          <a
            href="#home"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setisActive(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setisActive(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setisActive(false)}
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
            onClick={() => setisActive(false)}
          >
            Contact
          </a>
          
        </motion.div>
        )}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-1'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-evenly items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jahid-shakil-39682417b/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-evenly items-center w-full text-gray-300'
              href='https://github.com/jahidshakil'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ee2b42]'>
            <a
              className='flex justify-evenly items-center w-full text-gray-300'
              href='https://www.instagram.com/_aaladdinn/'
            >
              Instagram <FaInstagram size={30} />
            </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-evenly items-center w-full text-gray-300'
              href='https://www.facebook.com/jahidlaladin'
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav
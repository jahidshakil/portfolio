import React from 'react'

const Nav = () => {
  return (
      <div className='w-full px-6 z-50 fixed inset-x-0 top-4 flex justify-center items-center'>
          <div className='w-full md:w-880 bg-navBar flex p-4 rounded-2xl fl items-center'>
              <p className='text-lg mr-10 text-slate-200 font-medium'>Jahid</p>
              <div className='hidden md:flex text-right items-center gap-6 flex-1'>
                  <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                      Home
                  </a>
                  <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                      About
                  </a>
                  <a href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                      Projects
                  </a>
                  <a href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                      Contact
                  </a>
              </div>
          </div>
          
    </div>
  )
}

export default Nav
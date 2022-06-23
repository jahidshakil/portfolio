import React from 'react'
import profile from '../images/profile.png'

const Main = () => {
  return (
      <div>
          <div className='  w-[90%] ' >
          <section
            className="max-w-[90%] grid grid-cols-1 md:grid-cols-2 gap-2 my-10 h-full text-center py-8"
            id="about"
          >
            <div className="w-full h-420 flex text-center items-center justify-center ml-24 sm: mr-10">
            
              <div className="w-275 h-340 relative bg-[#355C7D] rounded-md">
                <img
                  src={profile}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ml-16 ">
              <p className="text-lg text-textBase text-center  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente dicta recusandae commodi praesentium officia, aliquam
                cumque voluptatem dolor enim ducimus id maiores consequatur
                dolorem! Architecto aperiam corrupti nostrum eum similique!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis saepe dolor illo. Tenetur labore impedit nihil natus
                explicabo perspiciatis nisi autem aut numquam dolorum, voluptas
                vero nobis assumenda commodi magni.
              </p>

              
              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-[#355C7D] group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </button>
            </div>
        </section>


        
         
    </div>
    </div>
  )
}

export default Main
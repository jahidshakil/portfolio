import React from 'react'

const Contact = () => {
  return (
      
          <div id='contact' name='contact' className='w-full h-screen  flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1adc20d5-121c-4463-910d-ee327301ec5c" className='flex flex-col max-w-[80%] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#355C7D] text-gray-300'>Let's talk</p>
                <p className='text-gray-300 py-4'>//Send your message to - jahidaladin@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#355C7D] hover:border-[#11202d] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
    
  )
}

export default Contact
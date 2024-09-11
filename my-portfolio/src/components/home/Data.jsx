import React from 'react'
import { FaHandshake, FaPhone, FaPhoneAlt, FaPlane} from 'react-icons/fa'

const Data = () => {
  return (
    <div className='home_data'>
      <h1 className='home_title flex items-center'>IDRIS ADEMOLA
      {/* <FaHandshake className='home_hand' /> */}
      <i class='fa-light fa-hand-wave'></i>
      </h1>
      <h3 className='home_subtitle'>FULLSTACK DEVELOPER</h3>
      <p className='home_description'>Hello!, My name is ADEMOLA IDRIS.
       I am a highly motivated fullstack developer who can handle all the layers of an application
       from the user interface to the server side logic and database integration.
       I have experience in building complex applications with modern technologies.
       I enjoy creating thhings that work on the web.</p>
      <a href='#contact' className='button button--flex flex items-center w-36'>
        Say Hello
        <FaPhone className='ml-1' />
      </a>
    </div>
  )
}

export default Data
import React from 'react'
import { FaHandshake, FaPhone, FaPhoneAlt, FaPlane} from 'react-icons/fa'

const Data = () => {
  return (
    <div className='home_data'>
      <h1 className='home_title flex items-center'>IDRIS ADEMOLA
      <FaHandshake className='home_hand' />
      <i class='fa-light fa-hand-wave'></i>
      </h1>
      <h3 className='home_subtitle'>FRONTEND DEVELOPER</h3>
      <p className='home_description'>Hello!, My name is ADEMOLA IDRIS.
       I am a highly motivated frontend developer with a strong enthusiasm 
       for transforming ideas into captivating web experiences.
        I embrace the philosophy of creating digital solutions 
        that not only overcome but also provoke surprise. 
        I am here to bring ideas to life.</p>
      <a href='#contact' className='button button--flex flex items-center w-36'>
        Say Hello
        <FaPhone className='ml-1' />
      </a>
    </div>
  )
}

export default Data
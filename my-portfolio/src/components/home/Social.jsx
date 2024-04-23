import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Social = () => {
  return (
    <div>
      <div className='home_social grid'>
        <a href='https://t.co/Lp1dz4we6U' className='home_social-icon' target='_blank'>
            <FaInstagram />
        </a>

        <a href='https://twitter.com/Ademola102?t=f7nEgMsEjfcPp3jiIyAY_A&s=09' className='home_social-icon' target='_blank'>
            <FaTwitter />
        </a>

        <a href='https://t.co/hNME1XXumV' className='home_social-icon' target='_blank'>
            <FaLinkedin />
        </a>

        <a href='https://t.co/Wm5XrEbcZb' className='home_social-icon' target='_blank'>
            <FaGithub />
        </a>

        <a href='https://t.co/3x7l6iZAdt' className='home_social-icon' target='_blank'>
            <FaFacebook />
        </a>
      </div>
    </div>
  )
}

export default Social

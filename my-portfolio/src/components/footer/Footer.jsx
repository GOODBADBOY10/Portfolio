import React from 'react'
import './footer.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer_title'>Ademola</h1>

            <ul className='footer_list'>
                <li>
                    <a href='#about' className='footer_link'>About</a>
                </li>
                <li>
                    <a href='#portfolio' className='footer_link'>Projects</a>
                </li>
                <li>
                    <a href='#skills' className='footer_link'>Skills</a>
                </li>
            </ul>

            <div className='footer_social'>
            <a href='https://t.co/Lp1dz4we6U' className='footer_social-link' target='_blank'>
            <FaInstagram />
            </a>

            <a href='https://twitter.com/Ademola102?t=f7nEgMsEjfcPp3jiIyAY_A&s=09' className='footer_social-link' target='_blank'>
            <FaTwitter />
            </a>

            <a href='https://t.co/hNME1XXumV' className='footer_social-link' target='_blank'>
            <FaLinkedin />
            </a>

            <a href='https://t.co/Wm5XrEbcZb' className='footer_social-link' target='_blank'>
            <FaGithub />
            </a>

            <a href='https://t.co/3x7l6iZAdt' className='footer_social-link' target='_blank'>
            <FaFacebook />
            </a>
            </div>
            <h3 className='footer_copy text-center mt-4'>
                &#169; Ademola. All rights reserved
            </h3>
        </div>
      </footer> 
    </div>
  )
}

export default Footer

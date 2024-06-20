import React, { useState } from 'react'
import './header.css';
import {FaHome, FaTimes, FaAppStore, FaLaptopMedical, FaServicestack, FaEnvelope, FaBriefcase, FaFileAlt, FaUser} from 'react-icons/fa'

const Header = () => {
// chsnge background header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if(this.scrollY >= 80) {
        header.classList.add('scroll-header');
    }
        else {
            header.classList.remove('scroll-header')
    }
})

  // Toggle menu
  const[Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <div>
      <header className='header'>
        <nav className='nav container'>
          <a href='index.html' className='nav_logo'>Ademola</a>

          <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
            <ul className='nav_list '>
              <li className='nav_item'>
                <a href='#home'
                 onClick={() => setActiveNav('#home')}
                  className={activeNav === '#home' ? 'nav_link active-link' : 'nav_link'} flex items-center>
                  <FaHome className='nav_icon'/>Home
                </a>
              </li>

              <li className='nav_item'>
                <a href='#about'
                 onClick={() => setActiveNav('#about')}
                  className={activeNav === '#about' ? 'nav_link active-link' : 'nav_link'}>
                  <FaUser className='nav_icon'/>
                  About
                </a>
              </li>

              <li className='nav_item'>
                <a href='#skills'  
                onClick={() => setActiveNav('#skills')} 
                className={activeNav === '#skills' ? 'nav_link active-link' : 'nav_link'}>
                  <FaFileAlt className='nav_icon'/>Skills
                </a>
              </li>

              <li className='nav_item'>
                <a href='#services' 
                 onClick={() => setActiveNav('#services')} 
                 className={activeNav === '#services' ? 'nav_link active-link' : 'nav_link'}>
                  <FaBriefcase className='nav_icon' />Services
                </a>
              </li>

              <li className='nav_item'>
                <a href='#portfolio' 
                 onClick={() => setActiveNav('#portfolio')}
                  className={activeNav === '#portfolio' ? 'nav_link active-link' : 'nav_link'}>
                  <FaServicestack className='nav_icon'/>Portfolio
                </a>
              </li>

              <li className='nav_item'>
                <a href='#contact' 
                 onClick={() => setActiveNav('#contact')} 
                className={activeNav === '#contact' ? 'nav_link active-link' : 'nav_link'}>
                  <FaEnvelope className='nav_icon' />
                  Contact
                </a>
              </li>
            </ul>

           <FaTimes className='nav_close' onClick={() => showMenu(!Toggle)}/>
          </div>

          <div className='nav_toggle' onClick={() => showMenu(!Toggle)}>
            <i className='uil uil-apps'></i>
            <FaLaptopMedical />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header

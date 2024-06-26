import React from 'react'
import { FaArrowDown, FaScroll } from 'react-icons/fa'

const ScrollDown = () => {
  return (
    <div className='home_scroll'>
      <a href='#about' className='home_scroll-button button--flex'>
        <FaScroll />
        <span className='home_scroll-name'>Scroll Down</span>
        <FaArrowDown className='home_scroll-arrow' />
      </a>
    </div>
  )
}

export default ScrollDown

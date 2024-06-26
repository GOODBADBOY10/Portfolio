import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './scrollup.css'

const Scrollup = () => {

    window.addEventListener('scroll', function () {
        const scrollup = document.querySelector('.scrollup');
        if(this.scrollY >= 560) {
            scrollup.classList.add('show-scroll');
        }
            else {
                (scrollup.classList.remove('show-scroll'))
        }
    })
  return (
    <div className=''>
      <a href='#' className='scrollup'>
        <FaArrowUp className='scrollup_icon' />
      </a>
    </div>
  )
}

export default Scrollup

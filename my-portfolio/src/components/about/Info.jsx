import React from 'react'
import { FaAward, FaBriefcase, FaSun } from 'react-icons/fa'

const Info = () => {
  return (
    <div className='about_info grid'>

      <div className='about_box'>
        <FaAward className='about_icon'/>
        <h3 className='about_title'>Experience</h3>
        <span className='about_subtitle'>1 year</span>
      </div>

      <div className='about_box'>
        <FaBriefcase className='about_icon' />
        <h3 className='about_title'>Completed</h3>
        <span className='about_subtitle'>4 + projects</span>
      </div>

      <div className='about_box'>
        <FaSun className='about_icon' />
        <h3 className='about_title'>Support</h3>
        <span className='about_subtitle'>Online 24/7</span>
      </div>
    </div>
  )
}

export default Info

import React from 'react'
import './about.css'
import Info from './Info'
import { FaDownload} from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <section className='about section' id='about'>
        <h2 className='about_title'>About Me</h2>
        <h4 className='about_subtitle'>My Introduction</h4>

        <div className='about_container container grid'>
            <img src='./idan2.jpg' alt='' className='about_img' />

            <div className='about_data'>
                <Info />

                <p className='about_description'>I am an experienced frontend developer who is proficient in the use of <strong>HTML, CSS, BOOTSTRAP, TAILWIND, JAVASCRIPT, REACT </strong> and other various frontend libaries for developing scalable and responsive web applications.
                 I always strive to write clean, maintainable code that adhere to best practices and industry standards.
                  I collaborate efectively with cross functional teams and i am passionate about learning new technologies and staying current with industry threads.
                I feel confident that my skills set and dedication will enable meto become and asset to your organization or project.</p>

                <a Download='' href='./IDRIS ADEMOLA Resume.docx'
                 className='button button--flex flex items-center w-48'>Download CV
                <FaDownload className='ml-2'/>
                </a>

            </div>
        </div>
      </section>
    </div>
  )
}

export default About

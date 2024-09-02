import React, { useState } from 'react'
import './services.css'
import {FaArrowRight, FaBriefcase, FaCircle, FaOptinMonster, FaPeace, FaPenNib, FaPlayCircle, FaRegPlayCircle, FaTimes, FaTwitter, FaWeebly} from 'react-icons/fa'

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <div>
      <section className='services section' id='services'>
        <h2 className='section_title'>Services</h2>
        <h4 className='section_subtitle'>What i offer</h4>

        <div 
        className='services_container 
        container flex flex-col mx-auto 
        justify-center items-center 
        md:flex-row gap-10'>
                <div className='services_content'>

                    <div className=''>
                        <FaWeebly className='services_icon' />
                        <h3 className='services_title'>Web Development</h3>
                    </div>

                    <span className='services_button' onClick={() => toggleTab(1)}>View More 
                    <FaArrowRight className='services_button-icon' /></span>

                    <div className={toggleState === 1 ? 'services_modal active-modal' : 'services_modal' }>
                      <div className='services_modal-content'>
                        <FaTimes  className='services_modal-close' onClick={() => toggleTab(0)} />

                        <h3 className='services_modal-title'>Web Development</h3>
                        <p className='services_modal-description'>
                        As a frontend developer, i can offer the following services</p>

                        <ul className='services_modal-services grid'>

                          <li className='services_modal-service'>
                            <FaCircle className='services_modal-icon' />
                            <p className='services_modal-info'>I design intuitive and visual appealing interfaces</p>
                          </li>

                          <li className='services_modal-service'>
                            <FaCircle className='services_modal-icon' />
                            <p className='services_modal-info'>I improve website usability and accessibility</p>
                          </li>

                          <li className='services_modal-service'>
                            <FaCircle className='services_modal-icon' />
                            <p className='services_modal-info'>I create responsive websites that <br /> adapt to various screen sizes and devices</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className='services_content'>

<div>
    <FaPenNib  className='services_icon' />
    <h3 className='services_title'>Web Performance Optimization</h3>
</div>

<span className='services_button' onClick={() => toggleTab(2)}>View More 
<FaArrowRight className='services_button-icon' /></span>
<div className={toggleState === 2 ? 'services_modal active-modal' : 'services_modal' }>
                      <div className='services_modal-content'>
                        <FaTimes  className='services_modal-close' onClick={() => toggleTab(0)} />

    <h3 className='services_modal-title'>Web Development</h3>
    <p className='services_modal-description'>
    I also offer the following services </p>

    <ul className='services_modal-services grid'>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I build fast and seamless SPAs <br />using frameworks like REACT</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I create fast web applications</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I ensure websites meet <br /> accessibility standards and guidelines</p>
      </li>
    </ul>
  </div>
</div>
                </div>

                <div className='services_content'>

<div>
    <FaPeace  className='services_icon' />
    <h3 className='services_title'>Team Player</h3>
</div>

<span className='services_button'  onClick={() => toggleTab(3)}>View More
<FaArrowRight className='services_button-icon' /></span>
<div className={toggleState === 3 ? 'services_modal active-modal' : 'services_modal' }>
                      <div className='services_modal-content'>
                        <FaTimes  className='services_modal-close' onClick={() => toggleTab(0)} />

    <h3 className='services_modal-title'>Team Player</h3>
    <p className='services_modal-description'>
    I am aslo a team player who can work efficiently with different team</p>

    <ul className='services_modal-services grid'>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I manage code repositories using Git</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I implement security best practices</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I debug front-end code <br/> using various testing frameworks</p>
      </li>
    </ul>
  </div>
</div>
                </div>

        </div>
        </section>
    </div>
  )
}

export default Services

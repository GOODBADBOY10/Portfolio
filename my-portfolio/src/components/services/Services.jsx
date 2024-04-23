import React, { useState } from 'react'
import './services.css'
import {FaArrowRight, FaCircle, FaTimes, FaTwitter} from 'react-icons/fa'

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

        <div className='services_container container grid'>
                <div className='services_content'>

                    <div>
                        <FaTwitter  className='services_icon' />
                        <h3 className='services_title'>Web<br /> Developer</h3>
                    </div>

                    <span className='services_button' onClick={() => toggleTab(1)}>View More 
                    <FaArrowRight className='services_button-icon' /></span>

                    <div className={toggleState === 1 ? 'services_modal active-modal' : 'services_modal' }>
                      <div className='services_modal-content'>
                        <FaTimes  className='services_modal-close' onClick={() => toggleTab(0)} />

                        <h3 className='services_modal-title'>Web Developer</h3>
                        <p className='services_modal-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, alias.</p>

                        <ul className='services_modal-services grid'>

                          <li className='services_modal-service'>
                            <FaCircle className='services_modal-icon' />
                            <p className='services_modal-info'>I develop the user interface</p>
                          </li>

                          <li className='services_modal-service'>
                            <FaCircle className='services_modal-icon' />
                            <p className='services_modal-info'>I develop the user interface</p>
                          </li>

                          <li className='services_modal-service'>
                            <FaCircle className='services_modal-icon' />
                            <p className='services_modal-info'>I develop the user interface</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>

                <div className='services_content'>

<div>
    <FaTwitter  className='services_icon' />
    <h3 className='services_title'>Problem Solving</h3>
</div>

<span className='services_button' onClick={() => toggleTab(2)}>View More 
<FaArrowRight className='services_button-icon' /></span>
<div className={toggleState === 2 ? 'services_modal active-modal' : 'services_modal' }>
                      <div className='services_modal-content'>
                        <FaTimes  className='services_modal-close' onClick={() => toggleTab(0)} />

    <h3 className='services_modal-title'>Problem Solving </h3>
    <p className='services_modal-description'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, alias.</p>

    <ul className='services_modal-services grid'>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I develop the user interface</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I develop the user interface</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I develop the user interface</p>
      </li>
    </ul>
  </div>
</div>
                </div>

                <div className='services_content'>

<div>
    <FaTwitter  className='services_icon' />
    <h3 className='services_title'>Team Player</h3>
</div>

<span className='services_button'  onClick={() => toggleTab(3)}>View More
<FaArrowRight className='services_button-icon' /></span>
<div className={toggleState === 3 ? 'services_modal active-modal' : 'services_modal' }>
                      <div className='services_modal-content'>
                        <FaTimes  className='services_modal-close' onClick={() => toggleTab(0)} />

    <h3 className='services_modal-title'>Team Player</h3>
    <p className='services_modal-description'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, alias.</p>

    <ul className='services_modal-services grid'>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I develop the user interface</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I develop the user interface</p>
      </li>

      <li className='services_modal-service'>
        <FaCircle className='services_modal-icon' />
        <p className='services_modal-info'>I develop the user interface</p>
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

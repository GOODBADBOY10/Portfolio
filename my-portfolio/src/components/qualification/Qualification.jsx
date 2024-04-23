import React, { useState } from 'react'
import './qualification.css'
import {FaCalendar, FaCartPlus} from 'react-icons/fa'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <div>
        <section className='Qualification section'>
            <h2 className='section_title'>Qualification</h2>
            <h4 className='section_subtitle'>My Personal Journey</h4>

            <div className='qualification_container container'>
                <div className='qualification_tabs'>

                    <div
                     className={toggleState === 1 ? 'qualification_button qualification_active button--flex' :
                     'qualification_button button--flex' } onClick={() => toggleTab(1)}>
                        <FaCartPlus  className='qualification_icon' />Education
                    </div>


                    <div className={toggleState === 2 ? 'qualification_button qualification_active button--flex'
                     :'qualification_button button--flex' } onClick={() => toggleTab(2)}>
                        <FaCartPlus  className='qualification_icon' /> Experience
                    </div>
                </div>

                <div className='qualification_sections'>
                    <div className={toggleState === 1 ? 'qualification_content qualification_content-active' : 
                    'qualification_content' }>
                       <div className='qualification_content qualification_content-active'>
                            <div>
                                <h3 className='qualification_title'>Web Designer</h3>
                                <span className='qualification_subtitle'>Spain - Institute</span>
                                <div className='qualification_calender'>
                                    <FaCalendar /> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qualification_data'>
                            <div></div>
                            
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>Art Directory</h3>
                                <span className='qualification_subtitle'>Spain - Institute</span>
                                <div className='qualification_calender'>
                                    <FaCalendar /> 2024 - Present
                                </div>
                            </div>

                        </div>

                        <div className='qualification_data'>
                            <div>
                                <h3 className='qualification_title'>Web Developer</h3>
                                <span className='qualification_subtitle'>Spain - Institute</span>
                                <div className='qualification_calender'>
                                    <FaCalendar /> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qualification_data'>
                            <div></div>
                            
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>us ecpert</h3>
                                <span className='qualification_subtitle'>Spain - Institute</span>
                                <div className='qualification_calender'>
                                    <FaCalendar /> 2024 - Present
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={toggleState === 2 ? 'qualification_content qualification_content-active' :
                'qualification_content'}>
                        <div className={toggleState === 2 ? 'qualification_content qualification_content-active' :
                'qualification_content'}>
                            <div>
                                <h3 className='qualification_title'>Product Designer</h3>
                                <span className='qualification_subtitle'>Lagos - Institute</span>
                                <div className='qualification_calender'>
                                    <FaCalendar /> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qualification_data'>
                            <div></div>
                            
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>UX DEsigner</h3>
                                <span className='qualification_subtitle'>Spain - Institute</span>
                                <div className='qualification_calender'>
                                    <FaCalendar /> 2024 - Present
                                </div>
                            </div>

                        </div>

                        <div className='qualification_data'>
                            <div>
                                <h3 className='qualification_title'>Backend Developer</h3>
                                <span className='qualification_subtitle'>Spain - Institute</span>
                                <div className='qualification_calender'>
                                    <FaCalendar /> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>


    </div>
  )
}

export default Qualification

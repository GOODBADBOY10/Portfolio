import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <div>
      <section className='skills section' id='skills'>
        <h2 className='skills_title'>Skills</h2>
        <h4 className='skills_subtitle text-center text-base mb-4'>My Technical Level</h4>

        <div className='skills_container container grid'>

            <Frontend />


            <Backend />
        </div>
        </section>
    </div>
  )
}

export default Skills

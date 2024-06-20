import React from 'react'
import './home.css'
import  Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div>
      <section className='home section' id='home'>
        <div className='home_container container grid'>
            <div className='home_content grid'>
                <Social />

                <div className=" home_img bg-[url('./IDAN.jpg')]"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
      </section>
    </div>
  )
}

export default Home

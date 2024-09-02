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


                <div className='md:order-1'>
                  <img src='./idan2.jpg' alt='my-image'
                   className='h-72 w-72 home_img' 
                  />
                </div>

                {/* <div className="home_img bg-[url('./IDAN.jpg')]
                 bg-center bg-no-repeat bg-cover order-1
                  justify-self-center w-72 h-72"></div> */}

                <Data />
            </div>

            <ScrollDown />
        </div>
      </section>
    </div>
  )
}

export default Home

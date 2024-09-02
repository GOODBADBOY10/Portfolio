import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div>
      <section className='about section' id='portfolio'>
        <h2 className='about_title'>PORTFOLIO</h2>
        <h4 className='about_subtitle'>My Works</h4>
        <div className='portfolio_containe py-6 px-14 flex justify-center flex-col items-center gap-20 md:flex-row'>
            <div className=''>
            <img src='./goal.jpg' className='bx-badge-check w-80 h-84' />
                <h2 className='text-2xl font-bold text-center'>Goal App</h2>
                <p className='text-base text-center font-bold'>A goal setting app</p>
                <div className='flex items-center font-bold justify-center'>
                    <h4 className=''>React</h4>
                    <h4 className='ml-2'>Tailwindcss</h4>
                    <h4 className='ml-2'>CSS</h4>
                </div>
              <div className='flex items-center justify-center font-bold'>
              <a href='https://t.co/yBhX6yPZ4k' target='_blank' className='text-base font-medium hover:text-blue-500'>Source</a>
              <a href='https://t.co/yBhX6yPZ4k' target='_blank' className='ml-3 text-base font-medium hover:text-green-500'>Live</a>
              </div>
            </div>
            <div>
            <img src='./coffe2.jpeg' className='bx-badge-check w-80 h-84' />
                <h2 className='text-2xl text-center font-bold'>Coffe Website</h2>
                <p className='text-base font-bold text-center'>A Coffe shop website</p>
                <div className='flex items-center justify-center font-bold'>
                    <h4 className=''>HTML</h4>
                    <h4 className='ml-2'>Tailwindcss</h4>
                    <h4 className='ml-2'>CSS</h4>
                </div>
                <div className='flex items-center justify-center font-bold'>
                <a href='https://github.com/GOODBADBOY10/Coffe' target='_blank' className='text-base font-medium hover:text-blue-500'>Source</a>
                <a href='https://t.co/Bo4wXTG2jd' target='_blank' className='text-base ml-3 font-medium hover:text-green-500'>Live</a>
                </div> 
            </div>
            <div>
            <img src='./plants.jpeg' className='bx-badge-check w-80 h-84' />
                <h2 className='text-2xl text-center font-bold'>A Plant Website</h2>
                <p className='text-base font-bold text-center'>A clone Plant website</p>
                <div className='flex items-center justify-center font-bold'>
                    <h4 className=''>JavaScript</h4>
                    <h4 className='ml-2'>HTML</h4>
                    <h4 className='ml-2'>CSS</h4>
                </div>
                <div className='flex items-center justify-center font-bold'>
                <a href='https://github.com/GOODBADBOY10/plants' target='_blank' className='text-base font-medium hover:text-blue-500'>Source</a>
                <a href='https://t.co/TLeWWhOWaD' target='_blank' className='ml-3 text-base font-medium hover:text-green-500'>Live</a>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

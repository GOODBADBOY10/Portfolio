import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div>
      <section className='about section' id='portfolio'>
        <h2 className='about_title'>PORTFOLIO</h2>
        <h4 className='about_subtitle'>My Works</h4>
        <div className='portfolio_container py-6 px-14 grid grid-cols-3'>
            <div className=''>
            <img src='./goal.jpg' className='bx-badge-check w-48 h-60' />
                <h2 className='text-lg font-bold'>Goal App</h2>
                <p className='text-base font-medium'>A goal setting app</p>
                <div className='flex items-center'>
                    <h4 className=''>React</h4>
                    <h4 className='ml-2'>Tailwindcss</h4>
                    <h4 className='ml-2'>CSS</h4>
                </div>
              <div className='flex items-center'>
              <a href='https://t.co/yBhX6yPZ4k' target='_blank' className='text-base font-medium hover:text-blue-500'>Source</a>
              <a href='https://t.co/yBhX6yPZ4k' target='_blank' className='ml-3 text-base font-medium hover:text-green-500'>Live</a>
              </div>
            </div>
            <div>
            <img src='./coffe2.jpeg' className='bx-badge-check w-48 h-60' />
                <h2 className='text-lg font-bold'>Coffe Website</h2>
                <p className='text-base font-medium'>A Coffe shop website</p>
                <div className='flex items-center'>
                    <h4 className=''>HTML</h4>
                    <h4 className='ml-2'>Tailwindcss</h4>
                    <h4 className='ml-2'>CSS</h4>
                </div>
                <div className='flex items-center'>
                <a href='https://github.com/GOODBADBOY10/Coffe' target='_blank' className='text-base font-medium hover:text-blue-500'>Source</a>
                <a href='https://t.co/Bo4wXTG2jd' target='_blank' className='text-base ml-3 font-medium hover:text-green-500'>Live</a>
                </div> 
            </div>
            <div>
            <img src='./plants.jpeg' className='bx-badge-check w-48 h-60' />
                <h2 className='text-lg font-bold'>A Plant Website</h2>
                <p className='text-base font-medium'>A clone Plant website</p>
                <div className='flex items-center'>
                    <h4 className=''>JavaScript</h4>
                    <h4 className='ml-2'>HTML</h4>
                    <h4 className='ml-2'>CSS</h4>
                </div>
                <div>
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

import React from 'react'

const Backend = () => {
  return (
    <div className='skills_content'>
    <h3 className='skills_title'>FRAMEWORKS</h3>

    <div className='skills_box'>
      <div className='skills_group'>
          <div className='skills_data'>
            <img src='./tailwind.jpg' className='bx-badge-check w-6 h-6' />
              <div>
                  <h3 className='skills_name'>Tailwind</h3>
              </div>
          </div>

          <div className='skills_data'>
          <img src='./bootstap.jpg' className='bx-badge-check w-6 h-6' />
              <div>
                  <h3 className='skills_name'>Bootstrap</h3>
              </div>
          </div>

          <div className='skills_data'>
          <img src='./react.png' className='bx-badge-check w-6 h-6' />
              <div>
                  <h3 className='skills_name'>React</h3>
              </div>
          </div>

          <div className='skills_data'>
              <img src='./daisyui.jpg' className='bx bx-badge-check w-6 h-6' />
              <div>
                  <h3 className='skills_name'>DaisyUi</h3>
              </div>
          </div>

          
      </div>
      {/* <div className='skills_group'>
          <div className='skills_data'>
              <i class='' bx bx-badge-check></i>
              <div>
                  <h3 className='skills_name'>HTML</h3>
                  <span className='skills_level'>Basic</span>
              </div>
          </div>

          <div className='skills_data'>
              <i class='' bx bx-badge-check></i>
              <div>
                  <h3 className='skills_name'>CSS</h3>
                  <span className='skills_level'>Advanced</span>
              </div>
          </div>

          <div className='skills_data'>
              <i class='' bx bx-badge-check></i>
              <div>
                  <h3 className='skills_name'>JavaScript</h3>
                  <span className='skills_level'>Intermediate</span>
              </div>
          </div>

          <div className='skills_data'>
              <i class='' bx bx-badge-check></i>
              <div>
                  <h3 className='skills_name'>Tailwind</h3>
                  <span className='skills_level'>Intermediate</span>
              </div>
          </div> 
      </div> */}
    </div>


  </div>
  )
}

export default Backend

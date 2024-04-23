import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { FaArrowRight, FaEnvelope, FaPlane, FaSave, FaTwitter, FaVoicemail, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7hsz5uo',
       'template_fmwsokq', 
       form.current, {
        publicKey: 'g5KBDfE8GrrX4Zhhq',
      })
      e.target.reset();
  };

  return (
    <div>
      <section className='contact section' id='contact'>
        <h2 className='section_title'>Get In Touch</h2>
        <h4 className='section_subtitle text-base ml-4'>Contact Me</h4>

        <div className='contact_container container grid'>
          <div className='contact_content'>
            <h3 className='contact_title'>Talk to me</h3>
            <div className='contact_info'>

              <div className='contact_card'>
                <FaEnvelope className='contact_card-icon' />

                <h3 className='contact_card-title'>Email</h3>
                <span className='contact_card-data'>ademolaidris2002@gamil.com</span>

                <a href='mailto:ademolaidris2002@gmail.com' target='_blank' className='contact_button'>Write me <FaArrowRight className='contact_button-icon' /></a>
              </div>

              <div className='contact_card'>
                <FaWhatsapp className='contact_card-icon' />

                <h3 className='contact_card-title'>Whatsapp</h3>
                <span className='contact_card-data'>+2349048411029</span>

                <a href='https://t.co/ekr2ygpAnR' target='_blank' className='contact_button'>Write me <FaArrowRight className='contact_button-icon' /></a>
              </div>

              <div className='contact_card'>
                <FaTwitter className='contact_card-icon' />

                <h3 className='contact_card-title'>Twitter</h3>
                <span className='contact_card-data'>@ademola102</span>

                <a href='https://twitter.com/Ademola102?t=f7nEgMsEjfcPp3jiIyAY_A&s=09' target='_blank' className='contact_button'>Write me <FaArrowRight className='contact_button-icon' /></a>
              </div>

            </div>
          </div>

          <div className='contact_content'>
            <h3 className='contact_title'>Write Me Your Project</h3>

            <form ref={form} onSubmit={sendEmail} className='contact_form'>

              <div className='contact_form-div'>
                <label className='contact_form-tag'>Name</label>
                <input type='text'
                 name='name' 
                 className='contact_form-input'
                  placeholder='Enter your name e.g Ademola Idris' />
              </div>

              <div className='contact_form-div'>
                <label className='contact_form-tag'>Email</label>
                <input type='email'
                 name='email' 
                 className='contact_form-input'
                  placeholder='Enter your email e.g ademolaidris@gmail.com' />
              </div>

              <div className='contact_form-div .contact_form-area'>
                <label className='contact_form-tag'>Projects</label>
                <textarea name='project'
                 cols='30' rows='10' 
                 className='contact_form-input'
                  placeholder='Write your projects'></textarea>
              </div>

              <button href='#contact' className='button button--flex flex items-center'>
        Send Message
        <FaPlane className='ml-3' />
      </button>

            </form>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Contact

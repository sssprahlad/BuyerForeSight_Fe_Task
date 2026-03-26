import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='main-container'>
        <div className='contact-container'>
            <h1 className='home-title'>Contact</h1>
            <div className='contact-info-container'>
              <div className='form-details'>
                <label htmlFor="name">Name</label>
                <input placeholder="Enter your name" type="text" id="name" name="name" />
              </div>
              <div className='form-details'>
                <label htmlFor="email">Email</label>
                <input placeholder="Enter your email" type="email" id="email" name="email" />
              </div>
              <div className='form-details'>
                <label htmlFor="message">Message</label>
                <textarea placeholder="Enter your message" id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" className='sub-button'>Submit</button>

            </div>


        </div>


    </div>
  )
}

export default Contact
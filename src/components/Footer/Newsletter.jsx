import React from 'react'
import Subheading from '../Subheading/Subheading'
import './Newsletter.css';

function Newletter() {
  return (
    <div className='app__newsletter'>
      <div className='app__newletter-heading'>
        <Subheading title="Newsletter" />
        <h1 className='headtext__cormorant'>
       Subscribe to our Newsletter
        </h1>
        <p className='p__opensans'>And never miss latest updates !</p>
      </div>
      <div className='app__newsletter-input flex_center' >
        <input type="email" placeholder='xyz@gmail.com' />
        <button className='custom__button'>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Newletter

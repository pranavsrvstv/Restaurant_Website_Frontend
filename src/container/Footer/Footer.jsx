import React from 'react'
import FooterOverlay from '../../components/Footer/FooterOverlay';
import Newsletter from '../../components/Footer/Newsletter';

import './Footer.css';
import images from '../../constants/images';
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi';
function Footer() {
  return (
    <div className='app__footer section__padding '>
     <FooterOverlay/>
     <Newsletter/>
     <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
            <h1 className='app__footer-headtext'>
                Contact Us
            </h1>
            <p className='p__opensans'>
            570 Hudson Street New York, NY 10014 

            </p>
            <p className='p__opensans'>
            General Inquiries: info@antonsnyc.com

            </p>
            <p className='p__opensans'>
                34598723435
            </p>
        </div>

        <div className='app__footer-links_logo'>
           <img src={images.logo} alt="footer_logo" />
           <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
           <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:'15px'}} />
           <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
        </div>
        <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
     </div>
     <div className='footer__copyright'>
        <p className='p__opensans'>
            2021 Restaurant . All Rigths Reserved
        </p>
     </div>
       
    </div>
  )
}

export default Footer;

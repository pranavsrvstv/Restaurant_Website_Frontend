import React from 'react'
import Subheading from '../../components/Subheading/Subheading';
import images from '../../constants/images';
import './Chef.css'


function Chef() {
  return (
    <div className='app__bg app__wrapper section__padding'>
     <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
     </div>
     <div className='app__wrapper_info'>
      <Subheading title="Chef's Word" ></Subheading>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans' style={{display:'inline'}}>
          Our mission to keep the fun in ice cream. By mixing high quality ingredients with guilty pleasures, traditional flavors with the unexpected, & a youngster's imagination with an adult’s knowing wink & satirical tongue, we spin a new take on the old school ice cream parlor experience. It's both for kids & for those of us who are kids at heart.
          </p>
        </div>
       <div className='app__chef-sign'>
        <p>Pranav Shrivastava</p>
        <p className='p__opensans'>
          Chef and Founder
        </p>
        
       </div>
      </div>
     </div>
    </div>
  )
}

export default Chef

import React from 'react'
import Subheading from '../../components/Subheading/Subheading';
import images from '../../constants/images';
import './Chef.css'


function Chef() {
  return (
    <div className='app__bg app__wrapper section__padding'>
     <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.logo} alt="chef" />
     </div>
     <div className='app__wrapper_info'>
      <Subheading title="Chef's Word" ></Subheading>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.welcome} alt="quote" />
          <p className='p__opensans' style={{display:'inline'}}>
          In publishing and graphic design, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </p>
        </div>
       <div className='app__chef-sign'>
        <p>Pranav Shrivastava</p>
        <p className='p__opensans'>
          Chef and Founder
        </p>
        <img src="images.logo" alt="sign" />
       </div>
      </div>
     </div>
    </div>
  )
}

export default Chef

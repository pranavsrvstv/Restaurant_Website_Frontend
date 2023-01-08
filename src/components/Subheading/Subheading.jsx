import React from 'react'
import images from '../../constants/images'
const Subheading = (props) => {
  return (
    <div style={{marginBottom:'1rem'}}>
        <p className='p__cormorant'>
            {props.title}
        </p>
        <img src={images.logo} alt="spoon" className='spoon__img'></img>
        
    </div>
  )
}

export default Subheading

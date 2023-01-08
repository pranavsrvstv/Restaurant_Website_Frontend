import React from 'react'
import { BsInstagram ,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import { MdStayCurrentLandscape } from 'react-icons/md';
import Subheading from '../../components/Subheading/Subheading'
import { images } from '../../constants'
import './Gallery.css';

const galleryimages=[images.menu,images.logo,images.welcome,images.menu,images.menu]

function Gallery() {
    const scrollRef=React.useRef(null);
    const scroll=(direction)=>{
        const{current}=scrollRef;
        if(direction==='left'){
            current.scrollLeft-=300;
        }
        else{
            current.scrollLeft+=300;
        }
    }
  return (
    <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
            <Subheading title="Instagram"/>
            <h1 className='headtext__cormorant'>Phtoto Gallery</h1>
            <p className='p__opensans' style={{color:'#AAAA',marginTop:'2rem'}}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <button type='button' className='custom__button' >Know More</button>

        </div>
        <div className='app__gallery-images'>
            <div className='app__gallery-images_container' ref={scrollRef}>
            {galleryimages.map((image,index)=>
            <div  className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={image}  alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
            )}
            </div>
            <div className='app__gallery-images_arrows'>
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
                <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
            </div>
        </div>
      
    </div>
  )
}

export default Gallery

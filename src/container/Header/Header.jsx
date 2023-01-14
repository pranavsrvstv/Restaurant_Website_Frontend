import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import images from '../../constants/images';
import './Header.css';
const header = () => {
    return (

        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <Subheading title="Chase a new flavour"/>
                
                <h1 className='app__header-h1'>
                    The key to fine dining
                </h1>
                <p className='p__opensans' style={{margin:'0 1rem'}}>Our menu spotlights a seasonal selection of salads, vegetables, and NY-harvested shellfish.Seafood, chops, and side dishes celebrate iconic recipes from a bygone era, along with a variety of house-made pastas. </p>
                <button type='button' className='custom__button'>Explore</button>
            </div>
            <hr className='app__wrapper_verticalalbar'/>
            
            <div className="app__wrapper_img">
                <img src={images.welcome}></img>
            </div>
        </div>
    );
}

export default header

import React from 'react'
import images from '../../constants/images'
import Subheading from '../../components/Subheading/Subheading'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='app__aboutus app__bg flex__center section__padding' id='about'>
            {/* <div className='app__aboutus-overlay flex__center'>
                <img src={images.logo} alt="G"></img>
            </div> */}
            <div className='app__aboutus-content flex__center'>
                <div className='app__aboutus-content_about '>
                    <h1 className='headtext__cormorant'>About <br/>Us</h1>
                    <img src={images.spoon} alt="spoon" className="spoon__img"></img>
                    <p className='p__opensans'> Mc.D is a nostalgic New York café and wine bar in the heart of the West Village. The vision of Chef Nick Anderer and General Manager/Beverage Director Natalie Johnson.
                    </p>
                    <button type='button' className='custom__button'>Know More</button>

                </div>
                <div className=' flex__center app__aboutus-content_knife '>
                   <img src={images.knife}></img>

                </div>
                <div className='app__aboutus-content_history '>
                    <h1 className='headtext__cormorant'>Our History</h1>
                    <img src={images.spoon} alt="spoon" className="spoon__img"></img>
                    <p className='p__opensans'> The restaurant's design evokes the warmth and casual elegance of the quintessential New York restaurants and bars that serve as our inspiration, updated for today. 
                    </p>
                    <button type='button' className='custom__button'>Explore</button>

                </div>

            </div>
        </div>
    )
}

export default AboutUs

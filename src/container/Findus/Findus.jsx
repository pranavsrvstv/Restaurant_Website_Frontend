import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import { images } from '../../constants'
function Findus() {
    return (
        <div className='app__bg app__wrapper section__padding'>
            <div className='app__wrapper_info'>
                <Subheading title="Contact" />
                <h1 className='headtext__cormorant' style={{ marginBottom: "3rem" }} />
                <div className='app__wrapper-content'>
                    <p className='p__opensans'>
                        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.

                    </p>
                    <p className='p__cormorant' style={{ color: '#DCCA87', margin: "1rem 0rem" }}>
                        Opening hours
                    </p>

                    <p className='p__opensans' style={{ color: '#DCCA87', margin: "1rem 0rem" }}>
                       Monday to Saturday
                    </p>
                    <p className='p__opensans' style={{ color: '#DCCA87', margin: "1rem 0rem" }}>
                        3pm to 9pm
                    </p>
                </div>
                <button className='custom__button' style={{marginTop:'1rem'}} > 
                Visit Us
                </button>


            </div>
            <div className='app__wrapper_img'>
                <img src={images.logo} alt="findus" />
            </div>
        </div>
    )
}

export default Findus

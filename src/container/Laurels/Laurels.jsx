import React from 'react'
import './Laurels.css'
import Subheading from '../../components/Subheading/Subheading';
import MenuItem from '../../components/MenuItem/MenuItem';
import images from '../../constants/images'
import data from '../../constants/data';

const AwardCard=({award:{imgUrl,title,subtitle}})=>(
  <div className='app__laurels_awards-card'>
    <img src={images.welcome} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:"#DCCA87"}}>
     {title}
      </p>
      <p className='p__cormorant' style={{color:"#DCCA87"}}>
     {subtitle}
      </p>
    </div>
  </div>
)
function Laurels() {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
         <Subheading title="Awards & Recognition"/>
         <h1 className='headtext__cormorant'>Our Laurels</h1>
         <div className='app__laurels_awards'>
          {data.awards.map((award)=>
            <AwardCard award={award} key={award.title}/>)}
         </div>
      </div>
      <div className='app__wrapper_img'>
           <img src={images.logo} alt="foodimg" />
      </div>
      {/* 2:13 */}
    </div>
  )
}

export default Laurels

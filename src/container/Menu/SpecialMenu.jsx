import React from 'react'
import './SpecialMenu.css';
import Subheading from '../../components/Subheading/Subheading';
import MenuItem from '../../components/MenuItem/MenuItem';
import images from '../../constants/images'
import data from '../../constants/data'

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
        <div className='app__specialMenu-title'>
            <Subheading title="Explore curated lists of top wines and cocktails based on trends"/>
            <h1 className='headtext__cormorant'>Todays Special</h1>
        </div>
        <div className='app__specialMenu-menu'>
            <div className='app__specialMenu-menu_wine flex__center'>
                <p className='app__specialMenu-menu_heading'>Wine and Beer</p>
                <div className='app__specialMenu-menu-items'>
                   {data.wines.map((wine,index)=>(
                       <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags}/>
                   ))}
                </div>
            </div>
            <div className='app__specialMenu-menu_img'>
                <img src={images.menu}></img>

            </div>
            <div className='app__specialMenu-menu_cocktails flex__center'>
                <p className='app__specialMenu-menu_heading'>Cocktails</p>
                <div className='app__specialMenu-menu-items'>
                   {data.wines.map((cocktail,index)=>(
                       <MenuItem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                   ))}
                </div>
            </div>
        </div>
        <div style={{marginTop:'15px'}}>
            <button type='button' className='custom__button'>View More</button>

        </div>
      
    </div>
  )
}

export default SpecialMenu

import React from 'react'
import './Fooditem.css'
import { assets } from './../../assets/assets/frontend_assets/assets';
const Fooditem = (_id,name,image,price,description,category) => {

  return (
    <div>
        <div className="food_item">
            <div className="food_item_image_container">
                <img className="food_item_image" src={image} alt="" />
            </div>
            <div className='food_item_info'>
              <div className='food_item_name_rating'>
                <p>{name}</p>
                  <img src={assets.rating_starts} alt="" />
              </div>
              <p className='food_item_desc'>{description}</p>
              <p className='food_item_price'>{price}</p>

            </div>
        </div>
      
    </div>
  )
}

export default Fooditem

import React from 'react'
import './ExploreMenue.css'

import { menu_list } from './../../assets/assets/frontend_assets/assets';

const ExploreMenue = ({category,setCategory}) => {


  return (

    <>
    <div className="explore_menue" id="explore_menue">
        <h1>Exploe Menue</h1>
        <p className="explore_menue_text">Choose from a diverse menue featuring a delectable array of dishes crafted with the  finest ingredients and culinary expertise.Our mission  is to satisfy your carvings and elevate your dining experience,one delicious meal at a time.</p>
        <div className="explore_menue_list">
            {menu_list.map((item,index)=>{
               return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore_menue_list_items'>
                    <img className={category===item.menu_name?"Active":""} src={item.menu_image}  alt="" />
                    <p>{item.menu_name}</p>
                </div>
               )
            })}
        </div>
        <hr />
    </div>
    </>
   
  )
}

export default ExploreMenue

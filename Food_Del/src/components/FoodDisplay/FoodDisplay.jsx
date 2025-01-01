import React, { useContext } from 'react'
import'./FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../FoodItem/Fooditem'
const FoodDisplay = (category) => {
    const {food_list}=useContext(StoreContext)
  return (
    <> 
    <div className='Food_display' id='Food_display'>
        <h2>Top dishes near by you</h2>
        <div className="Food_display_list">
            {food_list.map((item,index)=>{
              return( <Fooditem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
            )})}
        </div>
      
    </div>
    </>
   
  )
}

export default FoodDisplay

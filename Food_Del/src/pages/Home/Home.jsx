import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExploreMenue from '../../components/ExploreMenue/ExploreMenue.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenue category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>  
    </div>
  )
}

export default Home

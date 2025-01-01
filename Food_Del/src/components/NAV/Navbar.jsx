import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets/frontend_assets/assets.js'
const Navbar = () => {
  const[menu,setmenu]=useState("Mobile-App")
  
  return (
   <>
   <div className='navbar'>
   <img src={assets.logo} alt="" className="logo" />
   <ul className="navmanu" >  
   <li onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</li>
   <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</li>
   <li onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
   <li onClick={()=>setmenu("Contect-us")} className={menu==="Contect-us"?"active":""}>Contect-us</li>
   </ul>
   <div className="nav_right"> 
    <img src={assets.search_icon} alt="" />
    <div className="nav_search_icon">
     <img src={assets.basket_icon} alt="" />
     <div className="dot"></div>
    </div>
    <button >Signin</button>
   </div>
   </div>
   </>
  )
}

export default Navbar
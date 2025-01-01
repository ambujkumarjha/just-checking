import React from 'react'
import "./Header.css"
const Header=()=>{


    return(
        <div>
            <header>
            <nav className='flexSB'>
            <ul className='flexSB'>
                <li>Home</li>
                <li>All courses</li>
                <li>About</li>
                <li>Team</li>
                <li>Placement</li>
                <li>contract</li>
            </ul>
            <div className='start'>
                <div className='button'>GET-STARTED</div>
            </div>


            </nav>
            </header>
           
        </div>
    )
}
export default Header
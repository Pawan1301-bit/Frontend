//we cannot use navbar we have to use Navbar becoz the react treat the lower case as html element
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return ( 
    <div>    
      <nav>
        <ul>
            <li>Home</li>
            <li>about</li>
            <li>Contact</li> 
        </ul>
       </nav>
    </div>
  )
}

export default Navbar

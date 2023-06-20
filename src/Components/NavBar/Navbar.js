import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
    <div className='navbarcontainer'>
      <i id='hamburger' class="fa-solid fa-bars"></i>
        <nav className="navbar">
            <ul>
                <li id='logo'>Shortly</li>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Resource</li>
            </ul>
            <div className="btns">
                <button id='login'>Login</button>
                <button id='signup'>Sign Up</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react'



function Navbar() {
  return (
    <div>
        <nav>
            <div className='logo'>
                <img src='../Image/logo.png' />
            </div>
            <ul>
              <li href="#" >Menu</li>
              <li href="#" >Location</li>
              <li href="#" >About</li>
              <li href="#" >Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
  )
}

export default Navbar
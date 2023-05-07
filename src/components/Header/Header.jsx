import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <>
      <header>
        <span>Header</span>
        <div className='navContainer'> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        </div>
      </header>
    </>
  )
}

export default Header
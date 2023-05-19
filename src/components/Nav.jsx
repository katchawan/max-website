import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='nav--container'>
        <h1>max dawson</h1>
        <div className='link--container'>
          <Link to='/'>PROJECTS</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/contact'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Nav
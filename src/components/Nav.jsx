import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='nav--container'>
        <h1>Max Dawson</h1>
        <div className='link--container'>
          <Link to='/'>Projects</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Nav
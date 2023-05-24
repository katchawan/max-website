import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom';
const Nav = (props) => {
  const { setIsNavbarClick, isNavbarClick } = props
  console.log('navbard', isNavbarClick)
  return (
    <div className='nav--container'>
        <h1>max dawson</h1>
        <div className='link--container'>
          <Link 
            onClick={() => window.location = 'mailto:maxdawsonvfx@gmail.com'}
            className='mail--icon'
            >&#9993;
          </Link>
          <a 
            className='linked--in' 
            href="https://www.linkedin.com/in/max-dawson-36134512a"
            target="_blank"
            rel="noreferrer"
            >in
          </a>
          <Link 
            to='/'
            onClick={() => setIsNavbarClick(true)}
            >PROJECTS
          </Link>
          <Link 
            to='/contact'
            onClick={() => setIsNavbarClick(true)}
            >CONTACT
          </Link>
        </div>
    </div>
  )
}

export default Nav
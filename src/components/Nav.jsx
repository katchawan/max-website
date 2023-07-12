import React, { useState } from 'react'
import '../css/Nav.css'
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const navigate = useNavigate()
  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  const projectNavigate = () => {
    toggleDropDown()
    navigate('/')
  }

  const contactNavigate = () => {
    toggleDropDown()
    navigate('/contact')
  }


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

      <div className='project--contact--links'>
      <Link className='project--link' to='/'>PROJECTS</Link>
      <Link to='/contact'>CONTACT</Link>
      </div>

      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleDropDown}>
        &#9776;
      </div>
      {isOpen && (
          <div className='dropdown'>

            <div className='dropdown--project' onClick={projectNavigate}>
              PROJECTS
            </div>

            <div className='dropdown--project' onClick={contactNavigate}>
              CONTACT
            </div>

          </div>
        )}
    </div>
  )
}

export default Nav
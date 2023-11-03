import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom';
import insta from '../assets/photos/insta.png'

const Nav = () => {


  return (
  <div className='nav--container'>
    <h1
    >max dawson
    </h1>
      <div className='link--container'>
        <a href="https://www.instagram.com/maxvdawson/" target="_blank" rel="noreferrer">
        <img src={insta} className="insta--logo" alt="instalogo"/>
      </a>
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
      </div>   
  </div>
  )
}

export default Nav
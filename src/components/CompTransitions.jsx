import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
    Contact,
    Home,
    ProjectView 
} from './index';

const CompTransitions = (props) => {
  const location = useLocation();
  const [ authenticated, setAuthenticated] = useState(false)
  const { isNavbarClick, setIsNavbarClick} = props
  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home setAuthenticated={setAuthenticated}/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projectView/:id' element={<ProjectView setIsNavbarClick={setIsNavbarClick} authenticated={authenticated} isNavbarClick={isNavbarClick}/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default CompTransitions
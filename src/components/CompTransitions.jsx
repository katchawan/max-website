import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
    Contact,
    Home,
    ProjectView 
} from './index';

const CompTransitions = () => {
  const location = useLocation();
  const [ authenticated, setAuthenticated ] = useState(false)

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home setAuthenticated={setAuthenticated}/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projectView/:id' element={<ProjectView authenticated={authenticated} />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default CompTransitions
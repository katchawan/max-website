import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
    About,
    Contact,
    Footer,
    Home,
    ProjectView 
} from './index';


const CompTransitions = () => {

    const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projectView/:id' element={<ProjectView />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default CompTransitions
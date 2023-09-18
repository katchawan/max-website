import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
    Home,
    Labs
} from './index';

const CompTransitions = () => {
  const location = useLocation();

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/labs' element={<Labs />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default CompTransitions
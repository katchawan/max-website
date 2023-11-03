import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import  Nav  from './components/Nav'
import  Home  from './components/Home';

const App = () => {

  return (
    <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
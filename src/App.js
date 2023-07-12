import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Nav } from './components'
import CompTransitions from './components/CompTransitions';

const App = () => {
  const [isNavbarClick, setIsNavbarClick] = useState(false);
  return (
    <div className="App">
    <Router>
      <Nav setIsNavbarClick={setIsNavbarClick} isNavbarClick={isNavbarClick}/>
      <CompTransitions isNavbarClick={isNavbarClick} setIsNavbarClick={setIsNavbarClick}/>
    </Router>
    </div>
  );
}

export default App;
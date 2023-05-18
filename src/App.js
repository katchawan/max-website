import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Nav } from './components'
import CompTransitions from './components/CompTransitions';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Nav />
      <CompTransitions />
    </Router>
    </div>
  );
}

export default App;

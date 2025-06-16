import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import MenuBar from './Components/menu/MenuBar';
import ScrollProgress from './Components/progress/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className=''>
        <ScrollProgress />
        <MenuBar /> 
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

import MenuBar from './Components/menu/MenuBar';
import ScrollProgress from './Components/progress/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import ScrollAnimationHandler from './Components/common/ScrollAnimationHandler';
import Latest from './pages/Latest';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className=''>
         <ScrollAnimationHandler/>
        <ScrollProgress />
        <MenuBar /> 
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/contact' element={<Contact/> } />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

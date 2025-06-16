import React from 'react'
import "./App.css"

import MenuBar from './Components/menu/MenuBar'
import ScrollProgress from './Components/progress/ScrollProgress'
import Home from './pages/Home'

const App = () => {
  return (
    <div className=''>
      <ScrollProgress/>
      <Home/>
    
    </div>
  )
}

export default App
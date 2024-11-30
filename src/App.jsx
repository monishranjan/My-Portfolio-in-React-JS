import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LeafCursor from './components/Cursor/LeafCursor'
import UnderDevelopment from './components/UnderDevelopmentSticker'

function App() {
  return (
    <BrowserRouter>
      {/* <LeafCursor/> */}
      <UnderDevelopment />
      <Home/>
    </BrowserRouter>
  )
}

export default App
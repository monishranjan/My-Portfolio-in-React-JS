import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import LeafCursor from './components/Cursor/LeafCursor'
import UnderDevelopment from './components/UnderDevelopmentSticker'

function App() {
  return (
    <>
      {/* <LeafCursor/> */}
      <UnderDevelopment />
      <Home/>
    </>
  )
}

export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WorkItem from './components/Home/WorkListing';
import BankOfIndiaRedesign from './pages/UISideProject/boiRedesignProject';
// import UXDesignProject from './pages/UXDesignProject';
// import BrandIdentityDesign from './pages/BrandIdentityDesign';
import LeafCursor from './components/Cursor/LeafCursor';
import UnderDevelopment from './components/UnderDevelopmentSticker';

function App() {
  return (
    <Router>
      {/* Optional Cursor Component */}
      {/* <LeafCursor /> */}
      <UnderDevelopment />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Work Items Route */}
        <Route path="/work" element={<WorkItem />} />

        {/* Individual Project Pages */}
        <Route path="/projects/bank-of-india-redesign" element={<BankOfIndiaRedesign />} />
        {/* <Route path="/projects/ux-design-project" element={<UXDesignProject />} /> */}
        {/* <Route path="/projects/brand-identity-design" element={<BrandIdentityDesign />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

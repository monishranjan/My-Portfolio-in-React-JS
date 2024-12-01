import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GraphicDesign from "./pages/HomeGraphics"; // This is the new page you need to create
import Landing from "./pages/Landing";
import UnderDevelopment from "./components/UnderDevelopmentSticker";

function App() {
  return (
    <BrowserRouter>
      <UnderDevelopment />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

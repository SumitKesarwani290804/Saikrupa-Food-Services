import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoPage from "./components/VideoPage";
import Homepage from "./pages/Homepage";
import MenuSection from "./components/Our-menu-section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/menu-section" element={<MenuSection />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

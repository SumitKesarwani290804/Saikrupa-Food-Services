import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./components/VideoPage";
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< VideoPage />} />
        <Route path='/homepage' element={< Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

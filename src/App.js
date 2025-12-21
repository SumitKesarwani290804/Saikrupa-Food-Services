import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./components/VideoPage";
import Navbar from "./components/Navbar";
import './App.css';
import Imagesilder from './components/Imagesilder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< VideoPage />} />
        <Route path='/navbar' element={< Navbar />} />
        <Route path='/image' element={< Imagesilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

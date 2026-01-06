import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoPage from "./components/VideoPage";
import Homepage from "./pages/Homepage";
import MenuSection from "./components/Our-menu-section";
import GetInTouch from "./components/Get-in-touch-section";
import FullMenuPage from "./pages/Full-menu-page";
import About from "./pages/Aboutpage";
import OrderPage from "./pages/OrderPage";

import { CartProvider } from "./Context/Cart-context.jsx"; // 👈 NEW
import CartPage from "./pages/CartPage.jsx";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/About-Page" element={<About />} />
          <Route path="/menu-section" element={<MenuSection />} />
          <Route path="/Get-in-Touch" element={<GetInTouch />} />
          <Route path="/full-menu" element={<FullMenuPage />} />
          <Route path="/Order-Page/:id" element={<OrderPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

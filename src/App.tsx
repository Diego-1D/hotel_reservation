import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import HotelList from "./pages/HotelList/HotelList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotellist" element={<HotelList />} />
        <Route path="/hotellist:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

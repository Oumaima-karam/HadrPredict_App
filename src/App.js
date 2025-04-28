import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GeoCarte from "./pages/GeoCart";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/GeoCarte" element={<GeoCarte />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

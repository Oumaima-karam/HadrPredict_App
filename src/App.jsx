import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Cartegraphique/HomePage";
import GeoCarte from "./pages/Cartegraphique/GeoCart";
import LoginPage from "./pages/Cartegraphique/LoginPage";
import FormPage from "./pages/Formulaire/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/GeoCarte" element={<GeoCarte />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/FormPage" element={<FormPage />} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

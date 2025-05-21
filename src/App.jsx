import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/Cartegraphie/HomePage";
import GeoCarte from "./pages/Cartegraphie/GeoCart";
import LoginPage from "./pages/Login/LoginPage";
import FormPage from "./pages/Formulaire/FormPage";
import SignupPage from "./pages/Signup/SignupPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/GeoCarte" element={<GeoCarte />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/FormPage" element={<FormPage />} ></Route>
        <Route path="/SignupPage" element={<SignupPage />} ></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;

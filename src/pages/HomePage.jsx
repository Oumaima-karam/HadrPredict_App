import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../components/Assets/logoo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const goToSecondPage = () => {
    navigate("/GeoCarte");
  };
  const goTOSignIn = () => {
    navigate("/LoginPage");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={logo} alt="Logo" style={{ width: "150px" }} />
      <button
        style={{
          backgroundColor: "#3B82F6", // bleu
          color: "white",
          marginTop: "16px",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={goToSecondPage}
      >
        Voir la carte
      </button>
      <button
        style={{
          backgroundColor: "#3B82F6",
          color: "white",
          marginTop: "16px",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={goTOSignIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default HomePage;

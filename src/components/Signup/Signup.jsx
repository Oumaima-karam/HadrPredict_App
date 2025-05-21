import React from "react";
import "./Signup.css";
import logo from "../Assets/logoo.png";
import { Link } from "react-router-dom";

const Signup = () => {
return (
    <div className="signup-container">
    <div className="signup-header">
        <img src={logo} alt="logo" />
    </div>
    <div className="inputs">
        <div className="input">
        <label htmlFor="email">Email :</label>
        <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // required
        />
        </div>
        <div className="input">
        <label htmlFor="password">Mot de passe :</label>
        <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // required
        />
        </div>
        <div className="input">
        <label htmlFor="password">Confirmer le mot de passe :</label>
        <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // required
        />
        </div>
    </div>
    <div className="submit-container">Sign up</div>
    </div>
);
};

export default Signup;

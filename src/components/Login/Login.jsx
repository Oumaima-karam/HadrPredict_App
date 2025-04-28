import React from "react";
import "./Login.css";
import logo from "../Assets/logoo.png";
import { Link } from "react-router-dom";

const Login = () => {
return (
    <div className="login-container">
    <div className="login-header">
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
    </div>

    <div className="form-options">
        <label className="remember-me">
        <input
            type="checkbox"
            id="rememberMe"
            // checked={rememberMe}
            // onChange={(e) => setRememberMe(e.target.checked)}
        />
        <span className="checkmark"></span>
        Se souvenir de moi
        </label>
        <Link to="/forgot-password">Mot de passe oublié ?</Link>
    </div>
    <div className="submit-container">Login</div>
    </div>
);
};

export default Login;

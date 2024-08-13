import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../js/axiosConfig";
import "../css/SignUp.css";
import logo from "../images/logo/logo.jpeg";
import formImage from "../images/auth.jpeg";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("farmer"); // default valid role
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/signup/",
        { username, password, email, role },
        { withCredentials: true }
      )
      .then(() => {
        console.log("Created");
        alert("Registration successful !")
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error)
        setError("Error: "+error);
      });
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="App Logo" className="app-logo" />
      <form onSubmit={handleSubmit}>
        <img src={formImage} alt="Form Image" className="form-image" />
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="farmer">Farmer</option>
          <option value="buyer">buyer</option>
        </select>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
        <div className="links">
          <a href="/signin">Sign In</a> |{" "}
          <a href="/forget-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

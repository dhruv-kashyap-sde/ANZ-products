import React, { useState } from "react";
import "./Loginpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_API_URL}/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    if (data.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
    console.log(data);
  };

  return (
    <div className="login-form-container">
      <div className="login-card">
        <h2> Admin Login</h2>
        <form>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button onClick={handleSubmit} className="basic-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;

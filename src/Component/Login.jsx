import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`container ${active ? "active" : ""}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Welcome Back!</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <span>♟</span>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <span>🔒</span>
          </div>

          <div className="forgot-link">
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button className="btn" onClick={() => navigate("/home")}>
            Login
          </button>

          <p>Or login with social platforms</p>

          <div className="social-icons">
            <a href="#google">G</a>
            <a href="#facebook">f</a>
            <a href="#github">GH</a>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Create Account</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <span>♟</span>
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <span>✉</span>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <span>🔒</span>
          </div>

          <button className="btn">Register</button>

          <p>Or register with social platforms</p>

          <div className="social-icons">
            <a href="#google">G</a>
            <a href="#facebook">f</a>
            <a href="#github">GH</a>
          </div>
        </form>
      </div>

      {/* Animated Toggle Section */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Welcome to Our Restaurant!</h1>
          <p>Don't have an account?</p>
          <button className="btn" onClick={() => setActive(true)}>
            Register
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn" onClick={() => setActive(false)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

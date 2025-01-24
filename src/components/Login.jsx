import "../styles/login.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const resetpwBTN = document.querySelector("#resetpw");
    resetpwBTN.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#loginForm").style.display = "none";
      document.querySelector("#resetpwForm").style.display = "flex";
    });
    const createNewAccBTN = document.querySelector("#createNewAcc");
    createNewAccBTN.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("/signup");
    });
  }, []);
  return (
    <main id="login">
      <div id="main">
        <h1 style={{ color: "gold" }}>Scholar Ease Login Page</h1>
        <form id="loginForm">
          <input type="text" name="uid" id="uid" placeholder="UID:" />
          <input type="password" name="pw" id="pw" placeholder="Password:" />
          <div style={{ display: "flex", gap: "30px" }}>
            <button id="createNewAcc">Create New Account</button>
            <button id="resetpw">Reset Password</button>
          </div>
          <button>Login</button>
        </form>

        <form id="resetpwForm" style={{ display: "none" }}>
          <input
            type="email"
            name="resetpwEmail"
            id="resetpwEmail"
            placeholder="Email:"
          />
          <input
            type="text"
            name="resetpwOTP"
            id="resetpwOTP"
            maxLength="6"
            placeholder="OTP:"
          />
          <button>Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Login;

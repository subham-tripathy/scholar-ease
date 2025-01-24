import "../styles/login.css";
import { validateEmail, validateIndianPhoneNumber } from "./functions";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      uid.trim() === "" ||
      email.trim() === "" ||
      phno.trim() === "" ||
      pw.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }
    if (!validateEmail(email)) {
      alert("invalid email");
      return;
    }
    if (!validateIndianPhoneNumber(phno)) {
      alert("invalid phone number");
      return;
    }
  };
  return (
    <main id="login">
      <div id="main">
        <h1 style={{ color: "gold" }}>Scholar Ease Login Page</h1>
        <form id="signUpForm">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name:"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            name="uid"
            id="uid"
            placeholder="UID:"
            onChange={(e) => {
              setUid(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email:"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="number"
            name="phno"
            id="phno"
            placeholder="Phone No:"
            onChange={(e) => {
              setPhno(e.target.value);
            }}
          />
          <input
            type="password"
            name="pw"
            id="pw"
            placeholder="Password:"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <button
            id="signUpBTN"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;

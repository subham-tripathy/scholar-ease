import { useNavigate } from "react-router-dom";
import {
  BACKEND_BASE_URL,
  validateEmail,
  validateIndianPhoneNumber,
} from "./functions";
import React, { useContext, useEffect, useState } from "react";
import { loggedInContext } from "../contexts";

const Signup = () => {
  const navigate = useNavigate();
  const globalContext = useContext(loggedInContext);
  useEffect(() => {
    if (globalContext.loggedIn) {
      navigate("/dashboard");
    }
  });

  document.title = "Scholar Ease - Sign Up";
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
    fetch(BACKEND_BASE_URL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, uid, email, phno, pw }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          globalContext.setLoggedIn(true);
          localStorage.setItem("scholar-ease-uid", uid);
          navigate("/dashboard");
        } else if (data.status === "user exists") {
          alert("User already exists!");
        } else {
          alert("Sign Up Failed!");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Sign Up Failed!");
      });
  };
  return (
    <main className="flex flex-col items-center bg-gray-200 min-h-[92vh]">
      <div className="shadow-black shadow rounded-xl w-[25%] px-10 py-7 my-5 bg-white">
        <h1 className="text-xl mb-5">Scholar Ease Sign Up Page</h1>
        <form id="signUpForm" className="flex flex-col">
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="border rounded text-md mb-4 p-2"
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-sm" htmlFor="uid">
            Username
          </label>
          <input
            className="border rounded text-md mb-4 p-2"
            type="text"
            name="uid"
            id="uid"
            onChange={(e) => {
              setUid(e.target.value);
            }}
          />
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded text-md mb-4 p-2"
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="text-sm" htmlFor="phno">
            Phone Number
          </label>
          <input
            className="border rounded text-md mb-4 p-2"
            type="number"
            name="phno"
            id="phno"
            onChange={(e) => {
              setPhno(e.target.value);
            }}
          />
          <label className="text-sm" htmlFor="pw">
            Password
          </label>
          <input
            className="border rounded text-md mb-4 p-2"
            type="password"
            name="pw"
            id="pw"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <button
            className="cursor-pointer bg-[#4285F4] text-lg text-white rounded-md py-2"
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

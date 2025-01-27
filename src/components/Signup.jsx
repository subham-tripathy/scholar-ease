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
    <main className="flex flex-col items-center bg-gray-200 h-[90vh]">
      <div className="shadow-black shadow rounded-3xl w-[30%] p-10 mt-14 bg-white">
        <h1 className="text-4xl mb-10">Scholar Ease Sign Up Page</h1>
        <form id="signUpForm" className="flex flex-col">
          <label className="text-lg" htmlFor="name">
            Name
          </label>
          <input
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-lg" htmlFor="uid">
            Username
          </label>
          <input
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
            type="text"
            name="uid"
            id="uid"
            onChange={(e) => {
              setUid(e.target.value);
            }}
          />
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="text-lg" htmlFor="phno">
            Phone Number
          </label>
          <input
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
            type="number"
            name="phno"
            id="phno"
            onChange={(e) => {
              setPhno(e.target.value);
            }}
          />
          <label className="text-lg" htmlFor="pw">
            Password
          </label>
          <input
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
            type="password"
            name="pw"
            id="pw"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <button
            className="bg-[#4285F4] text-2xl text-white rounded-lg py-2"
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

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
    <main className="flex flex-col items-center bg-gray-200 h-[90vh]">
      <div className="shadow-black shadow rounded-3xl w-[30%] p-10 mt-30 bg-white">
        <h1 className="text-4xl mb-10">Scholar Ease Login Page</h1>
        <form id="loginForm" className="flex flex-col">
          <label className="text-lg" htmlFor="uid">
            Username
          </label>
          <input
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
            type="text"
            name="uid"
            id="uid"
          />
          <label className="text-lg" htmlFor="pw">
            Password
          </label>
          <input
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
            type="password"
            name="pw"
            id="pw"
          />
          <button className="cursor-pointer bg-[#4285F4] text-2xl text-white rounded-lg py-2 mb-6">
            Login
          </button>
          <div className="flex justify-between">
            <button
              style={{ textShadow: "0.4px 0.4px black" }}
              className="cursor-pointer text-[#4285F4] text-xl"
              id="createNewAcc"
            >
              Create New Account
            </button>
            <button
              style={{ textShadow: "0.4px 0.4px black" }}
              className="cursor-pointer text-[#4285F4] text-xl"
              id="resetpw"
            >
              Reset Password
            </button>
          </div>
        </form>

        <form id="resetpwForm" className="hidden flex-col">
          <label className="text-lg" htmlFor="resetpwEmail">
            Email:
          </label>
          <input
            type="email"
            name="resetpwEmail"
            id="resetpwEmail"
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
          />
          <button
              style={{ textShadow: "0.4px 0.4px black" }}
              className="cursor-pointer text-[#4285F4] text-xl"
              id="resetpw"
            >
              Send OTP
            </button>
          <label className="text-lg" htmlFor="resetpwOTP">
            OTP:
          </label>
          <input
            type="text"
            name="resetpwOTP"
            id="resetpwOTP"
            maxLength="6"
            className="border rounded-lg text-3xl mb-6 px-4 py-2"
          />
          <button className="cursor-pointer bg-[#4285F4] text-2xl text-white rounded-lg py-2 mb-6">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;

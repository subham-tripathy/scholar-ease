import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL, errorToast, successToast } from "./functions";
import { loggedInContext } from "../contexts";

const Login = () => {
  const globalContext = useContext(loggedInContext);
  document.title = "Scholar Ease - Login";
  const navigate = useNavigate();
  useEffect(() => {
    if (globalContext.loggedIn) {
      navigate("/dashboard");
    }
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

    const loginFormBTN = document.querySelector("#loginForm>button");
    loginFormBTN.addEventListener("click", (e) => {
      e.preventDefault();
      const uid = document.querySelector("#uid").value;
      const pw = document.querySelector("#pw").value;
      fetch(BACKEND_BASE_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, pw }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            globalContext.setLoggedIn(true);
            localStorage.setItem("scholar-ease-uid", uid);
            successToast("Logged In Successfully");
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          } else if (data.status === "success-admin") {
            globalContext.setLoggedIn(true);
            localStorage.setItem("scholar-ease-uid", uid);
            successToast("Admin Logged In Successfully");
            setTimeout(() => {
              navigate("/admin");
            }, 2000);
          } else if (data.status === "no user") {
            errorToast("No User Found");
          } else if (data.status === "pw error") {
            errorToast("Incorrect Password");
          } else {
            errorToast("Invalid Username or Password");
          }
        });
    });
  }, []);
  return (
    <main className="flex flex-col items-center bg-gray-200 h-[92vh]">
      <div className="shadow-black shadow rounded w-[25%] p-10 mt-10 bg-white">
        <h1 className="text-xl mb-10">Scholar Ease Login Page</h1>
        <form id="loginForm" className="flex flex-col">
          <label className="text-sm" htmlFor="uid">
            Username
          </label>
          <input
            className="border rounded-md text-md mb-6 p-2"
            type="text"
            name="uid"
            id="uid"
            placeholder="Username:"
          />
          <label className="text-sm" htmlFor="pw">
            Password
          </label>
          <input
            className="border rounded-md text-md mb-6 p-2"
            type="password"
            name="pw"
            id="pw"
            placeholder="Password:"
          />
          <button className="cursor-pointer bg-[#4285F4] text-lg text-white rounded-md py-2 mb-6">
            Login
          </button>
          <div className="flex justify-between">
            <button
              style={{ textShadow: "0.4px 0.4px black" }}
              className="cursor-pointer text-[#4285F4] text-sm"
              id="createNewAcc"
            >
              Create New Account
            </button>
            <button
              style={{ textShadow: "0.4px 0.4px black" }}
              className="cursor-pointer text-[#4285F4] text-sm"
              id="resetpw"
            >
              Reset Password
            </button>
          </div>
        </form>

        <form id="resetpwForm" className="hidden flex-col">
          <label className="text-sm" htmlFor="resetpwEmail">
            Email:
          </label>
          <input
            type="email"
            name="resetpwEmail"
            id="resetpwEmail"
            className="border rounded-md text-md mb-6 p-2"
          />
          <button
            style={{ textShadow: "0.4px 0.4px black" }}
            className="cursor-pointer text-[#4285F4] text-xl"
            id="resetSendOTP"
          >
            Send OTP
          </button>
          <label className="text-sm" htmlFor="resetpwOTP">
            OTP:
          </label>
          <input
            type="text"
            name="resetpwOTP"
            id="resetpwOTP"
            maxLength="6"
            className="border rounded-md text-md mb-6 p-2"
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

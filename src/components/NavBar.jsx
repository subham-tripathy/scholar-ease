import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { loggedInContext } from "../contexts";

const NavBar = () => {
  const globalContext = useContext(loggedInContext);
  const openMenu = () => {
    document.querySelectorAll("button>img")[0].classList.add("hidden");
    document.querySelectorAll("button>img")[1].classList.remove("hidden");
    document.querySelector("ul").classList.remove("hidden");
  };
  const closeMenu = () => {
    document.querySelectorAll("button>img")[1].classList.add("hidden");
    document.querySelectorAll("button>img")[0].classList.remove("hidden");
    document.querySelector("ul").classList.add("hidden");
  };
  return (
    <nav className="h-[8vh] flex justify-between items-center py-4 px-8 bg-white sticky top-0 left-0 right-0 z-10">
      <h1 className="text-xl sm:text-4xl font-bold">Scholar Ease</h1>
      <div className="block lg:hidden">
        <button>
          <img
            onClick={() => {
              openMenu();
            }}
            className="h-10"
            src="/images/menu.png"
          />
          <img
            onClick={() => {
              closeMenu();
            }}
            className="hidden h-10"
            src="/images/menu-close.png"
          />
        </button>
      </div>

      <ul className="bg-white not-sm:z-1 not-sm:fixed not-sm:top-19 not-sm:py-5 hidden not-sm:flex-col not-sm:gap-3 not-sm:left-0 not-sm:right-0 not-sm:text-center lg:flex lg:items-center">
        <li>
          <Link
            className="hover:bg-[#4285F4] hover:text-white px-4 py-2 rounded-md text-xl font-bold"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          {globalContext.loggedIn ? (
            <Link
              className="hover:bg-[#4285F4] hover:text-white px-4 py-2 rounded-md text-xl font-bold"
              to="/dashboard"
            >
              {localStorage.getItem("uid")}
            </Link>
          ) : (
            <Link
              className="hover:bg-[#4285F4] hover:text-white px-4 py-2 rounded-md text-xl font-bold"
              to="/login"
            >
              Login
            </Link>
          )}
        </li>
        <li>
          <Link
            className="hover:bg-[#4285F4] hover:text-white px-4 py-2 rounded-md text-xl font-bold"
            to="/schemes"
          >
            Schemes
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-[#4285F4] hover:text-white px-4 py-2 rounded-md text-xl font-bold"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          {globalContext.loggedIn ? (
            <button
              className="hover:bg-[#4285F4] hover:text-white px-4 py-2 rounded-md text-xl font-bold cursor-pointer"
              onClick={() => {
                globalContext.setLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

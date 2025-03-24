import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loggedInContext } from "../contexts";
import { successToast } from "./functions";

const NavBar = () => {
  const navigate = useNavigate();
  const globalContext = useContext(loggedInContext);
  useEffect(() => {
    if (localStorage.getItem("scholar-ease-uid")) {
      globalContext.setLoggedIn(true);
    }
  }, []);

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
    <nav className="h-[8vh] flex justify-between items-center py-4 px-8 sticky top-0 left-0 right-0 z-10 bg-blue-700 text-white">
      <h1 className="text-xl sm:text-3xl font-bold">Scholar Ease</h1>
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

      <ul className="not-sm:z-1 not-lg:fixed not-lg:top-19 not-lg:py-5 hidden not-lg:flex-col not-lg:gap-3 not-lg:left-0 not-lg:right-0 not-lg:text-center lg:flex lg:items-center bg-blue-700 text-white">
        <li>
          <Link
            className="px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-700"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          {globalContext.loggedIn ? (
            localStorage.getItem("scholar-ease-uid").includes("admin") ? (
              <Link
                className="px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-700"
                to="/admin"
              >
                Admin Panel
              </Link>
            ) : (
              <Link
                className="px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-700"
                to="/dashboard"
              >
                {localStorage.getItem("scholar-ease-uid")}
              </Link>
            )
          ) : (
            <Link
              className="px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-700"
              to="/login"
            >
              Login
            </Link>
          )}
        </li>
        <li>
          <Link
            className="px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-700"
            to="/schemes"
          >
            Schemes
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-700"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          {globalContext.loggedIn ? (
            <button
              className="px-4 py-2 rounded-md text-sm font-semibold cursor-pointer dark:hover:bg-[rgb(255,255,255,0.7)]"
              onClick={() => {
                globalContext.setLoggedIn(false);
                localStorage.removeItem("scholar-ease-uid");
                successToast("Logged out successfully");
                setTimeout(() => {
                  navigate("/");
                }, 2000);
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

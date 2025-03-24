import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Schemes from "./components/Schemes";
import About from "./components/About";
import Signup from "./components/Signup";
import { loggedInContext } from "./contexts";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import Admin from "./components/Admin";
import AllListedSchemes from "./components/AllListedSchemes";
import PendingApplications from "./components/PendingApplications";
import ExpiredScholarship from "./components/ExpiredScholarship";
import ScholarshipReport from "./components/ScholarshipReport";
import Apply from "./components/Apply";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/schemes" element={<Schemes />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
          <Route
            path="/admin/listedschemes"
            element={<AllListedSchemes />}
          ></Route>
          <Route
            path="/admin/pendingapplications"
            element={<PendingApplications />}
          ></Route>
          <Route
            path="/admin/expiredscholarship"
            element={<ExpiredScholarship />}
          ></Route>
          <Route
            path="/admin/scholarshipreports"
            element={<ScholarshipReport />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </loggedInContext.Provider>
  );
};

export default App;

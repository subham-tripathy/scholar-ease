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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/schemes" element={<Schemes />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </loggedInContext.Provider>
  );
};

export default App;

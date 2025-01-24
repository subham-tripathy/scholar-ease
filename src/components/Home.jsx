import React from "react";
import "../styles/home.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main id="home">
      <div id="hero">
        <div
          style={{
            marginLeft: "auto",
            marginRight: "100px",
            width: "40%",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginTop: "150px" }}>Empowering Dreams</h1>
          <h1>Through Education</h1>
          <button
            onClick={() => {
              navigate("/schemes");
            }}
          >
            View Schemes
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;

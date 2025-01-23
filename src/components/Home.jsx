import React from "react";
import "../styles/home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
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
          <button>View Schemes</button>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Home;

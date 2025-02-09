import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  document.title = "Scholar Ease - Home";
  const navigate = useNavigate();
  return (
    <main id="home" className="bg-gray-200">
      <div
        id="hero"
        className="min-h-[100vh] flex flexcol relative text-white px-32"
        style={{
          textShadow: "1px 1px 1px black",
        }}
      >
        <img
          src="/images/ome-bg(1).jpg"
          className="h-[60vh] border-4 border-[#4285F4] shadow-lg shadow-black rounded-full object-cover mt-40"
        />
        <div className="rounded-xl ml-auto w-[55%] h-max py-12 text-center bg-white shadow-lg shadow-gray-900 border-2 border-[#4285F4] mt-50 flex flex-col justify-center">
          <h1 className="text-[#4285F4] text-5xl">Empowering Dreams</h1>
          <h1 className="text-[#4285F4] text-5xl my-5">Through Education</h1>
          <button
            style={{ textShadow: "1px 1px 3px black" }}
            className="cursor-pointer border-2 border-white py-3 px-7 bg-[#4285F4] text-xl font-bold rounded-xl w-max mx-auto"
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

import React, { useEffect } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  document.title = "Scholar Ease - Home";
  const navigate = useNavigate();
  // const [isDarkMode, setIsDarkMode] = React.useState(
  //   window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  // );
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handleChange = (e) => {
  //     setIsDarkMode(e.matches);
  //   };
  //   mediaQuery.addEventListener("change", handleChange);
  // }, []);
  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.querySelector("main#home div#hero").style.backgroundImage =
  //       "url(/images/dark-wave-1.webp)";
  //   } else {
  //     document.querySelector("main#home div#hero").style.backgroundImage =
  //       "url(/images/dark-wave-2.jpg)";
  //   }
  // }, [isDarkMode]);

  return (
    <main id="home" className="bg-[url(/images/bg-3.png)]">
      <div
        id="hero"
        className="min-h-[100vh] flex relative text-white px-32 backdrop-blur-sm"
        style={{
          textShadow: "1px 1px 1px black",
        }}
      >
        <img
          src="/images/ome-bg(1).jpg"
          className="h-[60vh] border-4 border-blue-700 shadow-lg shadow-black rounded-full object-cover mt-20"
        />
        <div className="rounded-xl ml-auto w-[55%] h-max py-12 text-center bg-white shadow-lg shadow-gray-900 border-2 border-blue-700 mt-30 flex flex-col justify-center dark:bg-[#181818]">
          <h1 className="text-blue-700 text-5xl">Empowering Dreams</h1>
          <h1 className="text-blue-700 text-5xl my-5">Through Education</h1>
          <button
            className="cursor-pointer border-2 border-white py-3 px-7 bg-blue-700 text-xl font-bold rounded-xl w-max mx-auto dark:border-black dark:shadow-blue-700 dark:text-black"
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

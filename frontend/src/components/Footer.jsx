import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white h-[50vh] bg-gray-500 p-10 grid grid-cols-3 gap-5"
      style={{
        textShadow: "1px 1px 1px black",
      }}>
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Scholar Ease</h1>
        <p>Let your talents and achievements shine with a scholarship.</p>
        <ul className="flex flex-row gap-5">
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold">Site Links</h3>
        <ul className="flex flex-col gap-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/schemes"}>Schemes</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl font-bold">Have A Question?</h3>
        <p>Vinayak Nagar, Marathiguda, Gunupur, Odisha (765022)</p>
        <p>Ph: +91-12345-67890</p>
        <p>Email: info@scholarease.com</p>
      </div>
    </footer>
  );
};

export default Footer;

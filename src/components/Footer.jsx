import "../styles/footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Scholar Ease</h1>
        <p>Let your talents and achievements shine with a scholarship.</p>
        <ul style={{ flexDirection: "row" }}>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div>
        <h3>Site Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Schemes</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3>Have A Question?</h3>
        <p>Vinayak Nagar, Marathiguda, Gunupur, Odisha (765022)</p>
        <p>Ph: +91-12345-67890</p>
        <p>Email: info@scholarease.com</p>
      </div>
    </footer>
  );
};

export default Footer;

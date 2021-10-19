import React from "react";
import logo from "../images/logo.svg";
import {
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="logo">
            <img src={logo} alt={logo} />
          </div>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="social-icon">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <p>&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

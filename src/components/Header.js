import React from "react";
import logo from "../images/logo.svg";
const Header = () => {
  const showNav = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("openNav");
      menuBtn.classList.toggle("closeNav");
    });
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <div className="navLogo">
            <img src={logo} alt="logo" />
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
        </nav>
        <div className="menu-btn" onClick={() => showNav()}>
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;

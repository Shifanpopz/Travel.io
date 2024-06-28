import React, { act, useState } from "react";
import "./navbar.css";
import "./navbar.scss";

import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  //Function to toggle
  const showNav = () => {
    console.log("clicked");
    setActive("navBar activeNavbar");
  };

  //Function to remove NavBar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="" className="navLink">
                Home
              </a>
            </li>
            <li className="navItems">
              <a href="" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItems">
              <a href="" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItems">
              <a href="" className="navLink">
                About
              </a>
            </li>
            <li className="navItems">
              <a href="" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItems">
              <a href="" className="navLink">
                News
              </a>
            </li>
            <li className="navItems">
              <a href="" className="navLink">
                Contacts
              </a>
            </li>
            <button className="btn">
              <a href=" ">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

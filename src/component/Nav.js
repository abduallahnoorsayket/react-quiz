import React from "react";
import Account from "./Account";
import classes from "../styles/Nav.module.css";
import logo from "../assets/images/logo-bg.png";

export const Nav = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={logo} alt="sayket learn" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
};

export default Nav;

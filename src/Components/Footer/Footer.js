import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h3 className={classes.logo}>{"{LOGO}"} PRIME RESTAURANTS</h3>
      <div className={classes.rightSide}>
        <ul className={classes.ulist}>
          <li>About us</li>
          <li>Download app</li>
          <li>Register a restaurant</li>
          <li>Contact</li>
        </ul>
        <p className={classes.myName}>by Priyam Khatri</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <NavLink className={classes.allRestaurantsLink} to="/">
        ALL RESTAURANTS
      </NavLink>
      <p className={classes.logo}>PRIME</p>
      <div className={classes.authLinks}>
        <NavLink to="/login">LOG IN</NavLink>
        <NavLink className={classes.signup} to="/signup">
          SIGN UP
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

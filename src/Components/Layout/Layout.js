import React from "react";
import classes from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <Cards />
        <Footer />
      </main>
    </>
  );
};

export default Layout;

import React from "react";
import Logo from "./Logo/Logo.jsx";
import Search from "./Search/Search.jsx";
import Button from "../Button/Button.jsx";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a album of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;

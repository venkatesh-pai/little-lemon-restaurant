import React from "react";
import "../styles/Navigation.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className="navigation" role="navigation" aria-label="Navigation">
      <NavLinks />
    </nav>
  );
};

export default Navigation;

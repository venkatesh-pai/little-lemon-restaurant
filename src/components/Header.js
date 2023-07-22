import React, { useState } from "react";
import "../styles/Header.css";
import Logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <NavLink to="/">
          {<img className="logo-img" src={Logo} alt="Little Lemon logo" aria-label="Little Lemon logo" />}
        </NavLink>
        <nav>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink to="/home" aria-label="Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" aria-label="About">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu" aria-label="Menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservations" aria-label="Reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/order" aria-label="Order Online">Order Online</NavLink>
            </li>
            <li>
              <NavLink to="/login" aria-label="Login">Login</NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={handleClick} aria-label="On Click">
          {click ? (
            <AiOutlineClose size={20} style={{ color: "#333333" }} />
          ) : (
            <AiOutlineMenu
              size={30}
              style={{
                color: "#333333",
                borderLeft: "1px solid #333333",
                paddingLeft: "10px",
                height: "20px",
              }}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-class" : "non-active-class"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? "active-class" : "non-active-class"
        }
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-class" : "non-active-class"
        }
        to="/about"
      >
        About
      </NavLink>
    </>
  );
};

export default NavLinks;

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    /* HEADER CONTAINER */
    <div className="header-container flex items-center justify-between align-top flex-wrap p-6  cursor-pointer ">
      {/*  HEADER LOGO */}
      <NavLink
        exact
        to="/"
        className="header-logo hover:text-indigo-600"
        activeClassName="text-indigo-600"
      >
        <p className="font-medium text-2xl md:text-3xl  uppercase cursor-pointer ">
          Spencer
        </p>
        <p className="font-medium text-2xl md:text-3xl uppercase ">Dedrick</p>
      </NavLink>

      {/* HEADER LINKS */}

      {/* HEADER LINKS CONTAINER */}
      <div className="block ">
        {/* ABOUT LINK */}
        <NavLink
          to="/about"
          className="mx-2 text-xl uppercase cursor-pointer hover:text-indigo-600 "
          activeClassName="text-indigo-600"
        >
          About
        </NavLink>
        {/* WORK LINK */}
        <NavLink
          to="/work"
          className="mx-2 text-xl uppercase cursor-pointer hover:text-indigo-600"
          activeClassName="text-indigo-600"
        >
          Work
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

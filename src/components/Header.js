import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    /* HEADER CONTAINER */
    <nav className=" header-container flex items-center justify-between align-top flex-wrap pb-5">
      {/*  HEADER LOGO */}
      <NavLink
        exact
        to="/"
        className="header-logo hover:text-indigo-700 lg:py-5"
        activeClassName="text-indigo-700"
      >
        <h1 className="font-medium text-2xl md:text-3xl   uppercase cursor-pointer ">
          Spencer
        </h1>
        <h1 className="font-medium text-2xl md:text-3xl  tracking-wide uppercase ">
          Dedrick<span className="text-base px-1">.com</span>
        </h1>
      </NavLink>

      {/* HEADER LINKS */}

      {/* HEADER LINKS CONTAINER */}
      <section className="block">
        {/* ABOUT LINK */}
        <NavLink
          to="/about"
          className="mx-5 text-xl  uppercase cursor-pointer hover:text-indigo-700"
          activeClassName="text-indigo-700 font-medium"
        >
          About
        </NavLink>
        {/* WORK LINK */}
        <NavLink
          to="/work"
          className="mx-2 text-xl  uppercase cursor-pointer hover:text-indigo-700"
          activeClassName="text-indigo-700 font-medium"
        >
          Work
        </NavLink>
      </section>
    </nav>
  );
}

export default Header;

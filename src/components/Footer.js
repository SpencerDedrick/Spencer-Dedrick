import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faFileAlt, faExternalLinkAlt, faHome, faUser, faWrench);

function Footer() {
  return (
    /* FOOTER CONTAINER */
    <footer className="container  w-full flex flex-col py-10 md:pb-0">
      {/* FOOTER LINKS CONTAINER*/}
      <ul className="container flex space-x-6 md:space-x-4 text-2xl  lg:text-2xl">
        {/* HOME LINK */}
        <li>
          <NavLink to="/" className="tooltipTarget">
            <FontAwesomeIcon
              icon="home"
              className="hover:text-indigo-700"
            ></FontAwesomeIcon>
            <p className="tooltipText text-base py-1 px-3">Home</p>
          </NavLink>
        </li>
        {/* ABOUT LINK */}
        <li>
          <NavLink to="/about" className="tooltipTarget">
            <FontAwesomeIcon
              icon="user"
              className="hover:text-indigo-700"
            ></FontAwesomeIcon>
            <p className="tooltipText text-base py-1 px-3">About</p>
          </NavLink>
        </li>
        {/* WORK LINK */}
        <li>
          <NavLink to="/work" className="tooltipTarget">
            <FontAwesomeIcon
              icon="wrench"
              className="hover:text-indigo-700"
            ></FontAwesomeIcon>
            <p className="tooltipText text-base py-1 px-3">Work</p>
          </NavLink>
        </li>
        {/* LINKEDIN PROFILE LINK */}
        <li>
          <a
            href="https://www.linkedin.com/in/spencer-dedrick"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltipTarget"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="hover:text-indigo-700 "
            ></FontAwesomeIcon>
            <p className="tooltipText text-base py-1 px-3">LinkedIn</p>
          </a>
        </li>
        {/* GITHUB PAGE LINK */}
        <li>
          <a
            href="https://github.com/SpencerDedrick/"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltipTarget"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="hover:text-indigo-700"
            ></FontAwesomeIcon>
            <p className="tooltipText text-base py-1 px-3">GitHub</p>
          </a>
        </li>
        {/* RESUME/CV LINK */}
        <li>
          <a
            href="https://drive.google.com/file/d/1orcOspWkZs-qy34HBWyzwlSmEeI1wIlR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltipTarget"
          >
            <FontAwesomeIcon
              icon="file-alt"
              className="hover:text-indigo-700"
            ></FontAwesomeIcon>
            <p className="tooltipText text-base py-1 px-3">Resume</p>
          </a>
        </li>
      </ul>
      {/* FOOTER EMAIL */}
      <section className="container py-1">
        {/* EMAIL TO LINK */}
        <a
          href="mailto: spencer.dedrick@gmail.com"
          className="font-medium font-m hover:text-indigo-700 "
        >
          Spencer.Dedrick@gmail.com
        </a>
      </section>
      {/* FOOTER NAME & LEGAL*/}
      <section className="container ">
        <span className=" text-lg  uppercase  ">
          <Link
            exact
            to="/"
            className="hover:text-indigo-700 font-bold cursor-pointer  "
          >
            Spencer Dedrick{" "}
          </Link>
          <span className="font-light bg">All Rights Reserved.</span>
        </span>
      </section>
    </footer>
  );
}

export default Footer;

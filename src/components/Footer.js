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
    <div className="container  w-full flex flex-col py-5 md:pb-0">
      {/* FOOTER LINKS CONTAINER*/}
      <div className="container flex space-x-6 md:space-x-4 text-2xl  lg:text-2xl">
        {/* HOME LINK */}
        <NavLink to="/" className="tooltipTarget">
          <FontAwesomeIcon
            icon="home"
            className="hover:text-indigo-700"
          ></FontAwesomeIcon>
          <p className="tooltipText text-base py-1 px-3">Home</p>
        </NavLink>
        {/* ABOUT LINK */}
        <NavLink to="/about" className="tooltipTarget">
          <FontAwesomeIcon
            icon="user"
            className="hover:text-indigo-700"
          ></FontAwesomeIcon>
          <p className="tooltipText text-base py-1 px-3">About</p>
        </NavLink>
        {/* WORK LINK */}
        <NavLink to="/work" className="tooltipTarget">
          <FontAwesomeIcon
            icon="wrench"
            className="hover:text-indigo-700"
          ></FontAwesomeIcon>
          <p className="tooltipText text-base py-1 px-3">Work</p>
        </NavLink>
        {/* LINKEDIN PROFILE LINK */}
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
        {/* GITHUB PAGE LINK */}
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
        {/* RESUME/CV LINK */}
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
      </div>
      {/* FOOTER EMAIL */}
      <div className="container">
        {/* EMAIL TO LINK */}
        <a
          href="mailto: spencer.dedrick@gmail.com"
          className="font-medium font-m hover:text-indigo-700 "
        >
          Spencer.Dedrick@gmail.com
        </a>
      </div>
      {/* FOOTER NAME & LEGAL*/}
      <div className="container ">
        <p className=" text-lg  uppercase  ">
          <Link
            exact
            to="/"
            className="hover:text-indigo-700 font-bold cursor-pointer  "
          >
            Spencer Dedrick{" "}
          </Link>
          <span className="font-light bg">All Rights Reserved.</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;

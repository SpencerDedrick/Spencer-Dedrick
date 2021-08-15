import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faFileAlt);

function Footer() {
  return (
    /* FOOTER CONTAINER */
    <div className="container w-full flex flex-col p-6">
      {/* FOOTER LINKS */}
      <div className="container flex space-x-4 text-2xl">
        {/* LINKEDIN PROFILE LINK */}
        <a
          href="https://www.linkedin.com/in/spencer-dedrick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="hover:text-indigo-600"
          ></FontAwesomeIcon>
        </a>
        {/* GITHUB PAGE LINK */}
        <a
          href="https://github.com/SpencerDedrick/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className="hover:text-indigo-600"
          ></FontAwesomeIcon>
        </a>
        {/* RESUME/CV LINK */}
        <a
          href="https://drive.google.com/file/d/1m7daCua4ToZwjXLGMRTl78CFAI5lzaL6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon="file-alt"
            className="hover:text-indigo-600"
          ></FontAwesomeIcon>
        </a>
      </div>
      {/* FOOTER EMAIL */}
      <div className="container">
        {/* EMAIL TO LINK */}
        <a
          href="mailto: spencer.dedrick@gmail.com"
          className="font-medium font-m"
        >
          Spencer.Dedrick@gmail.com
        </a>
      </div>
      {/* FOOTER NAME & LEGAL*/}
      <div className="container">
        <p className="font-medium text-l  uppercase cursor-pointer ">
          Spencer Dedrick{" "}
          <span className="font-light">All Rights Reserved.</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;

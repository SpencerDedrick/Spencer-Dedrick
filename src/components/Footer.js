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
        <a href="#">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="hover:text-indigo-600"
          ></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className="hover:text-indigo-600"
          ></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon="file-alt"
            className="hover:text-indigo-600"
          ></FontAwesomeIcon>
        </a>
      </div>
      {/* FOOTER EMAIL */}
      <div className="container">
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

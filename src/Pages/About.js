import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let icons = [
  { name: "react", link: "https://reactjs.org/" },

  {
    name: "html5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "css3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "js", link: "https://www.javascript.com/" },
];

let skills = [
  "Git",
  "Figma",
  "NPM",
  "BootStrap",
  "Node.js",
  "SASS",
  "Material-UI",
  "C++",
  "Visual Studio",
  "Selenium",
  "Browser Automation",
  "WordPress",
  "WIX",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Autodesk CAD",
];

function About() {
  return (
    /* ABOUT PAGE */

    /* ABOUT PAGE CONTAINER */
    <div className="container   ">
      {/* ABOUT PAGE HEADING */}
      <h1 className=" font-medium text-2xl">Who I am</h1>

      <div className="">
        {/* ABOUT PARAGRAPH 2*/}
        <p className="text-xl py-5">
          I live in Houston, Texas. I have been learning web development for
          three years and have been working with Reactjs for the last two years.
          I have a background working with computer and networking hardware for
          7 years. I currently work with the non-profit Attack Poverty, where I
          am the Continuing Education Coordinator. There, I help develop adult
          education programs and run an after-school program. I'm looking for a
          position that will allow me to share and develop my skills as a web
          developer.
        </p>
      </div>
      {/* ABOUT TECHNOLOGIES HEADER */}
      <h1 className=" font-medium text-2xl py-5">Technologies I work with</h1>

      {/* ABOUT TECHNOLOGIES ICONS GRID*/}
      <div className="container grid grid-flow-col justify-items-start text-5xl pb-10 md:pb-5 max-w-sm">
        {icons.map((icon) => {
          return (
            <a
              href={icon.link}
              rel="noopener norefferer"
              className={`${icon.name}Color tooltipTarget`}
            >
              <FontAwesomeIcon icon={["fab", icon.name]}></FontAwesomeIcon>
              <p className="tooltipText text-base py-1 px-3">{icon.name}</p>
            </a>
          );
        })}
      </div>
      <h1 className=" font-medium text-2xl pb-3">
        Other skills, abilities, and languages
      </h1>
      <div className="md:grid grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <p>•{skill}</p>;
        })}
      </div>
      {/* LINK TO WORK PAGE */}
      <p className="font-base text-xl pt-5">
        Check out some of my work by clicking {""}
        <NavLink
          to="/work"
          className="font-bold cursor-pointer hover:text-indigo-700"
        >
          here
        </NavLink>
        .
      </p>
    </div>
  );
}

export default About;

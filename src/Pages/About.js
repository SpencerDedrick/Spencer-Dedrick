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
  { name: "redux", link: "https://redux.js.org/" },
];

let skills = [
  "Redux",
  "Git",
  "Bootstrap",
  "APIs",
  "NPM",
  "Material-UI",
  "Selenium",
  "Wix",
  "Figma",
  "WordPress",
  "Microsoft Office",
  "Visual Studio",
  "Adobe Creative Cloud",
  "Responsive Design",
  "Graphic Design",
  "UI/UX Design",
  "Teamwork",
  "Problem Solving",
  "Attention to Detail",
  "Writing",
];

function About() {
  return (
    /* ABOUT PAGE */

    /* ABOUT PAGE CONTAINER */
    <main className="container   ">
      {/* ABOUT PAGE HEADING */}
      <h1 className=" font-medium text-2xl">Who I am</h1>

      <section className="">
        {/* ABOUT PARAGRAPH 2*/}
        <p className="text-xl py-5">
          I have been learning web development for three years and have been
          working with Reactjs for the last two years. I have a background
          working with computer and networking hardware and have done some small
          scale web development for local non-profits. I also have professional
          experience in management, program development, education, and graphic
          design. I'm currently looking for a position that will allow me to
          share and develop my skills as a web developer and software engineer.
        </p>
      </section>
      {/* ABOUT TECHNOLOGIES HEADER */}
      <h2 className=" font-medium text-2xl py-5">Technologies I work with</h2>

      {/* ABOUT TECHNOLOGIES ICONS GRID*/}
      <ul className="container grid grid-flow-col justify-items-start text-5xl pb-10 md:pb-5 max-w-sm">
        {icons.map((icon) => {
          return (
            <li>
              <a
                href={icon.link}
                rel="noopener norefferer"
                className={`${icon.name}Color tooltipTarget`}
              >
                <FontAwesomeIcon icon={["fab", icon.name]}></FontAwesomeIcon>
                <p className="tooltipText text-base py-1 px-3">{icon.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
      <h2 className=" font-medium text-2xl pb-3">
        Other skills, abilities, and languages
      </h2>
      <ul className="md:grid grid-cols-2 lg:grid-cols-3 py-5">
        {skills.map((skill) => {
          return <li>•{skill}</li>;
        })}
      </ul>
      {/* LINK TO WORK PAGE */}
      <span className="font-base text-xl py-5">
        Check out some of my work by clicking {""}
        <NavLink
          to="/work"
          className="font-bold cursor-pointer hover:text-indigo-700"
        >
          here
        </NavLink>
        .
      </span>
    </main>
  );
}

export default About;
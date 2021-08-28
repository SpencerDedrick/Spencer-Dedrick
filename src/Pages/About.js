import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let icons = [
  { name: "react", link: "https://reactjs.org/" },
  { name: "npm", link: "https://www.npmjs.com/" },
  {
    name: "html5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "css3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "figma", link: "https://www.figma.com/" },
  { name: "js", link: "https://www.javascript.com/" },
  { name: "bootstrap", link: "https://getbootstrap.com/" },
  { name: "git", link: "https://git-scm.com/" },
];

function About() {
  return (
    /* ABOUT PAGE */

    /* ABOUT PAGE CONTAINER */
    <div className="container p-5">
      {/* ABOUT PAGE HEADING */}
      <h1 className=" font-medium text-2xl">Who I am</h1>
      {/* ABOUT PARAGRAPH 1*/}
      <p className="text-xl py-5">
        I am a software engineer and web developer with a focus on the React
        library. I have a passion for technology, and I love helping others. I
        like to be an active part of my community by working and volunteering
        with local non-profit organizations. I strive to make any team I'm a
        part of the best it can be. Above all else, I love to learn, and I look
        forward to working with you in the future.
      </p>
      {/* ABOUT PARAGRAPH 2*/}

      <p className="text-xl py-5">
        I live in Houston, Texas. I have been learning web development for three
        years and have been working with Reactjs for the last two years. I have
        a background working with computer and networking hardware for 7 years.
        I currently work with the non-profit Attack Poverty, where I am the
        Continuing Education Coordinator. There, I help develop adult education
        programs and run an after-school program. I'm looking for a position
        that will allow me to share and develop my skills as a web developer.
      </p>
      {/* ABOUT TECHNOLOGIES HEADER */}
      <h1 className=" font-medium text-2xl py-5">Technologies I use</h1>

      {/* ABOUT TECHNOLOGIES ICONS GRID*/}
      <div className="container grid grid-flow-col justify-items-center grid-rows-2 gap-5 text-5xl pb-10">
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
      {/* LINK TO WORK PAGE */}
      <p className="font-base text-xl">
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

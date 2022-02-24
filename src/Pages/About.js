import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills, aboutIcons } from "../constants/data";

function About() {
  return (
    /* ABOUT PAGE */

    <main className="container   ">
      <h1 className=" font-medium text-2xl">Who I am</h1>

      <section className="">
        {/* ABOUT PARAGRAPH 2*/}
        <p className="text-xl py-5">
          I'm a software engineer and web developer. I build responsive designs
          using React, Redux, and a wide variety of other technologies. I have a
          background working with computer and networking hardware and have done
          some small scale web development for local non-profits. I also have
          professional experience in management, program development, education,
          and graphic design. I'm currently looking for a position that will
          allow me to share and develop my skills as a web developer and
          software engineer.
        </p>
      </section>

      <h2 className=" font-medium text-2xl pb-10 pt-5">
        Technologies I work with
      </h2>

      {/* ABOUT TECHNOLOGIES ICONS GRID*/}
      {/* MADE BY MAPPING OVER 'aboutIcon' ARRAY AND RENDERING AN ICON FOR EACH TECHNOLOGY LISTED THERE*/}
      <ul className="container grid grid-flow-col justify-items-start text-5xl pb-10 md:pb-5 max-w-sm ">
        {aboutIcons.map((icon) => {
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

      {/* LIST OF SKILLS AND ABILITIES MADE BY MAPPING AND RENDERING THE 'SKILLS' ARRAY */}
      <h2 className=" font-medium text-2xl pb-3">
        Other skills, abilities, and languages
      </h2>
      <ul className="md:grid grid-cols-2 lg:grid-cols-3 py-5 list-none">
        {skills.map((skill) => {
          return <li className="italic">• {skill}</li>;
        })}
      </ul>

      <span className="font-base text-xl py-5">
        Check out some of my work by clicking {""}
        <NavLink
          to="/work"
          className="font-bold cursor-pointer hover:text-indigo-700"
        >
          here
        </NavLink>
      </span>

      <span className="font-base text-xl py-5 block">
        View my CV {""}
        <a
          href="https://drive.google.com/file/d/1zMGjk9Yifw1EGnLW5_P1zr4StvM0tuc5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold cursor-pointer hover:text-indigo-700"
        >
          here
        </a>
      </span>
    </main>
  );
}

export default About;

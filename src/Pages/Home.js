import React from "react";
import ProjectSlider from "../components/ProjectSlider/ProjectSlider";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);

function Home() {
  return (
    /* HOME CONTAINER */
    <div className="container ">
      {/* HOME HEADING TEXT */}
      <h1 className=" font-medium text-2xl py-5 md:py-10">
        Hi, Hello! My name is Spencer. I'm a developer.
      </h1>
      {/* HOME PARAGRAPH TEXT */}
      <p className="text-xl md:text-xl  py-5 md:py-10">
        I am a Software Engineer based in Houston, TX. I am proficient in
        Frontend development. I have extensive knowledge in HTML, CSS,
        Javascript, and React. I am also passionate about technology and have 7
        years of experience working with computer and networking hardware. As a
        software engineer, my goal is to help bring creative projects to life
        and demonstrate my commitment to developing world-class software
        solutions for you and your organization.
      </p>
      {/* HOME PROJECT CAROUSEL */}
      <NavLink to="/work">
        <h1 className="font-bold text-xl md:text-2xl py-5 uppercase pt-5 inline-block">
          Featured Projects
        </h1>

        <FontAwesomeIcon
          icon="chevron-right"
          className="mx-3 text-xl"
        ></FontAwesomeIcon>
      </NavLink>
      <div className="container">
        {" "}
        <ProjectSlider />{" "}
      </div>
      {/* HOME BOTTOM TEXT */}

      <h1 className=" py-5 text-xl   lg:py-10">
        You can contact me, view my work, or learn more about me by using the
        links below. Thanks for stopping by, I look forward to working with you
        soon.
      </h1>
    </div>
  );
}

export default Home;

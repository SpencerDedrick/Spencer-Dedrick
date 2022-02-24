import React from "react";
import ProjectSlider from "../components/ProjectSlider/ProjectSlider";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import FMTest from "../components/FMTest";

library.add(faChevronRight);

const Home = () => {
  return (
    /* HOME CONTAINER */
    <main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="container "
    >
      {/* HOME HEADING TEXT */}
      {/* <FMTest /> */}
      <h1 className=" font-medium text-2xl py-5 md:py-10">
        Hi, Hello! My name is Spencer, and I'm a developer.
      </h1>
      {/* HOME PARAGRAPH TEXT */}
      <p className="text-xl py-5 md:pt-5 md:pb-10">
        I'm a Software Engineer based in Houston, TX. I love creating fun new
        things on the internet.I have an extensive knowledge in HTML, CSS,
        Javascript, and React. I have a passion for technology and have 7 years
        of experience working and diagnosing computers, networking hardware, and
        emerging technologies. As a developer,my goal is to help bring creative
        projects to life with world-class software solutions, and help other
        learn how to use technology to improve their lives in a way that is
        accessible.
      </p>
      {/* HOME PROJECT CAROUSEL */}
      <NavLink to="/work" className="hover:text-indigo-700">
        <span className="font-bold text-xl md:text-2xl pb-2 pt-5 md:py-5 uppercase  inline-block">
          Featured Projects
        </span>

        <FontAwesomeIcon
          icon="chevron-right"
          className="mx-3 text-xl"
        ></FontAwesomeIcon>
        <br />
        <span className="lg:hidden">swipe to view</span>
      </NavLink>
      <div className="container">
        <ProjectSlider />
      </div>
      {/* HOME BOTTOM TEXT */}

      <p className="py-5 text-xl lg:pt-10 lg:pb-5">
        You can contact me, view my work, or learn more about me by using the
        links below. Thanks for stopping by, I look forward to working with you
        soon.
      </p>
    </main>
  );
};

export default Home;

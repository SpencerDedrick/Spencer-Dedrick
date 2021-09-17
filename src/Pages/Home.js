import React from "react";
import ProjectSlider from "../components/ProjectSlider/ProjectSlider";
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
        Hi, Hello! My name is Spencer. I like to create things.
      </h1>
      {/* HOME PARAGRAPH TEXT */}
      <p className="text-xl md:text-xl  py-5 md:py-10">
        I am a software engineer and web developer with a focus on Javascript
        and the React library. I have a passion for technology, and I love to
        help others and learn new things. I strive to make any team I'm a part
        of the best it can be. Thanks for stopping by, I look forward to working
        with you soon.
      </p>
      {/* HOME PROJECT CAROUSEL */}
      <h1 className="font-bold text-xl md:text-2xl py-5 uppercase pt-5 inline-block">
        Featured Projects
      </h1>

      <FontAwesomeIcon
        icon="chevron-right"
        className="mx-3 text-xl"
      ></FontAwesomeIcon>
      <div className="container">
        {" "}
        <ProjectSlider />{" "}
      </div>
      {/* HOME BOTTOM TEXT */}

      <h1 className=" py-5 text-xl   lg:py-10">
        You can contact me, view my work, or learn more about me by using the
        links below.
      </h1>
    </div>
  );
}

export default Home;

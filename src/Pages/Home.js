import React from "react";
import ProjectSlider from "../components/ProjectSlider/ProjectSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);

function Home() {
  return (
    /* HOME CONTAINER */
    <div className="container p-5">
      {/* HOME HEADING TEXT */}
      <h1 className=" font-medium text-2xl">Hi, Hello!</h1>
      {/* HOME PARAGRAPH TEXT */}
      <p className="text-xl py-5">
        I am a software engineer and web developer with a focus on the React
        library. I have a passion for technology, and I love helping others. I
        like to be an active part of my community by working and volunteering
        with local non-profit organizations. I strive to make any team I'm a
        part of the best it can be. Above all else, I love to learn, and I look
        forward to working with you in the future.
      </p>
      {/* HOME PROJECT CAROUSEL */}
      <h1 className="font-bold text-xl uppercase py-5 inline-block">
        Featured Projects
      </h1>
      <FontAwesomeIcon
        icon="chevron-right"
        className="mx-10 text-xl"
      ></FontAwesomeIcon>
      <div className="container">
        <ProjectSlider />
      </div>
      {/* HOME BOTTOM TEXT */}
      <h1 className=" font-light text-xl my-5">
        Thanks for stopping by, I look forward to working with you some time.
      </h1>
      <h1 className=" font-medium text-xl ">
        You can contact me using the links below.
      </h1>
    </div>
  );
}

export default Home;

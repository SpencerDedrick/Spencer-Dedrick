import React from "react";
import ProjectSlide from "./ProjectSlide";
/* PROJECT SLIDER ARRAY */
import newProjects from "../../Pages/Projects/Projects";

function ProjectSlider() {
  return (
    /* PROJECT SLIDER CONTAINER */
    <div className=" overflow-x-scroll overflow-y-hidden project-slider whitespace-nowrap inline-block  space-x-6 mb-5 no-scrollbar">
      {/* PROJECT SLIDES MAPPED BASED ON PROJECTS ARRAY FOUND IN src\Pages\Projects\Projects.js */}
      {newProjects.map((project, i) => (
        <ProjectSlide name={project.name}></ProjectSlide>
      ))}
      <div
        className="container w-5
       inline-block"
      ></div>
    </div>
  );
}

export default ProjectSlider;

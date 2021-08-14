import React from "react";
import ProjectSlide from "./ProjectSlide";
/* PROJECT SLIDER ARRAY */
import projects from "../../Pages/Projects/Projects";

function ProjectSlider() {
  return (
    /* PROJECT SLIDER CONTAINER */
    <div className=" overflow-x-scroll overflow-y-hidden project-slider whitespace-nowrap inline-block space-x-6 mb-5">
      {/* PROJECT SLIDES MAPPED BASED ON PROJECTS ARRAY FOUND IN src\Pages\Projects\Projects.js */}
      {projects.map((project, i) => (
        <ProjectSlide name={project}></ProjectSlide>
      ))}
    </div>
  );
}

export default ProjectSlider;

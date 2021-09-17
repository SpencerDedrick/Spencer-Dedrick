import React from "react";
import ProjectSlide from "./ProjectSlide";
/* PROJECT SLIDER ARRAY */
import newProjects from "../../Pages/Projects/Projects";
import ScrollContainer from "react-indiana-drag-scroll";

function ProjectSlider() {
  return (
    /* PROJECT SLIDER CONTAINER */
    <div>
      <ScrollContainer className=" md:hidden project-slider whitespace-nowrap inline-block  space-x-6 mb-5 py-5 no-scrollbar ">
        {/* PROJECT SLIDES MAPPED BASED ON PROJECTS ARRAY FOUND IN src\Pages\Projects\Projects.js */}
        {newProjects.map((project, i) => (
          <ProjectSlide name={project.name}></ProjectSlide>
        ))}
      </ScrollContainer>
      <div className="md:grid grid-cols-2 gap-5 hidden ">
        {newProjects.map((project, i) => (
          <ProjectSlide name={project.name}></ProjectSlide>
        ))}
      </div>
    </div>
  );
}

export default ProjectSlider;

import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { NavLink } from "react-router-dom";
import { projects } from "../../constants/data";

const ProjectSlide = (props) => {
  let { name } = props;

  return (
    /* PROJECT SLIDE */
    /* PROJECT SLIDE CONTAINER AND LINK */
    <NavLink
      to={`/${name}`}
      className="project-slide-container inline-block max-h-64 md:w-max"
    >
      {/* PROJECT SLIDE IMAGE */}
      <img
        loading="lazy"
        src={`images/${name}.png`}
        alt={`${name} Project`}
        className="object-cover h-full inline-block project-slide-img"
      />
    </NavLink>
  );
};

const ProjectSlider = () => {
  return (
    /* PROJECT SLIDER CONTAINER */
    <section>
      <ScrollContainer className=" lg:hidden project-slider whitespace-nowrap inline-block  space-x-6 mb-5 py-5 no-scrollbar ">
        {/* PROJECT SLIDES MAPPED BASED ON PROJECTS ARRAY FOUND IN src\constants\Projects.js */}
        {projects.map((project) => (
          <ProjectSlide name={project.name}></ProjectSlide>
        ))}
      </ScrollContainer>
      <div className="lg:grid grid-cols-2 gap-5 hidden ">
        {projects.map((project) => (
          <ProjectSlide name={project.name}></ProjectSlide>
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;

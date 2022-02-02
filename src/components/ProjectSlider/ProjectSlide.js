import React from "react";
import { Link, NavLink } from "react-router-dom";

function ProjectSlide(props) {
  return (
    /* PROJECT SLIDE */

    /* PROJECT SLIDE CONTAINER AND LINK */
    <NavLink
      to={`/${props.name}`}
      className="project-slide-container inline-block max-h-64 md:w-max"
    >
      {/* PROJECT SLIDE IMAGE */}
      <img
        loading="lazy"
        src={`images/${props.name}.png`}
        alt={`${props.name} Project`}
        className="object-cover h-full inline-block project-slide-img"
      />
      {/*  <Link to={`/${props.name}`}>{props.name}</Link> */}
    </NavLink>
  );
}

export default ProjectSlide;

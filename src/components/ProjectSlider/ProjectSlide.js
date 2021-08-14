import React from "react";
import { NavLink } from "react-router-dom";

function ProjectSlide(props) {
  return (
    /* PROJECT SLIDE */

    /* PROJECT SLIDE CONTAINER AND LINK */
    <NavLink
      to={`/${props.name}`}
      className="container project-slide-container w-full inline-block"
    >
      {/* PROJECT SLIDE IMAGE */}
      <img
        src={`images/${props.name}.png`}
        alt={`${props.name} Project`}
        className="object-cover h-full inline-block"
      />
    </NavLink>
  );
}

export default ProjectSlide;

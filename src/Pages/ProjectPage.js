import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectPage(props) {
  let { name, icons, description1, description2, demo, source } = props;
  return (
    <div className="container">
      <h1 className=" font-light text-lg py-">{name}</h1>

      {/* PROJECT PAGE ICONS */}
      <div className="container flex space-x-4 text-3xl py-5">
        {icons.map((icon) => {
          return <FontAwesomeIcon icon={["fab", icon]}></FontAwesomeIcon>;
        })}
      </div>

      {/* PROJECT PAGE DESCRIPTION1 */}
      <p className="text-lg ">{description1}</p>
      {/* PROJECT PAGE IMAGE*/}
      <img
        src={`images/${name}Laptop.png`}
        alt={`${name} Project`}
        className="object-cover h-full inline-block py-10 max-h-96"
      />

      {/* PROJECT PAGE DESCRIPTION2 */}
      <p className="text-lg ">{description2}</p>
      {/* PROJECT PAGE LINKS */}
      <div className="container flex space-x-1 text-xl pt-10 pb-5  md:max-w-md">
        <div className="container flex space-x-3 hover:text-indigo-700 cursor-pointer">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <FontAwesomeIcon icon="external-link-alt"></FontAwesomeIcon>
        </div>
        <div className="container flex space-x-3 hover:text-indigo-700 cursor-pointer">
          <a href={source} target="_blank" rel="noopener noreferrer">
            View Source
          </a>
          <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

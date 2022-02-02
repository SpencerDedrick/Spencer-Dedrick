import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectPage(props) {
  let { name, icons, description1, description2, demo, source } = props;
  return (
    <main className="container">
      <h1 className="font-medium text-2xl pb-3">{name}</h1>

      {/* PROJECT PAGE ICONS */}
      <ul className="container flex space-x-4 text-3xl py-5">
        {icons.map((icon) => {
          return <FontAwesomeIcon icon={["fab", icon]}></FontAwesomeIcon>;
        })}
      </ul>

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
      <section className="container flex space-x-1 text-xl pt-10 pb-5  md:max-w-md">
        <span className="container flex space-x-3 hover:text-indigo-700 cursor-pointer">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <FontAwesomeIcon icon="external-link-alt"></FontAwesomeIcon>
        </span>
        <span className="container flex space-x-3 hover:text-indigo-700 cursor-pointer">
          <a href={source} target="_blank" rel="noopener noreferrer">
            View Source
          </a>
          <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
        </span>
      </section>
    </main>
  );
}

export default ProjectPage;

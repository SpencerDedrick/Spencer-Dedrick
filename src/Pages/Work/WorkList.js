import React, { useEffect } from "react";
import WorkListItem from "./WorkListItem";

import newProjects from "../Projects/Projects";

function WorkList(props) {
  let { iconList } = props;

  let activeIcons = Object.keys(iconList).map((icon) => {
    if (iconList[icon]) {
      return icon;
    } else {
      return null;
    }
  });

  let filteredProjectList = [];

  for (let i = 0; i < newProjects.length; i++) {
    if (newProjects[i]["icons"].some((r) => activeIcons.indexOf(r) >= 0)) {
      filteredProjectList.push(newProjects[i]);
    }
  }

  newProjects.map((project) => {
    if (project.icons.some((r) => activeIcons.indexOf(r) >= 0)) {
      return JSON.parse(JSON.stringify(project, 1));
    } else {
      return null;
    }
  });

  useEffect(() => {
    console.log("iconList = " + iconList);
    console.log("activeIcons =  " + activeIcons);
    console.log("filteredProjectList = " + filteredProjectList);
  }, [activeIcons]);

  return (
    /* WORK PROJECT LIST */
    <div className="container grid grid-cols-1 space-y-5 text-3xl">
      {filteredProjectList.map((project, index) => {
        if (index % 2 !== 1) {
          return (
            /* PROJECT ADDED TO LIST BASED ON IMPORTED PROJECTS ARRAY*/
            /* EVERY OTHER PROJECT IS FLIPPED OR HAS A GRAY BACKGROUND */
            <WorkListItem
              name={project.name}
              icons={project.icons}
              subtitle={project.subtitle}
              bg=""
            ></WorkListItem>
          );
        } else {
          return (
            <WorkListItem
              name={project.name}
              flip={false}
              icons={project.icons}
              subtitle={project.subtitle}
              bg="bg-gray-200"
              flip={true}
            ></WorkListItem>
          );
        }
      })}
    </div>
  );
}

export default WorkList;

import React, { useEffect } from "react";
import WorkListItem from "./WorkListItem";

import newProjects from "../Projects/Projects";

export const WorkList = (props) => {
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

  return (
    /* WORK PROJECT LIST */
    <section className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 text-3xl py-5 m-auto ">
      {filteredProjectList.length === 0
        ? newProjects.map((project) => {
            return (
              <WorkListItem
                name={project.name}
                icons={project.icons}
                subtitle={project.subtitle}
              ></WorkListItem>
            );
          })
        : filteredProjectList.map((project) => {
            return (
              <WorkListItem
                name={project.name}
                icons={project.icons}
                subtitle={project.subtitle}
              ></WorkListItem>
            );
          })}
    </section>
  );
};

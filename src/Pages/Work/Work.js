import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WorkIcons from "./WorkIcons";
import { WorkList } from "./WorkList";

function Work() {
  /* list of technologies for filter. This will change based on use click to grey out specific icons when filtering projects */
  /* Icon list of all technologies used in projects. Add or remove the name of fontawesome icons to change the icons displayed on the work page */
  const [iconList, setIconList] = useState({
    html5: false,
    "css3-alt": false,
    js: false,
    react: false,
    npm: false,
    "node-js": false,
  });
  return (
    <main className="container ">
      <h1 className=" font-medium text-2xl ">
        Below you'll find some of my work.
      </h1>
      <span className="text-sm pt-5 ">
        Click the icons to filter the projects.
      </span>
      {/* WORK PAGE ICONS */}
      <WorkIcons iconList={iconList} setIconList={setIconList} />
      {/* WORK PAGE PROJECTS LIST */}
      <WorkList iconList={iconList} />
      <span className="font-base text-xl py-5">
        Learn more about me by clicking {""}
        <NavLink
          to="/about"
          className="font-bold cursor-pointer hover:text-indigo-700"
        >
          here
        </NavLink>
        .
      </span>
    </main>
  );
}

export default Work;

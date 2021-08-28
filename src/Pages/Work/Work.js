import React, { useState } from "react";
import WorkIcons from "./WorkIcons";
import WorkList from "./WorkList";

function Work() {
  /* list of technologies for filter. This will change based on use click to grey out specific icons when filtering projects */
  /* Icon list of all technologies used in projects. Add or remove the name of fontawesome icons to change the icons displayed on the work page */
  const [iconList, setIconList] = useState({
    html5: true,
    "css3-alt": true,
    js: true,
    react: true,
    npm: true,
    "node-js": true,
    bootstrap: true,
  });
  return (
    <div className="container ">
      <h1 className=" font-medium text-2xl px-5 py-5">
        Below you'll find some of my work.
      </h1>
      <p className="text-sm px-5 py-1">
        Click the icons to filter the projects.
      </p>
      {/* WORK PAGE ICONS */}
      <WorkIcons iconList={iconList} setIconList={setIconList} />
      {/* WORK PAGE PROJECTS LIST */}
      <WorkList iconList={iconList} />
    </div>
  );
}

export default Work;

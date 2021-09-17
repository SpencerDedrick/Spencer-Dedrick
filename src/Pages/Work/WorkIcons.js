import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WorkIcons(props) {
  let { iconList, setIconList } = props;

  let toggleIcon = (icon) => {
    let newIconList = { ...iconList };
    newIconList[icon] = !iconList[icon];
    setIconList(newIconList);
  };

  return (
    <div className="container flex space-x-4 text-3xl  pt-3 pb-5">
      {Object.keys(iconList).map((icon, index) => {
        if (iconList[icon] === true) {
          return (
            <FontAwesomeIcon
              icon={["fab", Object.keys(iconList)[index]]}
              className="hover:text-indigo-700 cursor-pointer text-indigo-700 "
              onClick={() => toggleIcon(icon)}
            ></FontAwesomeIcon>
          );
        } else {
          return (
            <FontAwesomeIcon
              icon={["fab", Object.keys(iconList)[index]]}
              className="hover:text-indigo-700 cursor-pointer  "
              onClick={() => toggleIcon(icon)}
            ></FontAwesomeIcon>
          );
        }
      })}
    </div>
  );
}

export default WorkIcons;

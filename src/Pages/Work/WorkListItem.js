import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function WorkListItem(props) {
  let { name, bg, flip, icons, subtitle } = props;

  if (flip) {
    return (
      <Link
        to={`/${name}`}
        className={`grid grid-cols-2 space-x-2 w-screen py-5 px-0 ${bg}`}
      >
        <div className="container pl-5 py-2">
          <img
            src={`images/${name}.png`}
            alt={`${name} Project`}
            className="object-cover h-full inline-block rounded-md"
          />
        </div>
        <div className="container p-4 ">
          <h1 className="font-bold text-2xl">{name}</h1>
          {/* WORK LIST ITEM ICONS */}
          <div className="container flex space-x-2 text-xl py-1">
            {icons.map((icon) => {
              return <FontAwesomeIcon icon={["fab", icon]}></FontAwesomeIcon>;
            })}
          </div>
          <p className=" text-sm">{subtitle}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        to={`/${name}`}
        className={`grid grid-cols-2  w-screen py-5 px-0 ${bg}`}
      >
        <div className="container px-5 ">
          <h1 className="font-bold text-2xl">{name}</h1>
          {/* WORK LIST ITEM ICONS */}
          <div className="container flex space-x-2 text-xl py-1">
            {icons.map((icon) => {
              return <FontAwesomeIcon icon={["fab", icon]}></FontAwesomeIcon>;
            })}
          </div>

          <p className=" text-sm">{subtitle}</p>
        </div>
        <div className="container pr-5">
          <img
            src={`images/${name}.png`}
            alt={`${name} Project`}
            className="object-cover h-full inline-block rounded-md"
          />
        </div>
      </Link>
    );
  }
}

export default WorkListItem;

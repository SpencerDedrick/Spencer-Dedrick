import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function WorkListItem(props) {
  let { name, icons, subtitle } = props;

  return (
    <div className="grid grid-cols-2 space-x-2 py-1  work-list-item ">
      <div className="container py-2 ">
        <Link to={`/${name}`}>
          <img
            src={`images/${name}Laptop.png`}
            alt={`${name} Project`}
            className="work-img h-full object-contain inline-block max-h-96 "
          />
        </Link>
      </div>
      <div className="container p-4 ">
        <Link
          to={`/${name}`}
          className="font-bold text-2xl hover:text-indigo-700 work-list-item-title"
        >
          {name}
        </Link>
        {/* WORK LIST ITEM ICONS */}
        <div className="container flex space-x-2 text-xl py-3">
          {icons.map((icon) => {
            return <FontAwesomeIcon icon={["fab", icon]}></FontAwesomeIcon>;
          })}
        </div>
        <p className=" text-sm">{subtitle}</p>
      </div>
    </div>
  );
  /* } else {
    return (
      <Link to={`/${name}`} className={`grid grid-cols-2 py-5 `}>
        <div className="container  ">
          <h1 className="font-bold text-2xl">{name}</h1>
         
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
            className="object-cover h-full inline-block "
          />
        </div>
      </Link>
    );
  } */
}

export default WorkListItem;

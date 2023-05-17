import React from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-options">
      <Link
        to={"/portfolio-V2"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <p className="menu-options__about">Home</p>
      </Link>
      <Link
        to={"/about"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <p className="menu-options__about">About</p>
      </Link>
      <Link
        to={"/projects"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <p className="menu-options__projects">Projects</p>
      </Link>
      <Link
        to={"/contact"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <p className="menu-options__contact">Contact</p>
      </Link>
    </div>
  );
};

export default Menu;

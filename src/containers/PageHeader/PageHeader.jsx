import React from "react";
import "./PageHeader.scss";
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <div className="header">
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <h1 className="header__title">Becky Rushton</h1>
      </Link>

      <div className="header__options">
        <Menu />
      </div>
    </div>
  );
};

export default PageHeader;

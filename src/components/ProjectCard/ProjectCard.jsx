import React from "react";
import "./ProjectCard.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={project.image} alt="project-preview" id="project-image" />
      </div>
      <div className="project-card__info">
        <p className="project-card__info--techStack">{project.techStack}</p>
        <p className="project-card__info--title">{project.title}</p>
        <p className="project-card__info--text">{project.text}</p>
      </div>
      <div className="project-card__button">
        <Link
          to={"/projectpage"}
          style={{ color: "inherit", textDecoration: "inherit" }}
          className="project-card__button--code"
        >
          <Button buttonText={"Find out more..."} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

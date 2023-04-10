import React from "react";
import "./Projects.scss";
import PageHeader from "../../containers/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectData from "../../data/ProjectData.js";

const Projects = () => {
  const populateProjects = projectData.map((project, index) => {
    return (
      <div key={index}>
        <ProjectCard project={project} />
      </div>
    );
  });
  return (
    <div>
      <PageHeader />
      <div className="projects">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__cards">{populateProjects}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;

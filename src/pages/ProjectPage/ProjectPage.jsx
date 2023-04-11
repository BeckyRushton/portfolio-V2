import React from "react";
import "./ProjectPage.scss";
import PageHeader from "../../containers/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";

const ProjectPage = ({ projectData }) => {
  const { id } = useParams();
  const targetArr = projectData.filter((project) => {
    if (project.id === id) {
      return true;
    } else {
      return false;
    }
  });
  const targetObj = targetArr[0];
  return (
    <div>
      <PageHeader />
      <div className="project-page">
        <h2 className="project-page__title">{targetObj.title}</h2>
        <p className="project-page__about">{targetObj.text}</p>
        <p className="project-page__techstack">{targetObj.techStack}</p>
        <div className="project-page__planning">
          <img src="#" alt="drawn out plans of project" />
        </div>
        <div className="project-page__preview">
          <img src="#" alt="preview of project" />
        </div>
        <div className="project-page__buttons">
          <Button buttonText={"Code"} />
          <Button buttonText={"Preview"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;

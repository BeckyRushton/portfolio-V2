import React from "react";
import "./Main.scss";
import IntroImg from "../../assets/images/personalisation/girl-coder.png";
import BeckyImg from "../../assets/images/personalisation/profile.jpg";
import GitImg from "../../assets/images/icons/git-icon.png";
import BemImg from "../../assets/images/icons/bem-icon.png";
import HTMLImg from "../../assets/images/icons/html-icon.png";
import CSSImg from "../../assets/images/icons/css3-icon.png";
import SASSImg from "../../assets/images/icons/scss-icon.png";
import JavaImg from "../../assets/images/icons/java-icon.png";
import JavascriptImg from "../../assets/images/icons/javascript-icon.png";
import SpringImg from "../../assets/images/icons/springboot-icon.png";
import ReactImg from "../../assets/images/icons/react-icon.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectData from "../../data/ProjectData";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const populateProjects = projectData.map((project, index) => {
    return (
      <div key={index}>
        <ProjectCard project={project} />
      </div>
    );
  });
  return (
    <div className="main-container">
      <div className="intro-container">
        <div className="intro-container__text">
          <p className="intro-container__tagline">Hey! I'm Becky Rushton 💁🏼‍♀️</p>
          <h1 className="intro-container__title">
            <span id="highlighter">
              Junior Software Developer based in London, UK.
            </span>
          </h1>
        </div>
        <img
          className="intro-container__artwork"
          src={IntroImg}
          alt="Female with laptop and coding symbol in speech bubble"
        />
      </div>
      <div className="about-container">
        <div className="about-container-top">
          <h3 className="about-container__title">About Me</h3>
        </div>
        <div className="about-container-bottom">
          <div className="about-container__image">
            <img
              className="about-container__image--pic"
              src={BeckyImg}
              alt="profile owner"
            />
          </div>
          <p className="about-container__text">
            Originally from Wales, I am a 27-year-old living in greater London
            with my rescue cat, Fig. A crochet enthusiast with a background in
            communications and gender and cultural studies, I have combined my
            passion for media and design to pursue a career in software
            development. My goal is to become a full-stack developer, creating
            beautifully designed websites and functional applications as well as
            contributing to the representation of female coders in the
            ever-changing tech industry.
            <span className="about-container__hashtag">#WomenInStem</span>
          </p>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-container-top">
          <h3 className="skills-container__title">Technical Skills</h3>
        </div>
        <div className="skills-container-bottom">
          <div className="skills-container__icons">
            <img
              className="skills-container__icons--spring"
              src={SpringImg}
              alt="Spring Boot Icon"
            />
            <img
              className="skills-container__icons--java"
              src={JavaImg}
              alt="Java Icon"
            />
            <img
              className="skills-container__icons--react"
              src={ReactImg}
              alt="React Icon"
            />
            <img
              className="skills-container__icons--bem"
              src={BemImg}
              alt="BEM Icon"
            />
            <img
              className="skills-container__icons--scss"
              src={SASSImg}
              alt="SCSS Icon"
            />
            <img
              className="skills-container__icons--javascript"
              src={JavascriptImg}
              alt="JavaScript Icon"
            />
            <img
              className="skills-container__icons--css"
              src={CSSImg}
              alt="CSS Icon"
            />
            <img
              className="skills-container__icons--html"
              src={HTMLImg}
              alt="HTML Icon"
            />
            <img
              className="skills-container__icons--git"
              src={GitImg}
              alt="Git Icon"
            />
          </div>
          <p className="skills-container__text">
            During my training with _nology I've learned a variety of key
            programming languages and processes shown above. I have a strong
            affinity towards JavaScript, React and SCSS and my particular
            strengths are organised, dry code, Github version control, and sleek
            styling.
          </p>
        </div>
      </div>
      <div className="projects-container">
        <h3 className="projects-container__title">Projects</h3>
        <div className="projects-container__cards">{populateProjects}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;

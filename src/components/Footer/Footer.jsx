import React from "react";
import "./Footer.scss";
import CVImg from "../../assets/images/icons/cv.png";
import GitHubImg from "../../assets/images/icons/github.png";
import LinkedInImg from "../../assets/images/icons/linkedin.png";
import CodeHeart from "../../assets/images/personalisation/girlcode.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__icons">
        <a href="https://github.com/BeckyRushton" target="_blank">
          <img
            className="footer-container__icons--git"
            src={GitHubImg}
            alt="GitHub Icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/becky-rushton-556759172/"
          target="_blank"
        >
          <img
            className="footer-container__icons--linkedin"
            src={LinkedInImg}
            alt=" Linkedin Icon"
          />
        </a>
        <a href="#">
          <img
            className="footer-container__icons--cv"
            src={CVImg}
            alt="CV Icon"
          />
        </a>
      </div>
      <img
        className="footer-container__code-heart"
        src={CodeHeart}
        alt="girl-code-heart"
      />
      <div className="footer-container__info">
        <p className="footer-container__info--tagline">Get in touch</p>
        <a
          className="footer-container__info--email"
          href="mailto:someone@example.com"
        >
          beckyrushton30@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;

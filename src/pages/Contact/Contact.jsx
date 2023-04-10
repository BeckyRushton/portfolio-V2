import React from "react";
import "./Contact.scss";
import PageHeader from "../../containers/PageHeader/PageHeader";
import GitHub from "../../assets/images/icons/github.png";
import LinkedIn from "../../assets/images/icons/linkedin.png";
import GirlCoder from "../../assets/images/personalisation/girl-coder.png";
import CodeHeart from "../../assets/images/personalisation/girlcode.png";

const Contact = () => {
  return (
    <div>
      <PageHeader />
      <div className="contact">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__info">
          Feel free to get in touch via my online profiles on LinkedIn and
          GitHub or email me directly.
          <span id="email-span">beckyrushton30@gmail.com</span>
          <div className="contact__info--icons">
            <img src={GitHub} alt="github icon" />
            <img src={LinkedIn} alt="linked in icon" />
          </div>
        </div>
        <div className="contact__image">
          <img
            src={GirlCoder}
            alt="girl coding at laptop"
            className="contact__image--pic1"
          />
          <img
            src={CodeHeart}
            alt="code heart"
            className="contact__image--pic2"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./About.scss";
import PageHeader from "../../containers/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import BeckyImg from "../../assets/images/personalisation/profile.jpg";

const About = () => {
  return (
    <div>
      <PageHeader />
      <h2 className="about__title">About Me</h2>
      <div className="about">
        <div className="about__image">
          <img
            className="about__image--pic"
            src={BeckyImg}
            alt="profile owner"
          />
        </div>
        <p className="about__text">
          Originally from Wales, I am a 27-year-old living in greater London
          with my rescue cat, Fig. A crochet enthusiast with a background in
          communications and gender and cultural studies, I have combined my
          passion for media and design to pursue a career in software
          development. My goal is to become a full-stack developer, creating
          beautifully designed websites and functional applications as well as
          contributing to the representation of female coders in the
          ever-changing tech industry.
          <span className="about__hashtag">#WomenInStem</span>
        </p>
      </div>
      <div className="about__list">
        <h3 className="about__list--title">
          When I'm not coding, you can find me...
        </h3>
        <ul className="about__list--points">
          <li>🧶 Crocheting something warm</li>
          <li>🎥 Watching tv shows on repeat</li>
          <li>🚶🏼‍♀️ Walking somewhere pretty</li>
          <li>🐈‍⬛ Cuddling my cat</li>
          <li>☕ Drinking a giant cup of tea</li>
          <li>🏘️ Designing houses on The Sims</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default About;

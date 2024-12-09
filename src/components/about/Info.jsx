import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <br></br>
        <span className="about__subtitle">Intern</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <br></br>

        <span className="about__subtitle">5+ Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>

        <h3 className="about__title">Support</h3>
        <br></br>

        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;

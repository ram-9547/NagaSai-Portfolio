import React from "react";
import Frontend from "./Frontend";
import Other from "./Other";
import Blockchain from "./blockchain";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">What I Do!</span>

      <div className="skills__container container">
        <Frontend />
        <Other />
        {/* <Blockchain /> */}
      </div>
    </section>
  );
};

export default Skills;

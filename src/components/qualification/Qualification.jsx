import React from "react";
import "./qual.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="Qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active "
                : "qualification__button "
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.S. in IoT & Software Engineering</h3>
                <span className="qualification__subtitle">
                  University of Cumberland
                </span>
                <span>
                  America
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Aug 2019 – May 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">B.Tech in IoT & Software Engineering</h3>
                <span className="qualification__subtitle">
                  KLU University
                </span>
                <span>
                  Vijayawada, India
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2019 - 23
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Matriculation</h3>
                <span className="qualification__subtitle">
                  Madhuri Vidhyalaya School, Gollaprolu
                </span>
                <span>
                  CGPA:10
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active button--flex"
                : "qualification__content button--flex"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Engineering Intern
                </h3>
                <span className="qualification__subtitle">Tech Innovators Ltd., Hyderabad, India</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> May 2023 – Aug 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ReactJS Developer</h3>
                <span className="qualification__subtitle">
                  Lejhro
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> july 2023 - present
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

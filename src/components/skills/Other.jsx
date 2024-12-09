import React from "react";
import { SiThealgorithms } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai';


const Other = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Competitive Programming</h3>
      <div className="skills__box">
        <div className="skills__group">
        <div className="skills__data">
            <i class='bx bxl-c-plus-plus' ></i>
            <div>
              <h3 className="skills__name">C++</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i class='bx bxl-c-plus-plus'></i>
            <div>
              <h3 className="skills__name">C language</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-c-plus-plus"></i>
            <div>
              <h3 className="skills__name">DSA</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <AiOutlineConsoleSql />
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <TbBrandNextjs />
            <div>
              <h3 className="skills__name">OOPs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">DBMS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-c-plus-plus"></i>
            <div>
              <h3 className="skills__name">Operating System</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <SiThealgorithms />
            <div>
              <h3 className="skills__name">DSA</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Other;

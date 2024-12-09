import React from "react";
import { SiMui } from 'react-icons/si';


const Blockchain = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        Blockchain Development <br />
      </h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">Solidity</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            <SiMui />
            <div>
              <h3 className="skills__name">Truffle</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i class="bx bxl-css3"></i> */}
              <i class='bx bxl-tailwind-css'></i>
            <div>
              <h3 className="skills__name">Smart Contracts</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class='bx bxl-bootstrap' ></i>
            <div>
              <h3 className="skills__name">Ethereum</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;

import React from "react";
import { useState } from "react";
import "../Pages/Work.css";
import img from "../../Images/git.png";

const Work = () => {
  const [work] = useState({
    titel: "My",
    titeltwo: "Work",
  });
  return (
    <>
      <div className="work">
        <div className="work_heading">
          <h1>
            {work.titel} <span>{work.titeltwo}</span>
          </h1>
        </div>
        <div className="work_box">
          <div className="box">
            <img src={img} alt="" />
            <h3>As a Web Developer, You Should know Git & GitHub!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              illum sapiente voluptate. Expedita, eum atque.
            </p>
            <div className="btn">
              <button>Code</button>
              <button>Demo</button>
            </div>
          </div>
          
          <div className="box">
            <img src={img} alt="" />
            <h3>As a Web Developer, You Should know Git & GitHub!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              illum sapiente voluptate. Expedita, eum atque.
            </p>
            <div className="btn">
              <button>Code</button>
              <button>Demo</button>
            </div>
          </div>

          <div className="box">
            <img src={img} alt="" />
            <h3>As a Web Developer, You Should know Git & GitHub!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              illum sapiente voluptate. Expedita, eum atque.
            </p>
            <div className="btn">
              <button>Code</button>
              <button>Demo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;

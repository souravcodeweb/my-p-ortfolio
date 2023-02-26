import React, { useState } from 'react';
import {AiFillHtml5} from "react-icons/ai";
import "../Pages/Skills.css";


const Skills = () => {
  const [skill] = useState({
    titel: "My Skill"
  })
  return (
    <>
      <div className="skill">
        <div className="skill_heading">
          <h1>{skill.titel}</h1>
        </div>
        <div className="skill_box">
            <div className="box"><AiFillHtml5/></div>
        </div>
      </div>
    </>
  )
}

export default Skills
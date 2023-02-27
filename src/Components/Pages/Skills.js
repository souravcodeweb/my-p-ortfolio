import React, { useState } from 'react';
import {AiFillHtml5} from "react-icons/ai";
import "../Pages/Skills.css";
import {DiCss3} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import {GrReactjs} from "react-icons/gr";
import {SiNextdotjs} from "react-icons/si";
import {GrNode} from "react-icons/gr";
import {SiExpress} from "react-icons/si";
import {FaPython} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {FiFigma} from "react-icons/fi";
import {DiMongodb} from "react-icons/di";
import {DiMysql} from "react-icons/di";
import {TbBrandReactNative} from "react-icons/tb"


const Skills = () => {
  const [skill] = useState({
    titel: "My",
    titeltwio: "Skill"
  })
  return (
    <>
      <div className="skill">
        <div className="skill_heading">
          <h1><span>{skill.titel}</span>{skill.titeltwio}</h1>
        </div>
        <div className="skill_box">
            <div className="box">
              <span><AiFillHtml5/></span>
            </div>
            <div className="box">
              <span><DiCss3/></span>
            </div>
            <div className="box">
              <span><IoLogoJavascript/></span>
            </div>
            <div className="box">
              <span><GrReactjs/></span>
            </div>
            <div className="box">
              <span><SiNextdotjs/></span>
            </div>
            <div className="box">
              <span><GrNode/></span>
            </div>
            <div className="box">
              <span><SiExpress/></span>
            </div>
            <div className="box">
              <span><FaPython/></span>
            </div>
            <div className="box">
              <span><AiFillGithub/></span>
            </div>
            <div className="box">
              <span><FiFigma/></span>
            </div>
            <div className="box">
              <span><DiMongodb/></span>
            </div>
            <div className="box">
              <span><DiMysql/></span>
            </div>
            <div className="box">
              <span><TbBrandReactNative/></span>
            </div>
        </div>



      </div>
    </>
  )
}

export default Skills
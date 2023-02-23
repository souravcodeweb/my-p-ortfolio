import React from 'react';
import "../Pages/Home.css";
import img from "../../../src/Images/myimg.jpg";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="hero">
      <div className="text">
        <h1>Hello, It's Me</h1>
        <h2>Sourav Mandal</h2>
        <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
        <h3>And i'M a <span>Frontend Developer</span></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, <br /> voluptate. Lorem ipsum dolor sit amet.</p>

        <div className="socile_media">
          <a href="https://twitter.com/souravcode" target="_blank"><AiOutlineTwitter/></a>
          <a href="https://www.linkedin.com/in/souravcode/" target="_blank"><AiFillLinkedin/></a>
          <a href="https://www.instagram.com/souravcode/" target="_blank"><AiFillInstagram/></a>
          <a href="https://www.youtube.com/channel/UC34QqM-x6iaOD9ikoch9FAg" target="_blank"><AiFillYoutube/></a>
          <a href="https://github.com/souravcodeweb" target="_blank"><AiFillGithub/></a>
        </div>
        <div className="btn">
          <a href="#" download="#">Download CV</a>
        </div>

      </div>
      <div className="img">
        <img src={img} alt="logo" />
      </div>
    </div>
  )
}

export default Home
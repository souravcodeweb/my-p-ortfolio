import React from "react";
import "../Pages/Home.css";
import img from "../../../src/Images/myimg.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="text">
        <h1>Hello, It's Me</h1>
        <h2>Sourav Mandal</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Eum,
          voluptate. Lorem ipsum dolor sit amet.
        </p>

        <div className="socile_media">
          <a
            href="https://twitter.com/souravcode"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/souravcode/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/souravcode/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UC34QqM-x6iaOD9ikoch9FAg"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://github.com/souravcodeweb"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
        <div className="btn">
          <Link href="#" download="#">
            Download CV
          </Link>
        </div>
      </div>
      <div className="img">
        <img src={img} alt="logo" />
      </div>
    </div>
  );
};

export default Home;

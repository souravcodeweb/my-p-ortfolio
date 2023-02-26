import React, { useState } from "react";
import "../Pages/Home.css";
import img from "../../../src/Images/myimg.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import About from "./About";

const Home = () => {
  const [state] = useState({
    titel: "Hello, It's Me",
    myname: "Sourav Mandal",
  });

  return (
    <>
      <div className="hero">
        <div className="text">
          <h1>{state.titel}</h1>
          <h2>{state.myname}</h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "I am a Web Developer",
                "I am a Full Stact Web Deeveloper",
                "I am a Youtuber",
                "I am a Content Creator",
                "I am a Mentor",
              ],
            }} 
          />
          <p>
            Hi, I am a front-end web developer with a
            passion <br /> for creating engaging and responsive websites. <br /> With 1.5
            years of experience in the industry, <br /> I have a deep understanding of
            HTML, CSS, JavaScript, <br /> and other web technologies.
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
            <Link href="/7" download="#">
              Download CV
            </Link>
          </div>
        </div>
        <div className="img">
          <img src={img} alt="logo" />
        </div>
      </div>

      <About />
    </>
  );
};

export default Home;

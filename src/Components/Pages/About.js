import React from "react";
import "../Pages/About.css";
import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
// import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  const [about] = useState({
    titel: "About",
    me: "Me",
  });
  return (
    <>
      <div className="heading">
        <h1>
          <span>{about.titel}</span> {about.me}
        </h1>
      </div>
      <div className="about_main">
        <p>
          HI i am Sourav Mandal, I am a skilled front-end web developer with a
          passion for creating engaging and responsive websites. With 5 years of
          experience in the industry, I have a deep understanding of HTML, CSS,
          JavaScript, and other web technologies.
          <br /> <br />
          My expertise lies in writing clean, efficient, and maintainable code
          using the latest front-end frameworks and development tools. I take
          great pride in collaborating with designers and back-end developers to
          create visually appealing and user-friendly websites. I am committed
          to delivering high-quality work and ensuring that websites are
          optimized for performance, responsive design, and cross-browser
          compatibility.
          <br /> <br />
          e worked on a variety of web development projects for clients in
          various industries. I have developed custom webPages, conducted
          website audits to improve search engine rankings, and created and
          maintained documentation for website projects.
          <br /> <br />
          I have Completed my Higher secondary of Sarenga M.S Vidypeeth, Anytown
          has provided me with a solid foundation for my work as a front-end web
          developer. Additionally, I have received certifications in web
          development and responsive web design and am always eager to continue
          learning and improving my skills.
          <br /> <br />
          Thank you for taking the time to visit my portfolio website. If you
          are looking for a front-end web developer who is dedicated to
          delivering quality work and improving the user experience, please
          don't hesitate to contact me.
        </p>
      </div>
      <div className="about_socile">
        <a
          href="https://twitter.com/souravcode"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter />
        </a>

        {/* <a href="#" rel="noreferrer" target="_blank">
            <HiOutlineMail />
          </a> */}
        <a
          href="https://www.linkedin.com/in/souravcode/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </>
  );
};

export default About;

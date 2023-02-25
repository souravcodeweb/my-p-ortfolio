import React from 'react';
import "../Pages/About.css"
import { useState } from 'react';

const About = () => {
  const [about] = useState({
    heading: "About Us",
    titel: "About Me.",
    aboutme: " Hey 👋 There I am Sourav Mandal a full stack web developer from India. I always like to use advanced technology for creating useful products and I like to use advanced programming languages & Frameworks like Python, JavaScript, React, nextjs, MongoDB, etc...  I have worked on react and nextjs. I love to learn new Technology for creating something new and amazing. I always try to learn something new and build something better and try to grow up by day by day. From 2021 I sharing my knowledge on social media like Twitter and Linkedin. I love to listening music 🎵🎶 when I am walking my favorite music band is ( THE SCORE ). I love to play guitar 🎸 I love dogs. usually, I read books when  I am free. I always try to help everyone. if you need any help with me about programming drop me a mail ✉ (sourav@souravmandal.com) "
  })
  return (
    <>
     <div className="heading">
      <h1>{about.heading}</h1>
     </div>
     <div className="about_main">
      <p>{about.aboutme}</p>
     </div>
    </>
  )
}

export default About
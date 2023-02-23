import React from "react";
import Navbar from "./Components/Ui/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Work from "./Components/Pages/Work";
import Videos from "./Components/Pages/Videos";
import Blogs from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";
import Skills from "./Components/Pages/Skillss";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="skills" element={<Skills/>} />
        <Route path="work" element={<Work/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="videos" element={<Videos/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
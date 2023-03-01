import React from 'react';
import "../Pages/Blogs.css";
import img from "../../Images/git.png";


const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog_heading">
        <h1>My <span>Blogs</span></h1>
      </div>
      <div className="blog_card">
        <div className="card_container">
          <div className="card">
            <div className="img_wrap">
              <img src={img} alt="logo" />
            </div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt autem quas alias reiciendis a sint?</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <div className="img_wrap">
              <img src={img} alt="logo" />
            </div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt autem quas alias reiciendis a sint?</p>
            <button>Read More</button>
          </div>
          <div className="card">
            <div className="img_wrap">
              <img src={img} alt="logo" />
            </div>
            <h2>Lorem, ipsum.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt autem quas alias reiciendis a sint?</p>
            <button>Read More</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Blogs
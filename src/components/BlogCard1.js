import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/potato.png";
const BlogCard1 = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">02 April 2023</p>
        <h5 className="title">Potato – Diseases And Symptoms</h5>
        <p className="desc">
        Potatoes are one of the most common and important food sources on the planet. While there are several benefits of growing potatoes, it’s important to ...
        </p>
        <Link to="/blog/1" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default BlogCard1;

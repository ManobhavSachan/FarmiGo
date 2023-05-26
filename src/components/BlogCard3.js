import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/blog-1.jpg";
const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">15 April 2023</p>
        <h5 className="title">Problems faced by farmers in existing market</h5>
        <p className="desc">
          Firstly ,the mandis were about 30 to 50 km far away from the farmers
          ,and more than 80 percent of the farmers in our country are still
          small farmers .So....
        </p>
        <Link to="/blog/3" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

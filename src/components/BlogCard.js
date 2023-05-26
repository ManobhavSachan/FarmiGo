import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/blogcard.jpg";
const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} className="img-fluid w-100 " alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">15 April 2023</p>
        <h5 className="title">7 Tips To Get The Best Wheat Produce</h5>
        <p className="desc">
        Wheat is one of the most important food crops in the world and wheat farming requires proper planning to produce a high yield.

Most farmers prefer growing wheat in winter when the average temperature is between 18-24 degree Celsius. However...
        </p>
        <Link to="/blog/5" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

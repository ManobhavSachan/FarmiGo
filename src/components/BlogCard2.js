import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/Onion.jpg";
const BlogCard2 = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">31 March 2023</p>
        <h5 className="title">Important Tips On Onion Farming</h5>
        <p className="desc">
        Mr. Geete and his three sons carry out onion farming in the water-deficient district of Ahmednagar. The Geete family is the perfect example of how education and knowledge of modern farming techniques can revolutionise farming. Here’s what they did....
        </p>
        <Link to="/blog/2" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default BlogCard2;
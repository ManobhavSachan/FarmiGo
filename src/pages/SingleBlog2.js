import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/Onion.jpg";
import Container from "../components/Container";

const SingleBlog2 = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">Important Tips On Onion Farming</h3>
              <img src={blog} className="img-fluid w-80  my-4" alt="blog" />
              <p>
                <ul>
                Mr. Geete and his three sons carry out onion farming in the water-deficient district of Ahmednagar. The Geete family is the perfect example of how education and knowledge of modern farming techniques can revolutionise farming. Here’s what they did to get more production –
                <li>Water supply: Despite having 3-4 wells and borewells, crops could not get enough water and hence the production suffered. To deal with this problem, first they created a water reservoir with more than 5 Crore litre capacity. In addition, to ensure proper supply and minimise water wastage, they adopted drip irrigation system.</li>
                </ul>
                <ul>
                If you wish to export onions, here are a few things you should take care of –
                <li>Onions should be ripe</li>
                <li>They must be properly dried</li>
                <li>The size and colour of onions should be similar</li>
                <li>Make sure there are no doubles.</li>
                <li>Ensure maximum storage capacity</li>
                </ul>
               
                <ul>
                A quick glance at the basic requirements of onion –
                <li>Onions grow well in well drained, fertile, sandy loam, non-compacted soils</li>
                <li>The ideal pH is 5.8 to 6.8</li>
                <li>Ideal temperature is 15-35 degree Celsius</li>
                <li>The best time for harvesting is during the dry season</li>
                </ul>
                </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog2;
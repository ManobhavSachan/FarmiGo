import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
const SingleBlog = () => {
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
              <h3 className="title">Problems faced by farmers in existing market</h3>
              <img src={blog} className="img-fluid w-80  my-4" alt="blog" />
              <p>
                <ul>
                  Firstly ,the mandis were about 30 to 50 km far away from the
                  farmers ,and more than 80 percent of the farmers in our
                  country are still small farmers . So they couldn't have
                  storage facilites and neither transportation arrangements .So
                  they Either had to rent a truck or sell it to junior
                  contractor ,who later send it too senior contractor , who
                  later to APMC.
                </ul>
                <ul>
                  Secondly , the farmers had no way to find out what exactly was
                  a price being offered at a particular mandi on a particular
                  day , so they had to rely on the word of mouth and had to
                  travel 50 km hoping that this word of mouth be true.
                </ul>
                <ul>
                  Lastly , Since no other traders was allowed to procure crops
                  from the farmers, the licensed traders formed a cartel and
                  instead of auctioning for the highest price ,they all quoted
                  the same price , which was way below the standard price of the
                  crops . Since the farmers have travelled so far and can't go
                  back and also cant sell anywhere else , so they accept it for
                  merge profit and sometimes even loss.
                </ul>
                <ul>
                  The mandi traders did not pay the farmers right away and paid
                  them only when they get profits . The time of crediting was
                  between 1 week to 1 month … So the system has put the farmers
                  into a very vicious cycle…
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;

import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/potato.png";
import Container from "../components/Container";

const SingleBlog1 = () => {
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
              <h3 className="title">Potato – Diseases And Symptoms</h3>
              <img src={blog} className="img-fluid w-80  my-4" alt="blog" />
              <p>
                <ul>
                Potatoes are one of the most common and important food sources on the planet. While there are several benefits of growing potatoes, it’s important to know that there are many diseases that the tubers catch. So, if you are growing potatoes this season, here are the types of potato diseases, potato disease control, and their management you should know:
                </ul>
                <ul>
                <li><b>Late blight: </b>Late blight damages leaves, stems and tubers (potatoes). Affected leaves appear blistered as if scalded by hot water and eventually rot and dry out. To treat late blight, plant resistant cultivators are used. You should also use soaker hoses to give plants time to dry out during the day as the disease develops in humid conditions.</li>
                <li><b>Bacterial Wilt:</b> In this disease, the infected plant first begins to wilt and spreads to all parts of the plant. Leaves become yellow at their bases. Then the whole plant wilts and dies. Bacterial wilt has no cure. However, it can be controlled using methods of crop rotation, selecting suitable sites, using certified seeds and uprooting diseased plants.</li>
                <li><b>Blackheart disorder:</b>Blackheart occurs primarily in storage when the tubers do not receive enough oxygen. The potatoes develop acute oxygen deficiency that results in blackening at the center. The tissue dies from the inside out and turns jet black. The disease occurs either due to low temperature in confined storage or high field soil temperatures. Blackheart can be prevented through good ventilation in storage, avoiding flooded areas and extreme temperatures.
                </li>
                
                </ul>
                
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog1;
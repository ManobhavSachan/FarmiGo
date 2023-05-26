import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blogcard.jpg";
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
              <h3 className="title">7 Tips To Get The Best Wheat Produce</h3>
              <img src={blog} className="img-fluid w-80  my-4" alt="blog" />
              <p>
                <ul>
                Wheat is one of the most important food crops in the world and wheat farming requires proper planning to produce a high yield.
                Most farmers prefer growing wheat in winter when the average temperature is between 18-24 degree Celsius. However, farmers who reside in extremely cold climates prefer the spring season as it allows enough sunlight for the wheat crop to flourish.
                </ul>
                <ul>
                <b>Seven tips for successful wheat seeding and farming for maximum yield:</b>
                <ol>
                  <li>Pick a dry area for cultivation: Wheat is both a spring and winter crop, and utilizes at least 8 hours of sun on a daily basis. Therefore, avoid picking a site that’s too shady and doesn’t allow enough sunlight.</li>
                  <li>Prepare the land well in advance: Growing wheat requires prepping the soil for strong root growth. Till your soil to a depth of at least 15 cm, and make sure that it’s even.</li>
                  <li>Spread the wheat seeds in a semi-circular motion: You can always use a seed spreader too, as long as it spreads the seeds at approximately one seed per 2.5 sq. cm.</li>
                  <li>Use phosphorus, nitrogen & Potassium fertilization: Phosphorus and nitrogen collectively help develop strong roots which will help the wheat crop survive winter. Optimum dose of Mahadhan 12:32:16 (75 Kg/ac) can help wheat growers to get more yield. In addition to this, application of Mahadhan Bensulf (10 kg/ac) & Mahadhan Zinc sulphate (10 Kg/ac) can further help wheat farmers to get quality oriented higher yield fetching better market price. However, note that excessive nitrogen fertilization can have adverse effects on the crop’s sustenance.</li>
                  <li>Water right after planting the seeds: Winter wheat crops require water as soon as the seeds are planted. It is imperative to keep the entire planting area moist until the plant begins to develop. Then on, follow a strict irrigation schedule.</li>
                  <li>Follow an irrigation schedule: For maximum yield of wheat crop, an irrigation schedule of 6 stages post sowing is highly recommended:</li>
                  <ul>
                    <li>1st irrigation – 3-4 weeks</li>
                    <li>2nd irrigation – 40-45 days</li>
                    <li>3rd irrigation – 60-65 days</li>
                    <li>4th irrigation – 80-85 days</li>
                    <li>5th irrigation – 100-105 days</li>
                    <li>6th irrigation – 105-120 days</li>
                  </ul>
                  <li>Use pesticides and insecticides as necessary: Wheat crop is not averse to slugs and insects that can wreak havoc on the plantation, especially when the wheat is still very short. Use chemicals like Chlorpyrifos and acetamiprid in such a case that effectively manage the insects.</li>
                </ol>
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

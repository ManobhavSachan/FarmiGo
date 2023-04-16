import React from "react";
import { Link } from "react-router-dom";
import organicFarming from "../images/organicFarming.jpg";
import riceplant from "../images/riceplant.jpg";
import cotonplant from "../images/cotonplant.jpg";
import potato from "../images/potato.jpg";
import tomato from "../images/tomato.jpg";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5 ">
        <div className="row">
          <div className="col-6">
          
            <div className="main-banner position-relative ">
              <img
                src={organicFarming}
                
                className="img-fluid rounded-3 opacity-10"
                alt="main banner"
              />
             
              <div className="main-banner-content  position-absolute">
                <h4>Freshly Harvested</h4>
                <h5>WHEAT.</h5>
                <p>From 2254INR to 4800INR/Quintal.</p>
                <Link to="/Product" className="button" >BUY NOW</Link>
              </div>
            
            </div>
            
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={riceplant}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>RICE.</h5>
                  <p>
                    From 3018INR <br /> to 4700INR/Quintal.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={cotonplant}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>COTON</h5>
                  <p>
                    From 7405INR <br /> to 8000INR/Quintal.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={potato}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>POTATO</h5>
                  <p>
                  From 955INR <br /> to 2000INR/Quintal.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={tomato}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>TOMATO</h5>
                  <p>
                  From 1469INR <br /> to 2000INR/Quintal.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
 
     
    </>
  );
};

export default Home;

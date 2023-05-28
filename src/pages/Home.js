import React from "react";
import { Link } from "react-router-dom";
import organicFarming from "../images/organicFarming.jpg";
import riceplant from "../images/riceplant.jpg";
import rice1 from "../images/rice2.jpg";
import rice2 from "../images/rice1.jpg";
import cotonplant from "../images/cotonplant.jpg";
import coton1 from "../images/coton1.jpg";
import coton2 from "../images/coton2.jpg";
import potato from "../images/potato.jpg";
import potato1 from "../images/potato2.jpg";
import potato2 from "../images/Potato1.jpg";

import apple1 from "../images/apple1.jpg";
import apple2 from "../images/apple2.jpg";

import banana1 from "../images/banana1.jpg";
import banana2 from "../images/banana2.jpg";

import carrot1 from "../images/carrot1.jpg";
import carrot2 from "../images/carrot2.jpg";

import mango1 from "../images/mango.jpg";
import mango2 from "../images/mango2.jpg";



import tomato from "../images/tomato.jpg";
import tomato1 from "../images/tomatoProduct.jpg";
import tomato2 from "../images/tomatoProduct2.jpg";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import Translate from "../components/Translate";
const Home = () => {
  return (
    <>
      <Translate/>
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
          <ProductCard src1={tomato1} src2={tomato2} src3={potato1} src4={potato2} name1="TOMATO" name2="POTATO"/>
          <ProductCard src1={coton1} src2={coton2} src3={rice1} src4={rice2} name1="COTTON" name2="RICE"/>
          <ProductCard src1={apple1} src2={apple2} src3={banana1} src4={banana2} name1="APPLE" name2="BANANA"/>
          <ProductCard src1={carrot1} src2={carrot2} src3={mango1} src4={mango2} name1="CARROT" name2="MANGO"/>
          
        </div>
      </Container>
 
     
    </>
  );
};

export default Home;

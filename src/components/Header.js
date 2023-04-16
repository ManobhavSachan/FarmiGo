import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import market from "../images/market-removebg-preview.png"
import blog from "../images/blog.png"

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  FarmiGo
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/SellProduct"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Sell <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/blogs"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={blog} width = '40' alt="blog" />
                    <p className="mb-0">Blogs</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={market} width = '40' alt="market" />
                    <p className="mb-0">Market</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
                    {/* <p className="mb-0">Favourite</p> */}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" />
                    {/* <p className="mb-0">
                      Log in <br /> 
                     
                    </p> */}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge text-dark"></span>
                      {/* <p className="mb-0">10000INR</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="header-bottom py-2 d-flex align-items-center">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="text-center">
              <div className="sticky-top">
                <div className="menu-links ">
                  <div className="d-flex align-items-center gap-15 justify-content-center">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Market</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
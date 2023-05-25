import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Login from "./pages/Login";
import Expert from './pages/Expert';

import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import SellProduct from "./pages/SellProduct.js";
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import SingleBlog1 from './pages/SingleBlog1';
import SingleBlog2 from './pages/SingleBlog2';
import SingleBlog3 from './pages/SingleBlog3';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="SellProduct" element={<SellProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/1" element={<SingleBlog1 />} />
            <Route path="blog/2" element={<SingleBlog2 />} />
            <Route path="blog/3" element={<SingleBlog3 />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Expert" element={<Expert />} />

            <Route path="reset-password" element={<Resetpassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

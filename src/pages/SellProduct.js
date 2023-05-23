import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import grd1 from '../images/gr.svg';

import coton1 from '../images/coton1.jpg';
import coton2 from '../images/coton2.jpg';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import BusinessDetails from './BusinessDetails';
import UploadProducts from './UploadProducts';
import MoneyDetails from './MoneyDetails';
// import { postProduct } from '../services/auth';

const SellProduct = (props) => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const [name, setName] = useState('');
 
  const [description, setDescription] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [amount, setAmount] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isOnRent, setIsOnRent] = useState(false);
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState('');

  const [grid, setGrid] = useState(4);
  const { src1 } = props;
  const { src2 } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tags1;
    if (tags.length)
      tags1 = tags.split(',').map((tag) => tag.trim().toLowerCase());
    navigate('/product');
  };
  return (
    <>
      <Meta title={'Sell Product'} />
      <BreadCrumb title="Sell Product" />
      <Container class1="home-wrapper-2 py-5">
        <div class="card text-center">
          <div class="card-header">
            <div className="row align-items-center">
              <ul class="nav row align-items-center">
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <div
                    className={`buttonS border-0  ${
                      selected === 0 && 'bg-success'
                    }`}
                    onClick={() => {
                      setSelected(0);
                    }}
                  >
                    Details
                  </div>
                  <div
                    className={`buttonS border-0  ${
                      selected === 1 && 'bg-success'
                    }`}
                    onClick={() => {
                      setSelected(1);
                    }}
                  >
                    Gallery
                  </div>
                  <div
                    className={`buttonS border-0  ${
                      selected === 2 && 'bg-success'
                    }`}
                    onClick={() => {
                      setSelected(2);
                    }}
                  >
                    Price
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div>
            {selected === 0 && (
              <BusinessDetails
                setModalSelected={setSelected}
                name={name}
                setName={setName}
              
                dateOfPurchase={dateOfPurchase}
                setDateOfPurchase={setDateOfPurchase}
                tags={tags}
                setTags={setTags}
                description={description}
                setDescription={setDescription}
              />
            )}
            {selected === 1 && (
              <UploadProducts
                setModalSelected={setSelected}
                images={images}
                setImages={setImages}
              />
            )}
            {selected === 2 && (
              <MoneyDetails
                amount={amount}
                setAmount={setAmount}
                isOnRent={isOnRent}
                setIsOnRent={setIsOnRent}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
                returnDate={returnDate}
                setReturnDate={setReturnDate}
                handleSubmit={handleSubmit}
              />
            )}
          </div>

          {/* <div class="collapse" id="collapseExample">
            <div class="card card-body">
            <Link to="/signup" >
                    
                  </Link>
            </div>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default SellProduct;

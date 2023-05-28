import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useState } from 'react';

const MoneyDetails = ({
  amount,
  setAmount,
  issueDate,
  setIssueDate,
  returnDate,
  setReturnDate,
  
  handleSubmit,
}) => {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="col-12">
        <div className="auth-card">
          <h4 className="text-center mb-3">Price Options</h4>
          <form action="" className="d-flex flex-column gap-15">
            <div className="row justify-content-md-center">
            
            </div>
            <CustomInput
              type="text"
              name="amount"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
           
          </form>
          <div
            className="flex"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <button
              className="button border-0 align-items-right mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyDetails;

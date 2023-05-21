import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const BusinessDetails = ({
  setModalSelected,
  name,
  setName,
  dateOfPurchase,
  setDateOfHarvest,
  description,
  setDescription,
  tags,
  setTags,
}) => {
  return (
    <>
      <div className="col-12">
        <div className="auth-card">
          <h4 className="text-center mb-3">Item Details</h4>
          <h3 className="text-center mb-3">Enter Item Details</h3>
          <form action="" className="d-flex flex-column gap-15">
            <CustomInput
              type="text"
              name="name"
              placeholder="Name of Product"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          
            <CustomInput
              type="text"
              name="dateOfPurchase"
              value={dateOfPurchase}
              placeholder="Date of Harvest(DD/MM/YYYY)"
              onChange={(e) => setDateOfHarvest(e.target.value)}
            />
            {/* 
              Description
            */}
            <textarea
              type="text-area"
              name="description"
              placeholder="Description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <CustomInput
              type="text"
              name="tags"
              value={tags}
              placeholder="Add tags, seperated by commas"
              onChange={(e) => setTags(e.target.value)}
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
              onClick={() => {
                setModalSelected(1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessDetails;

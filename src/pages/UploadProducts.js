import React from 'react';
import axios from 'axios';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { BiCheck } from 'react-icons/bi';


const UploadProducts = ({ setModalSelected, images, setImages }) => {
  const [selectedFile, setSelectedFile] = React.useState([]);

  console.log(selectedFile);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', event.target.files[0]);
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'http://localhost:4000/api/files',
  //       data: formData,
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     console.log(response);
  //     if (response.status === 200) {
  //       setImages([...images, response.data.key]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleFileSelect = (event) => {
  //   setSelectedFile([...selectedFile, event.target.files[0]]);
  //   handleSubmit(event);
  // };

  return (
    // <div className="auth-card">
    <div >
      <h4 className="text-center mb-3">Gallery</h4>
      <h3 className="text-center mb-3">Enter Product Images</h3>
      <form action="" className="d-flex flex-column gap-15">
        <div
          className="d-flex flex-row justify-content-evenly"
          style={{
            width: '100%',
          }}
        >
          <input
            type="file"
            // onChange={handleFileSelect}
            style={{ display: 'none' }}
            id="contained-button-file"
          />
          <label htmlFor="contained-button-file">
            <div
              className="h-5 w-5 "
              style={{
                margin: 10,
                padding: '10px',
                borderRadius: '7px',
                backgroundColor: 'rgb(119, 177, 163)',
              }}
            >
              <IconContext.Provider
                value={{
                  size: '5em',
                }}
              >
                {!selectedFile[0] ? <AiOutlinePlus /> : <BiCheck />}
              </IconContext.Provider>
            </div>
            <h3>{selectedFile[0] ? 'Uploaded' : 'Upload Image'}</h3>
          </label>
          <label htmlFor="contained-button-file">
            <div
              className="h-5 w-5 "
              style={{
                margin: 10,
                padding: '10px',
                borderRadius: '7px',
                backgroundColor: 'rgb(119, 177, 163)',
              }}
            >
              <IconContext.Provider
                value={{
                  size: '5em',
                }}
              >
                {!selectedFile[1] ? <AiOutlinePlus /> : <BiCheck />}
              </IconContext.Provider>
            </div>
            <h3>{selectedFile[1] ? 'Uploaded' : 'Upload Image'}</h3>
          </label>
          <label htmlFor="contained-button-file">
            <div
              className="h-5 w-5 "
              style={{
                margin: 10,
                padding: '10px',
                borderRadius: '7px',
                backgroundColor: 'rgb(119, 177, 163)',
              }}
            >
              <IconContext.Provider
                value={{
                  size: '5em',
                }}
              >
                {!selectedFile[2] ? <AiOutlinePlus /> : <BiCheck />}
              </IconContext.Provider>
            </div>
            <h3>{selectedFile[2] ? 'Uploaded' : 'Upload Image'}</h3>
          </label>
        </div>
      </form>
      <form
        // onSubmit={handleSubmit}
        className="d-flex flex-row justify-content-evenly"
      >
        <input
          type="submit"
          value="Upload File"
          style={{
            margin: 20,
            padding: '10px 70px',
            borderRadius: '7px',
            backgroundColor: ' rgb(119, 177, 163);',
          }}
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
          type="submit"
          onClick={() => {
            setModalSelected(2);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadProducts;

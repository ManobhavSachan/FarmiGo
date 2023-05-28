import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Widget from '../components/Widget';


import plus from '../images/plus.svg';

import Container from '../components/Container';


const Data = [
  {
    Question: 'What crop should I plant this season?',
    Answer:
      'That depends on several factors, including the soil type, climate, market demand, and your own experience and expertise. Consult with local agricultural experts or experienced farmers for advice on the best crop to plant.',
  },
  {
    Question: 'How much fertilizer should I apply to my crops?',
    Answer:
      'The amount of fertilizer required depends on the type of crop, the nutrient content of the soil, and the growth stage of the plant. Soil testing and consultation withvagricultural experts can help determine the appropriate amount of fertilizer to apply',
  },
  {
    Question: 'How often should I water my crops?',
    Answer:
      'The frequency and amount of water required for crops depend on several factors, including the crop type, soil type, and weather conditions. Consult with agricultural experts or use soil moisture sensors to determine the optimal watering schedule',
  },
  {
    Question: ' How can I increase my farms profitability?',
    Answer: `Increasing profitability requires a combination of strategies, such as reducing costs, improving productivity,
    diversifying crops, and finding new markets. Consult with
    agricultural experts, attend business management workshops,
    or network with other farmers to learn about effective
    strategies for increasing profitability.`,
  },
  {
    Question:
      'How does organic farming help farmers?',
    Answer: `Compared with conventional agriculture, organic farming uses fewer pesticides, reduces soil erosion, decreases nitrate leaching into groundwater and surface water, and recycles animal wastes back into the farm`,
  },
  {
    Question: `Where can farmers find subsidy?`,
    Answer: `Subsidies are provided to farmers through State Governments under various schemes such as the Sub-Mission on Agricultural Mechanization (SMAM), Rashtriya Krishi Vikas Yojana (RKVY) for the purchase of various agricultural equipment and machines, National Food Security Mission (NFSM)`,
  },
];

const Accordian = ({ Data }) => {
 
  const [showIndexes, setShowIndexes] = useState([]);

  return (
    <div class="accordion" id="accordionPanelsStayOpenExample">
      {Data.map(
        (course, index) => (
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id={`flush-heading${index}`}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index}`}
                  onClick={() => {
                    if (showIndexes.includes(index)) {
                      setShowIndexes(showIndexes.filter((i) => i !== index));
                    } else {
                      setShowIndexes([...showIndexes, index]);
                    }
                  }}
                >
                  {course.Question}
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                class={`accordion-collapse collapse ${
                  showIndexes.includes(index) ? 'show' : ''
                }`}
                aria-labelledby={`flush-heading${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> {course.Answer}</div>
              </div>
            </div>
          </div>
        )

      )}
    </div>
  );
};

const Expert = (props) => {
  

  return (
    <>

      
      <Meta title={'Our Store'} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
      
        <div className="row">
          <div className="col-4 ">
          <div className="filter-sort-grid mb-4">
          <div className=" flex-item-centre gap-10">
           <h1 className="mb-0 d-block text-center " style={{ width: '25rem' ,color: '#3aa0f2' }} >
            FarmAI
           </h1>
          </div>
          <Widget/>
          </div>
          </div>
          <div className="col-8">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: '100px' }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={'manula'}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Most Searched</option>
                    <option value="title-ascending">Recent</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">
                    {/* {questions.length} Questions  */}7 Questions
                  </p>
                  <div class="dropdown">
                    <button
                      class="btn "
                      type="button"
                      id="dropdownMenuButton1"
                     
                      aria-expanded="false"
                      
                    >
                      <img src={plus} alt="plus" />
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
           
            <Accordian Data={Data} />
          </div>
        </div>
        
        
      </Container>
     
    </>
  );
};

export default Expert;

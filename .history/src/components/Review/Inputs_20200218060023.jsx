import React from "react";

const Inputs = () => {
  return (
    <>
      <div className="review-inputs-container">
        <div className="input-started">
          <p>Date Started</p>
          <input type="date" />
        </div>
        <div className="input-ending">
          <p>Date Ending</p>
          <input type="date" />
        </div>
        <div className="input-serving-size">
          <p>Serving Size</p>
          <input type="text" />
        </div>
        <div className="input-percent">
          <p>% verified</p>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Inputs;

import React from "react";

const Inputs = ({
  updateDateStarted,
  updateDateEnding,
  updateServingSize,
  updatePercentVerified
}) => {
  return (
    <>
      <div className="review-inputs-container">
        <div className="input-started">
          <p>Date Started</p>
          <input
            type="date"
            onChange={e => {
              updateDateStarted(e.target.value);
            }}
          />
        </div>
        <div className="input-ending">
          <p>Date Ending</p>
          <input
            type="date"
            onChange={e => {
              updateDateEnding(e.target.value);
            }}
          />
        </div>
        <div className="input-serving-size">
          <p>Serving Size</p>
          <input
            type="text"
            onChange={e => {
              updateServingSize(e.target.value);
            }}
          />
        </div>
        <div className="input-percent">
          <p>% verified</p>
          <input
            type="text"
            onChange={e => {
              updatePercentVerified(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Inputs;

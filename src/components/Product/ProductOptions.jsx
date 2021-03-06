import React from "react";

const ProductOption = ({ data }) => {
  const renderOptions = () => {
    if (data !== undefined) {
      return (
        <div className="options-container">
          <div className="options-container-head">
            <h5>Options</h5>
            <h5>Value</h5>
          </div>
          <div className="line" />
          {Object.keys(data).map(nameOption => {
            return (
              <div className="options-item" key={data[nameOption].id}>
                <div className="options-item-name">
                  <span className="options-name">{data[nameOption].name}</span>
                </div>
                <div className="options-item-value">
                  <span>{data[nameOption].value}</span>
                </div>
              </div>
            );
          })}
          <div className="line" />
        </div>
      );
    } else {
      return null;
    }
  };

  return <>{renderOptions()}</>;
};

export default ProductOption;

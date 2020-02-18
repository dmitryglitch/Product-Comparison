import React, { Component } from "react";
import Inputs from "./Inputs";

class Review extends Component {
  render() {
    return (
      <>
        <div className="review-content-head">
          <div className="line"></div>
          <p>Check</p>
        </div>
        <div className="review-content">
          <div className="review-content-left">
            <Inputs />
            <button>Serve the database</button>
          </div>
          <div className="review-content-right"></div>
        </div>
      </>
    );
  }
}

export default Review;

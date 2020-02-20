import { connect } from "react-redux";

import { getListUser } from "../actions/review";

import React, { Component } from "react";
import Inputs from "./Inputs";
import ListUser from "./ListUser";

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
          <div className="review-content-right">
            <ListUser listUsers={this.props.listUsers} />
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  state => ({
    review: state.review
  }),
  dispatch => ({
    onGetListUsers: () => {
      dispatch(getListUser());
    }
  })
)(Review);

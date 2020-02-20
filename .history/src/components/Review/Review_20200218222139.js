import { connect } from "react-redux";

import {
  getListUser,
  updateSelectedUser,
  updateDateStarted,
  updateDateEnding,
  updateServingSize,
  updatePercentVerified
} from "/Projects/proTarget/match/src/actions/review";

import React, { Component } from "react";
import Inputs from "./Inputs";
import ListUser from "./ListUser";

class Review extends Component {
  componentDidMount() {
    this.props.onGetListUsers();
  }

  render() {
    return (
      <>
        <div className="review-content-head">
          <div className="line"></div>
          <p>Check</p>
        </div>
        <div className="review-content">
          <div className="review-content-left">
            <Inputs
              updateDateStarted={this.props.onUpdateDateStarted}
              updateDateEnding={this.props.onUpdateDateEnding}
              updateServingSize={this.props.onUpdateServingSize}
              updatePercentVerified={this.props.onUpdatePercentVerified}
            />
            <button>Serve the database</button>
          </div>
          <div className="review-content-right">
            <ListUser
              listUsers={this.props.review.users}
              updateSelectedUser={this.props.onUpdateSelectedUser}
            />
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
    },
    onUpdateSelectedUser: newValue => {
      dispatch(updateSelectedUser(newValue));
    },
    onUpdateDateStarted: newValue => {
      dispatch(updateDateStarted(newValue));
    },
    onUpdateDateEnding: newValue => {
      dispatch(updateDateEnding(newValue));
    },
    onUpdateServingSize: newValue => {
      dispatch(updateServingSize(newValue));
    },
    onUpdatePercentVerified: newValue => {
      dispatch(updatePercentVerified(newValue));
    }
  })
)(Review);

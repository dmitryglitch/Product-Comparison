import { connect } from "react-redux";

import {
  getListUser,
  getNewPortions,
  updateSelectedUser,
  updateDateStarted,
  updateDateEnding,
  updateServingSize,
  updatePercentVerified
} from "/Projects/proTarget/match/src/actions/review";

import React, { Component } from "react";
import Inputs from "../components/Review/Inputs";
import ListUser from "../components/Review/ListUser";

class Review extends Component {
  componentDidMount() {
    this.props.onGetListUsers();
  }

  handleClick = () => {
    const selectedUser = this.props.review.selectedUser
    const dateStarted = this.props.review.dateStarted
    const dateEnding = this.props.review.dateEnding
    const servingSize = this.props.review.servingSize
    const percentVerified = this.props.review.percentVerified

    this.props.onGetNewPortions(selectedUser, dateStarted, dateEnding, servingSize, percentVerified)
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
              key="inputs"
              updateDateStarted={this.props.onUpdateDateStarted}
              updateDateEnding={this.props.onUpdateDateEnding}
              updateServingSize={this.props.onUpdateServingSize}
              updatePercentVerified={this.props.onUpdatePercentVerified}
            />
            <button onClick={this.handleClick}>Serve the database</button>
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
    // создание порции товаров
    onGetNewPortions: (
      selectedUser,
      dateStarted,
      dateEnding,
      servingSize,
      percentVerified
    ) => {
      dispatch(
        getNewPortions(
          selectedUser,
          dateStarted,
          dateEnding,
          servingSize,
          percentVerified
        )
      );
    },
    // получение списка всех пользователей
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

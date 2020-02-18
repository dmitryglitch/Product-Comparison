import React, { Component } from "react";
// import logo from '../logo.svg';
import "./App.css";
import Product from "../components/Product/Product";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import ModalAuth from "../components/ModalAuth/ModalAuth";
import Search from "../components/Search/Search";
import Review from "../components/Review/Review";

import { connect } from "react-redux";
import { sendUserLogin, logOut } from "../actions/user";
import {
  getCoupleProducts,
  getBackCoupleProducts,
  getForwardCoupleProducts,
  searchCoupleProducts
} from "../actions/product";
import { sendAnswerCoupleProduct } from "../actions/buttonbar";

class App extends Component {
  componentDidMount() {
    this.props.onGetCoupleProducts();
  }

  // TODO: Отрефакторить данный участок кода (формирование полей при статусе авторизации)
  renderProducts() {
    const { massProducts } = this.props.products;
    const { isLogin } = this.props.user;

    if (isLogin === true) {
      console.log(isLogin, "isLogin true");
      if (massProducts !== null) {
        return Object.keys(massProducts).map(products => {
          if (massProducts[products] !== null) {
            return (
              <>
                <div
                  className="product-container-item"
                  key={massProducts[products].id + "pci"}
                >
                  <Product
                    data={massProducts[products]}
                    key={massProducts[products].id}
                  />
                </div>
              </>
            );
          }
        });
      }
    } else {
      setTimeout(() => {
        const buttonModal = document.getElementById("modal-auth-button");
        if (buttonModal !== null) {
          buttonModal.click();
        }
      }, 500);

      return (
        <>
          <ModalAuth onSendLoginUser={this.props.onSendLoginUser} />
          <button
            className="button-modal-auth"
            id="modal-auth-button"
            data-toggle="modal"
            data-target={`#modal-auth`}
          />
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div className="login-container">
          <p>{this.props.user.userName}</p>
          <button onClick={this.props.user.}>LogOut</button>
        </div>
        <div className="product-container">{this.renderProducts()}</div>
        <div className="button-bar-contaner">
          <ButtonBar
            idCurrentCoupleProduct={this.props.products.id_answer}
            sendAnswerCoupleProduct={this.props.onSendAnswerCoupleProduct}
            getBackCoupleProducts={this.props.onGetBackCoupleProducts}
            getForwardCoupleProducts={this.props.onGetForwardCoupleProducts}
            dateCoupleProducts={this.props.products.date}
            answerUser={this.props.products.answerUser}
            statistics={this.props.products.statistics}
          />
        </div>
        <div className="search-container">
          <Search searchCoupleProducts={this.props.onSearchCoupleProducts} />
        </div>
        <div className="review-container">
          <Review />
        </div>
        {/* {(() => {

        })} */}
      </>
    );
  }
}

export default connect(
  state => ({
    products: state.product,
    user: state.user
  }),
  dispatch => ({
    onSendLoginUser: (userName, password) => {
      dispatch(sendUserLogin(userName, password));
    },
    onlogOut: () => {
      dispatch(logOut());
    },
    onGetCoupleProducts: () => {
      dispatch(getCoupleProducts());
    },
    onGetBackCoupleProducts: date => {
      dispatch(getBackCoupleProducts(date));
    },
    onGetForwardCoupleProducts: date => {
      dispatch(getForwardCoupleProducts(date));
    },
    onSendAnswerCoupleProduct: (id, answer) => {
      dispatch(sendAnswerCoupleProduct(id, answer));
    },
    onSearchCoupleProducts: id => {
      dispatch(searchCoupleProducts(id));
    }
  })
)(App);

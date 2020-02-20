import React, { Component } from "react";
import logo from '../logo.svg';
import "./App.css";
import { connect } from "react-redux";

// Components
import Product from "../components/Product/Product";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import ModalAuth from "../components/ModalAuth/ModalAuth";
import Search from "../components/Search/Search";
import Review from "../components/Review/Review";

// Actions
import { sendUserLogin, logOut } from "../actions/user";
import {
  getCoupleProducts,
  getBackCoupleProducts,
  getForwardCoupleProducts,
  searchCoupleProducts
} from "../actions/product";
import { sendAnswerCoupleProduct } from "../actions/buttonbar";
import { getListUser } from "../actions/review"

class App extends Component {
  componentDidMount() {
    this.props.onGetCoupleProducts();
    // if (this.props.user.privilege === 1) {
      this.props.onGetListUsers()
    // }
  }

  // TODO: отрефакторить данный участок кода (формирование полей при статусе авторизации)
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
          <button onClick={this.props.onlogOut}>Logout</button>
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
          <Review listUser={this.props.review.users} listUsers={this.props.review.users}/>
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
    user: state.user,
    review: state.review,
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
    },
    onGetListUsers: () => {
      dispatch(getListUser())
    }
  })
)(App);

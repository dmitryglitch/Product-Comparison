import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import { connect } from "react-redux";

// Components
import Product from "../components/Product/Product";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import ModalAuth from "../components/ModalAuth/ModalAuth";
import SearchAdminStatistic from "../components/SearchAdminStatistic/SearchAdminStatistic";
import Review from "./Review";

// Actions
import { sendUserLogin, logOut, checkUserStatus } from "../actions/user";
import {
  getCoupleProducts,
  getBackCoupleProducts,
  getForwardCoupleProducts,
  searchCoupleProducts,
  setUserAnswerEnd
} from "../actions/product";
import { sendAnswerCoupleProduct } from "../actions/buttonbar";

class App extends Component {
  componentDidMount() {
    this.props.onCheckUserStatus();
  }

  // TODO: отрефакторить данный участок кода (формирование полей при статусе авторизации)
  renderProducts() {
    const { massProducts } = this.props.products;

    if (this.props.user.isLogin === true) {
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
        {(() => {
          if (this.props.products.endSample === true) {
            return (
              <div className="questions-container">
                <div className="questions-container-title">
                  <p>Does this portion pass the test?</p>
                </div>
                <div className="questions-container-button">
                  <button
                    onClick={() => {
                      this.props.onSetUserAnswerEnd("yes");
                    }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      this.props.onSetUserAnswerEnd("no");
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            );
          }
        })()}
        <div className="button-bar-contaner">
          <ButtonBar
            idCurrentCoupleProduct={this.props.products.id_answer}
            sendAnswerCoupleProduct={this.props.onSendAnswerCoupleProduct}
            getBackCoupleProducts={this.props.onGetBackCoupleProducts}
            getForwardCoupleProducts={this.props.onGetForwardCoupleProducts}
            dateCoupleProducts={this.props.products.date}
            answerUser={this.props.products.answerUser}
            statistics={this.props.products.statistics}
            privilege={this.props.user.privilege}
          />
        </div>
        <div className="search-container">
          <SearchAdminStatistic
            answerUser={ this.props.products.answerUser }
            answerAdmin={ this.props.products.answerAdmin }
            statisticsAdmin={this.props.products.statisticsAdmin}
            searchCoupleProducts={this.props.onSearchCoupleProducts}
          />
        </div>
        {(() => {
          if (this.props.user.privilege === 1) {
            return (
              <>
                <div className="review-container">
                  <Review />
                </div>
              </>
            );
          }
        })()}
      </>
    );
  }
}

export default connect(
  state => ({
    products: state.product,
    user: state.user,
    review: state.review
  }),
  dispatch => ({
    // проверка статуса пользователя
    onCheckUserStatus: () => {
      dispatch(checkUserStatus());
    },
    // авторизация
    onSendLoginUser: (userName, password) => {
      dispatch(sendUserLogin(userName, password));
    },
    // разлогинивание
    onlogOut: () => {
      dispatch(logOut());
    },
    // получение пары продуктов
    onGetCoupleProducts: privilege => {
      dispatch(getCoupleProducts(privilege));
    },
    // возврат к предидущему товару
    onGetBackCoupleProducts: (date, privilege) => {
      dispatch(getBackCoupleProducts(date, privilege));
    },
    // возврат к впереди стоящему продукту
    onGetForwardCoupleProducts: (date, privilege) => {
      dispatch(getForwardCoupleProducts(date, privilege));
    },
    // отправка ответа пользователя
    onSendAnswerCoupleProduct: (id, answer, privilege) => {
      dispatch(sendAnswerCoupleProduct(id, answer, privilege));
    },
    // поиск нужной пары продуктов
    onSearchCoupleProducts: id => {
      dispatch(searchCoupleProducts(id));
    },
    onSetUserAnswerEnd: answer => {
      dispatch(setUserAnswerEnd(answer));
    }
  })
)(App);

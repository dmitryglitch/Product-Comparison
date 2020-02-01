import React, {Component} from 'react';
// import logo from '../logo.svg';
import './App.css';
import Product from '../components/Product/Product'
import ButtonBar from '../components/ButtonBar/ButtonBar'
import ModalAuth from '../components/ModalAuth/ModalAuth'

import {connect} from 'react-redux'
import {sendUserLogin} from '../actions/user'
import {getCoupleProducts, getBackCoupleProducts} from '../actions/product'
import {sendAnswerCoupleProduct} from '../actions/buttonbar'

class App extends Component {

    componentDidMount() {
        this.props.onGetCoupleProducts();
    }

    renderProducts() {
        const {massProducts} = this.props.products;
        const {isLogin} = this.props.user;

        if (isLogin === true) {
            console.log(isLogin, 'isLogin true');
            if (massProducts !== null) {
                return Object.keys(massProducts).map(products => {
                    if (massProducts[products] !== null) {
                        return (
                            <>
                                <div className="product-container-item" key={massProducts[products].id + 'pci'}>
                                    <Product
                                        data={massProducts[products]}
                                        key={massProducts[products].id}
                                    />
                                </div>
                            </>
                        )
                    }
                })
            }
        } else {
            setTimeout(() => {
                const buttonModal = document.getElementById("modal-auth-button");
                if (buttonModal !== null) {
                    buttonModal.click()
                }
            }, 500);

            return (
                <>
                    <ModalAuth onSendLoginUser={this.props.onSendLoginUser}/>
                    <button
                        className="button-modal-auth"
                        id="modal-auth-button"
                        data-toggle="modal"
                        data-target={`#modal-auth`}
                    />
                </>
            )
        }
    }

    render() {
        return (
            <>
                <div className="product-container">
                    {this.renderProducts()}
                </div>
                <div className="button-bar-contaner">
                    <ButtonBar
                        idCurrentCoupleProduct={this.props.products.id_answer}
                        sendAnswerCoupleProduct={this.props.onSendAnswerCoupleProduct}
                        getBackCoupleProducts={this.props.onGetBackCoupleProducts}
                        dateCoupleProducts={this.props.products.date}
                        answerUser={this.props.products.answerUser}
                        statistics={this.props.products.statistics}
                    />
                </div>
            </>
        );
    }
}

export default connect(
    state => ({
        products: state.product,
        user: state.user,
    }),
    dispatch => ({
        onSendLoginUser: (userName, password) => {
            dispatch(sendUserLogin(userName, password))
        },
        onGetCoupleProducts: () => {
            dispatch(getCoupleProducts())
        },
        onGetBackCoupleProducts: (date) => {
            dispatch(getBackCoupleProducts(date))
        },
        onSendAnswerCoupleProduct: (id, answer) => {
            dispatch(sendAnswerCoupleProduct(id, answer))
        }
    })
)(App);

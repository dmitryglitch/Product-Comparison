import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import {connect} from 'react-redux'
import {getCoupleProducts} from '../actions/product'

class App extends Component {
    render() {
        return (
            <div className="product-container">
                <button onClick={this.props.onGetCoupleProducts}/>
                <div className="product-content">
                </div>
            </div>
        );
    }

}

export default connect(
    state => ({
        products: state.product
    }),
    dispatch => ({
        onGetCoupleProducts: () => {
            dispatch(getCoupleProducts())
        }
    })
)(App);

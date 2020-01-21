import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import Product from '../components/Product/Product'

import {connect} from 'react-redux'
import {getCoupleProducts} from '../actions/product'

class App extends Component {
    componentDidMount() {
        this.props.onGetCoupleProducts();
    }

    render() {
        return (
            <div className="product-container">
                <button onClick={this.props.onGetCoupleProducts}/>
                <Product data={this.props.products}/>
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

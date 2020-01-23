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

    renderProducts() {
        const {massProducts} = this.props.products;

        if (massProducts !== null) {
            return Object.keys(massProducts).map(products => {
                return (
                    <div className="product-container-item" key={massProducts[products].id + 'pci'}>
                        <Product data={massProducts[products]} key={massProducts[products].id}/>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="product-container">
                {this.renderProducts()}
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

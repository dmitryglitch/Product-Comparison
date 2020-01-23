import React, {Component} from 'react';
import ProductOptions from './ProductOptions'

class Product extends Component {
    render() {
        return (
            <>
                <div className="product-container-item-name">
                    <h4>{this.props.data.Product_Name}</h4>
                </div>
                <ProductOptions key={this.props.data.id + 'po'} data={this.props.data.options}/>
            </>
        )
    }
}

export default Product;
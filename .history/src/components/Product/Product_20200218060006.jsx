import React, { Component } from "react";
import ProductOptions from "./ProductOptions";
import ProductImages from "./ProductImages";
import ProductSpec from "./ProductSpec";

class Product extends Component {
  render() {
    return (
      <>
        <div className="product-container-item-name">
          <h4>
            <a href={this.props.data.url} target="_blank">
              {this.props.data.Product_Name}
            </a>
          </h4>
          <p>{this.props.data.Brand}</p>
        </div>
        <ProductOptions
          key={this.props.data.id + "po"}
          data={this.props.data.options}
        />
        <ProductSpec
          key={this.props.data.id + "ps"}
          data={this.props.data.specs}
        />
        <ProductImages
          key={this.props.data.id + "pi"}
          data={this.props.data.image_urls}
        />
      </>
    );
  }
}

export default Product;

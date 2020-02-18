import React, { Component } from "react";

class ProductSpec extends Component {
  state = {
    isOpened: false
  };

  // change visible specs list
  handleClickOpeningSpecsList = () => {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  };

  renderSpecs = () => {
    const { data } = this.props;
    const { isOpened } = this.state;

    let counterId = 0;

    if (data !== undefined) {
      return (
        <div className="specs-container">
          <div
            className="specs-container-head"
            onClick={this.handleClickOpeningSpecsList}
          >
            <h4>Spec</h4>
            <h4>Value</h4>
          </div>
          <div className="line" />
          {isOpened === true
            ? Object.entries(data).map(([nameSpec, valueSpec]) => {
                return (
                  <div className="specs-item" key={nameSpec + counterId}>
                    <div className="specs-item-name">
                      <span className="specs-name">{nameSpec}</span>
                    </div>
                    <div className="specs-item-value">
                      <span>{valueSpec}</span>
                    </div>
                  </div>
                );
              })
            : null}
          <div
            className="specs-notation"
            onClick={this.handleClickOpeningSpecsList}
          >
            <p>Spec Option (click to show)</p>
          </div>
          <div className="line" />
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return <>{this.renderSpecs()}</>;
  }
}

export default ProductSpec;

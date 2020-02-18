import React, { Component } from "react";

class Search extends Component {
  state = {
    id: ""
  };

  handleClick = () => {
    this.props.searchCoupleProducts(this.state.id);
  };

  render() {
    return (
      <>
        <div className="search-content">
          <span>ID</span>
          <input
            onChange={e => {
              this.setState({ id: e.target.value });
            }}
            type="text"
          />
          <button onClick={this.handleClick}>Find</button>
        </div>
      </>
    );
  }
}

export default Search;

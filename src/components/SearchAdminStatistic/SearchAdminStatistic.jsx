import React, { Component } from "react";

class SearchAdminStatistic extends Component {
  state = {
    id: ""
  };

  handleClick = () => {
    this.props.searchCoupleProducts(this.state.id);
  };

  render() {
    return (
      <>
        <div className="search-admin-statistic">
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
          {(() => {
            if (
              this.props.statisticsAdmin !== null &&
              this.props.statisticsAdmin !== undefined
            ) {
              return (
                <div className="admin-statistic-content">
                  <p>Answer user: {this.props.answerUser}</p>
                  <p>Answer auditor: {this.props.answerAdmin}</p>
                  <p>ID Portion: {this.props.statisticsAdmin.idPortion}</p>
                  <p>
                    Number of values ​​per serving:{" "}
                    {this.props.statisticsAdmin.countPortion}
                  </p>
                  <p>
                    Current position:{" "}
                    {this.props.statisticsAdmin.productForTheAuditor}
                  </p>
                  <p>
                    Number of wrong:{" "}
                    {this.props.statisticsAdmin.percentageOferrors}
                  </p>
                </div>
              );
            }
          })()}
        </div>
      </>
    );
  }
}

export default SearchAdminStatistic;

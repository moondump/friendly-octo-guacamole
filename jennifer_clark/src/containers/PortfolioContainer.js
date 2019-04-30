import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.portfolio &&
          this.props.portfolio.map(stock => (
            <Stock stock={stock} onClickFunc={this.props.sellStock} />
          ))}
      </div>
    );
  }
}

export default PortfolioContainer;

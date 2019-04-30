import React, { Component } from "react";
import Stock from "../components/Stock";
import propTypes from "prop-types";

class StockContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => (
          <Stock stock={stock} onClickFunc={this.props.buyStock} />
        ))}
      </div>
    );
  }
}
StockContainer.propTypes = { stocks: propTypes.array.isRequired };
StockContainer.defaultProps = { stocks: [] };

export default StockContainer;

import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks.map((stock, index) => {
            return <Stock stock={stock} key={index} removeStocks={this.props.removeStocks} />
          })}
      </div>
    );
  }

}

export default PortfolioContainer;

import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  createStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock stock={stock} key={stock.id}  handleClick={this.props.handleClick} />
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.createStocks()}
      </div>
    );
  }

}

export default StockContainer;

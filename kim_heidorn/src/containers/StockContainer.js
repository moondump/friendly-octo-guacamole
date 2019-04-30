import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
  const {stocks, buyStock} = this.props
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock, index) => {
        return <Stock stock={stock} key={index} buyOrRemoveStock={buyStock} />
      })}
    </div>
    );
  }
}

export default StockContainer;

import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  // Render stocks from array of stock objects
  renderStocks() {
    const { stocks, buyStock } = this.props

    return stocks.map(stock => {
      return <Stock key={stock.id} buyStock={buyStock} stock={stock} />
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;

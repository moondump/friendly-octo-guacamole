import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  handleStockClick = (stockObj) => {
    this.props.addToPortfolio(stockObj)
  }

  render() {

    let allStocks = this.props.stocks.map((stock, index) => {
      return (
        <Stock stock={stock} key={index} handleClick={this.handleStockClick}/>
      )
    })

    return (
      <div>
        <h2>Stocks</h2>

          {allStocks}

      </div>
    );
  }

}

export default StockContainer;

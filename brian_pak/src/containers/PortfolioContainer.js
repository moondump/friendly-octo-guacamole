import React, { Component } from 'react';
import Stock from '../components/Stock'
import _ from 'lodash'

class PortfolioContainer extends Component {

  // Render Stocks from fetched data 
  renderStocks() {
    const { portfolio, sellStock } = this.props

    return portfolio.map(stock => {
      return <Stock key={stock.id} sellStock={sellStock} stock={stock} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;

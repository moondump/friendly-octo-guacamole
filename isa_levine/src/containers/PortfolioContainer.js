import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  handlePortfolioClick = (stockObj) => {
    this.props.removeFromPortfolio(stockObj)
  }

  render() {

    let portfolioStocks = this.props.portfolio.map((stock, index) => {
      return (
        <Stock stock={stock} key={index} handleClick={this.handlePortfolioClick}/>
      )
    })

    return (
      <div>
        <h2>My Portfolio</h2>

        {portfolioStocks}

      </div>
    );
  }

}

export default PortfolioContainer;

import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  portfolioStocks = () => {
    return this.props.portfolio.map(stock => (
      <Stock stock={stock} key={stock.id} handleClick={this.props.handlePortClick} />
    ))
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.portfolioStocks()
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;

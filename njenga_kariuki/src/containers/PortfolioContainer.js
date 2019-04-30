import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  createStocks = () => {
    return this.props.portfolioStocks.map(stock => {
      return <Stock stock={stock} key={stock.id} handleClick={this.props.handleClick} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.createStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;

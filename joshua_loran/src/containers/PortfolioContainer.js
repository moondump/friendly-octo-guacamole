import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.portfolio.map((stock, idx) => {
            return <Stock onClickMethod={this.props.removeStockFromPortfolio} stock={stock} key ={idx}/>
          })}
      </div>
    );
  }

}

export default PortfolioContainer;

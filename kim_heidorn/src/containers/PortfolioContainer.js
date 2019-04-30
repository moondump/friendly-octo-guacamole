import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const {purchasedStocks, removeStock} = this.props
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            purchasedStocks.map((stock, index) => {
              return (
                <Stock key={index} stock={stock} buyOrRemoveStock={removeStock} />
              )
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;

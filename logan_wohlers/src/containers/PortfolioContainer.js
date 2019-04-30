import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    // console.log(this.props.portfolioStocks)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            (this.props.portfolioStocks === undefined || this.props.portfolioStocks.length === 0) ? 
            null :
            this.props.portfolioStocks.map(ss=>{
              return <Stock key={Math.random()*1000} stock={ss} onStockMethod={this.props.onStockSell} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;

import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stockList.map(ss => {
            return <Stock key={ss.id} stock={ss} onStockMethod={this.props.onStockBuy}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;

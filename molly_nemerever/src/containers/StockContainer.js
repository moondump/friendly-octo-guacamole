import React, { Component, Fragment } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
          <Fragment>
          <div>
            <h2>Stocks</h2>
            {this.props.stocks.map((stock, index) => {
              return <Stock key={index} stock={stock} purchaseStock={this.props.purchaseStock}/>
            })}
          </div>
          </Fragment>
    );
  }

}

export default StockContainer;

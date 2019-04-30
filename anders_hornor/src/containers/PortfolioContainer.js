import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     portfolio: this.props.portfolio
  //   }
  // }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
            {this.props.portfolio.map((stock, idx) => {
            return <Stock inPortfolio={true} key={idx} stock={stock} removeFromPortfolio={this.props.removeFromPortfolio}/>
          }
        )}
      </div>
    );
  }

}


export default PortfolioContainer;

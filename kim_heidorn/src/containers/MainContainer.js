import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      purchasedStocks: []
    }
  }

  /* get the stock data from JSON */
  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(data => this.setState ({
        stocks: data
      }))
    }

  /* functions to add or remove stocks from PortfolioContainer*/
  buyStock = (stock) => {
    this.setState({
      purchasedStocks: [...this.state.purchasedStocks, stock]
    })
  }

  removeStock = (stock) => {
    const myStocks = [...this.state.purchasedStocks]
    const index = myStocks.indexOf(stock)
    if (index !== -1) {
      myStocks.splice(index, 1);
      this.setState({purchasedStocks: myStocks})
    }
  }

  /* functions for the SearchBar - sort and filter*/
  filterByType = (type) => {
    if (type === "Unfiltered") {
      this.componentDidMount()
    } else {
      const filteredStocks = this.state.stocks.filter(stock => {
        return type === stock.type
      })
      this.setState({stocks: filteredStocks})
    }
  }

  sortByName = () => {
    const filteredStocks = this.state.stocks.sort((a, b) => {
      let nameA = a.name.toUpperCase()
      let nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    })
    this.setState({
      stocks: filteredStocks
    });
  }

  sortByPrice = () => {
    const filteredStocks = this.state.stocks.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      stocks: filteredStocks
    });
  }

  /*Render Whole Page*/
  render() {
    const { stocks, purchasedStocks } = this.state

    return (
      <div>
        <SearchBar filterByType={this.filterByType} sortByName={this.sortByName} sortByPrice={this.sortByPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer purchasedStocks={purchasedStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}
export default MainContainer;

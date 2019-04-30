import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolioStocks: [],
      displayedStocks: []
    }
  }

  fetchStocks() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => this.setState({
      stocks: data,
      displayedStocks: data
    }))
  }

  componentDidMount() {
    this.fetchStocks();
  }

  addStocks = (stock) => {
    if (!this.state.portfolioStocks.includes(stock)) {
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    }
  }

  removeStocks = (removeStock) => {
    let newStocks = this.state.portfolioStocks.filter(stock => {
      return stock !== removeStock
    })
    this.setState({ portfolioStocks: newStocks })
  }

  sortAlpha = () => {
    let sortedStocks = this.state.displayedStocks.sort((a,b) => {
      return (a.ticker > b.ticker) ? 1 : -1
    });
    this.setState({ displayedStocks: sortedStocks })
  }

  sortPrice = () => {
    let sortedStocks = this.state.displayedStocks.sort((a,b) => {
      return (a.price > b.price) ? 1 : -1
    });
    this.setState({ displayedStocks: sortedStocks })
  }

  filter = category => {

    let filteredStocks = this.state.stocks.filter(stock => {
      return stock.type === category
    })
    this.setState({ displayedStocks: filteredStocks })
  }

  render() {
    return (
      <div>
        <SearchBar
          sortAlpha={this.sortAlpha}
          sortPrice={this.sortPrice}
          filter={this.filter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.state.displayedStocks}
                addStocks={this.addStocks}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.state.portfolioStocks}
                removeStocks={this.removeStocks}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

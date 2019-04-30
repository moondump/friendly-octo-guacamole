import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      displayedStocks: [],
      portfolio: []
    }
    this.buyStock = this.buyStock.bind(this)
    this.sellStock = this.sellStock.bind(this)
    this.sortBy = this.sortBy.bind(this)
    this.filter = this.filter.bind(this)
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(json => {
      this.setState({ stocks: json,
                      displayedStocks: json})
    })
  }

  sortBy(type) {
    if (type === 'Alphabetically') {
      this.sortByName()
    }else if (type === 'Price') {
      this.sortByPrice()
    }
  }

  filter(type) {
    let displayedStocks = this.state.stocks.filter(stock => {
      return stock.type === type
    })
    this.setState({displayedStocks})
  }

  sortByName() {
    let sortedNames = [...this.state.displayedStocks]
    sortedNames.sort((stock1, stock2) => {
      if (stock1.name === stock2.name) {
        return 0;
      }
      if (stock1.name < stock2.name) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({displayedStocks: sortedNames})
  }

  sortByPrice() {
    let sortedPrice = [...this.state.displayedStocks]
    sortedPrice.sort((stock1, stock2) =>{
      if (stock1.price === stock2.price){
        return 0;
      }
      if (stock1.price < stock2.price) {
        return -1
      } else {
        return 1
      }
    })
    this.setState({displayedStocks: sortedPrice})
  }

  buyStock(stock) {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  sellStock(stock) {
    let isSold = false
    let portfolio = this.state.portfolio.filter( s => {
      if (!isSold && s === stock) {
        isSold = true
        return false
      }
      return true
    })
    this.setState({ portfolio })
  }

  render() {
    return (
      <div>
        <SearchBar
          sortBy={this.sortBy}
          filter={this.filter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayedStocks}
                              buyStock={this.buyStock}
                              />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio}
                                  sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

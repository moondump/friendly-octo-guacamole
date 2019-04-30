import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      filteredStocks: []
    }
    this.addToPortfolio = this.addToPortfolio.bind(this)
    this.removeFromPortfolio = this.removeFromPortfolio.bind(this)
    this.sortStocksByAlphabet = this.sortStocksByAlphabet.bind(this)
    this.sortStocksByPrice = this.sortStocksByPrice.bind(this)
    this.sortCompareName = this.sortCompareName.bind(this)
    this.sortComparePrice = this.sortComparePrice.bind(this)
    this.filterByType = this.filterByType.bind(this)
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => {
      console.log("data: ", data)
      this.setState({stocks: data})
      this.setState({filteredStocks: data})
    })
  }




  addToPortfolio(stockObj) {
    this.setState({portfolio: [...this.state.portfolio, stockObj]})
  }

  removeFromPortfolio(stockObj) {
    let newPortfolio = this.state.portfolio.filter(stock => stock !== stockObj)
    this.setState({portfolio: newPortfolio})
  }




  sortStocksByAlphabet() {
    let newStocks = [...this.state.filteredStocks]
    newStocks.sort(this.sortCompareName)
    this.setState({filteredStocks: newStocks})
  }

  sortStocksByPrice() {
    let newStocks = [...this.state.filteredStocks]
    newStocks.sort(this.sortComparePrice)
    this.setState({filteredStocks: newStocks})
  }

  sortCompareName(a, b) {
    let nameA = a.name
    let nameB = b.name
    if (nameA > nameB) {return 1}
    else if (nameA < nameB) {return -1}
    else {return 0}
  }

  sortComparePrice(a, b) {
    let priceA = a.price
    let priceB = b.price
    if (priceA > priceB) {return 1}
    else if (priceA < priceB) {return -1}
    else {return 0}
  }




  filterByType(type) {
    let newStocks = [];
    this.state.stocks.forEach(stock => {
      if (stock.type === type) {
        newStocks.push(stock)
      }
    })
    console.log("newStocks: ", newStocks)
    this.setState({filteredStocks: newStocks})
  }




  render() {

    let displayStocks;
    if (this.state.filteredStocks.length === 0) {
      displayStocks = this.state.stocks
    } else {
      displayStocks = this.state.filteredStocks
    }

    return (
      <div>
        <SearchBar
          sortStocksByAlphabet={this.sortStocksByAlphabet}
          sortStocksByPrice={this.sortStocksByPrice}
          filterByType={this.filterByType}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayStocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

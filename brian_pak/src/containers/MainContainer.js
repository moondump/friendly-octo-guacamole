import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import _ from 'lodash'

class MainContainer extends Component {
  constructor() {
    super()

    // this.stocks is an array of stock objects fetched from static data
    this.stocks = [] 
    
    this.state = {
      hasRecievedData: false, // Has successfully fetched data
      portfolio: [], // Array of purchased stocks
      filterBy: undefined, // String to filter by
      sortBy: undefined, // String to sort by
    }
  }

  componentDidMount() {
    // Fetch data and store in state
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(data => {
        this.stocks = data
        this.setState({hasRecievedData: true})
      })
  }

  // Change sorting for stocks
  handleSortChange = (val) => {
    this.setState({sortBy: val})
  }

  // Change filter for stocks
  handleFilterChange = (val) => {
    this.setState({filterBy: val})
  }

  // Add given stock to portfolio
  buyStock = (stock) => { 
    this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  // Remove given stock from portfolio
  sellStock = (stock) => {
    let newPortfolio = [...this.state.portfolio]
    newPortfolio.splice(newPortfolio.indexOf(stock), 1)
    this.setState({portfolio: newPortfolio})
  }

  // Sort and filter given stocks and return copy
  sortAndFilterStocks = (stocks) => {
    const { sortBy, filterBy } = this.state
    let newStocks = [...stocks]

    // Filter copy of original array
    if (filterBy) {
      newStocks = _.filter(stocks, stock => stock.type === filterBy)
    }

    // Sort filtered copy
    if (sortBy) {
      if (sortBy === 'Alphabetically') {
        newStocks = _.sortBy(newStocks, stock => stock.name)
      } else if (sortBy === 'Price') {
        newStocks = _.sortBy(newStocks, stock => stock.price)
      }
    }

    return newStocks
  }

  render() {
    const { portfolio, hasRecievedData } = this.state

    return (
      <div>
        <SearchBar 
          handleFilterChange={this.handleFilterChange} 
          handleSortChange={this.handleSortChange}
        />
          {hasRecievedData &&
            <div className="row">
              <div className="col-8">
                <StockContainer 
                  stocks={this.sortAndFilterStocks(this.stocks)}
                  buyStock={this.buyStock} 
                />
              </div>
              <div className="col-4">
                <PortfolioContainer 
                  portfolio={this.sortAndFilterStocks(portfolio)} 
                  sellStock={this.sellStock}     
                />
              </div>
            </div>
          }
      </div>
    );
  }

}

export default MainContainer;

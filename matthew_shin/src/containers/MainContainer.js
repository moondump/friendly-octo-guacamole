import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      displayStocks: [],
      portfolio: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(data => this.setState({
        stocks: data,
        displayStocks: data
      }))
  }

  buyStock = (stock) => {
    if(!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }
  }

  removeStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(object => object !== stock)
    })
  }

  sortStock = (ev) => {
    if(ev.target.value === 'Alphabetically') {
      let alphaSort = this.state.stocks.sort((a, b) => {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
      })
      this.setState({displayStocks: alphaSort, search: ev.target.value})
    }
    if(ev.target.value === 'Price') {
      let priceSort = this.state.stocks.sort((a, b) => {
        return a.price - b.price
      })
      this.setState({displayStocks: priceSort, search: ev.target.value})
    }
  }

  filterStock = (ev) => {
    let filterArray = this.state.stocks
    if(ev.target.value === 'Tech') {
      let filter = filterArray.filter(stock => {
        return stock.type === 'Tech'
      })
      this.setState({displayStocks: filter})
    } else if(ev.target.value === 'Sportswear') {
        let filter = filterArray.filter(stock => {
          return stock.type === 'Sportswear'
        })
        this.setState({displayStocks: filter})
    } else {
        let filter = filterArray.filter(stock => {
          return stock.type === 'Finance'
        })
        this.setState({displayStocks: filter})
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortStock={this.sortStock} filterStock={this.filterStock} search={this.state.search}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

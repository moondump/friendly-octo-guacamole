import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      filteredStocks: [],
      boolSearch: null,
      options: 'All'
    }
    this.addStockToPortfolio = this.addStockToPortfolio.bind(this)
    this.removeStockFromPortfolio = this.removeStockFromPortfolio.bind(this)
    this.sortByAlphaAndPrice = this.sortByAlphaAndPrice.bind(this)
    this.filterStocks = this.filterStocks.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(json => this.setState({
        stocks: json,
        filteredStocks: json
      }))
  }

  addStockToPortfolio(stock){
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  removeStockFromPortfolio(stock){
    this.setState({
      portfolio: this.state.portfolio.filter(element => element !== stock)
    })
  }

  sortByAlphaAndPrice(){
      if(!this.state.boolSearch){
        this.setState({
          boolSearch: !this.state.boolSearch,
          filteredStocks: this.state.filteredStocks.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        })
      }else{
        this.setState({
          boolSearch: !this.state.boolSearch,
          filteredStocks: this.state.filteredStocks.sort(function (a, b) {
                    return a.price - b.price;
                  }).reverse()
        })
      }
  }

  filterStocks(event){
    console.log(event.target.value)
    if(event.target.value === 'All'){
      this.setState({
        filteredStocks: this.state.stocks
      })
    } else{
      this.setState({
        filteredStocks: this.state.stocks.filter(element => element.type === event.target.value)
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar boolSearch={this.state.boolSearch} filterSearch={this.filterStocks} alphaSort={this.sortByAlphaAndPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStockToPortfolio={this.addStockToPortfolio} stocks={this.state.filteredStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStockFromPortfolio={this.removeStockFromPortfolio}portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

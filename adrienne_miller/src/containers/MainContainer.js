import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3000/stocks"

class MainContainer extends Component {
  constructor(){
  super()
  this.state = {
    stocks: [],
    portfolio: [],
    allStocks: []
  }
}

componentDidMount() {
this.getData();
}

getData(){
  fetch(API)
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    this.setState({
      stocks: data,
      allStocks: data
      })
  })
}

handleClick = (stock) => {
  console.log("clicked")
  let currentPort = this.state.portfolio;
  if (this.state.portfolio.includes(stock)) {
    console.log('alreadyclicked')
  } else {
    currentPort.push(stock);
    this.setState({
      portfolio: currentPort
    })
  }
}

handlePortClick = (stock) => {
  console.log("clicked")
  let newPort = this.state.portfolio.filter(portStock => {
    return portStock !== stock
  });
  this.setState({
    portfolio: newPort
  })
}

  sorting = (ev) => {
    if (ev.target.value === "Alphabetically"){
      let allStocks = this.state.stocks
      allStocks.sort(function(a,b) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
      this.setState({
        stocks: allStocks
      })
    } else {
      let numStocks = this.state.stocks
      numStocks.sort(function(a,b){
        return a.price - b.price
      })
      this.setState({
        stocks: numStocks
      })
    }
  }

  filter = (ev) => {
    console.log('filtered')
    if (ev.target.value === "All") {
      this.setState ({
        stocks: this.state.allStocks
      })
    } else {
      let allStocks = this.state.allStocks
      let filtered = allStocks.filter(
        stock => stock.type === ev.target.value
      );

      this.setState ({
        stocks: filtered
      });
    }
  }


  render() {
    return (
      <div>
        <SearchBar handleSort={this.sorting} handleFilter={this.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handlePortClick={this.handlePortClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

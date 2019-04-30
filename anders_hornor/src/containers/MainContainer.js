import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      initialStocks: []
    }
    this.addToPortfolio = this.addToPortfolio.bind(this)
    this.removeFromPortfolio = this.removeFromPortfolio.bind(this)
    this.filterStocks = this.filterStocks.bind(this)
    this.sortAlphabetically = this.sortAlphabetically.bind(this)
    this.sortPricically = this.sortPricically.bind(this)
  }

  componentDidMount(){
  fetch(URL).then(res => res.json()).then(data => this.setState(prevState => ({stocks: data, initialStocks: data})))
  }

  addToPortfolio(stock) {
  this.setState({portfolio: [...this.state.portfolio, stock]})
  }

  removeFromPortfolio(event, stock) {
    const newArray = this.state.portfolio
    const stockToRemove= this.state.portfolio.indexOf(stock)
    newArray.splice(stockToRemove, 1)
    this.setState({ portfolio: newArray})
  }


  filterStocks(event){
      let newArr = this.state.initialStocks.filter((stock) =>
      stock.type ===event.target.value)
      this.setState({stocks: newArr})
  }
//shoutout to MDN for this template I have so shamlessly used.
  // items.sort(function(a, b) {
  //   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //
  //   // names must be equal
  //   return 0;
  // });

  sortAlphabetically(){
    let newArr = this.state.stocks
    newArr.sort((a, b) => {
      let name1 = a.name
      let name2 = b.name
      if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
    })
    console.log(newArr)
    this.setState({stocks: newArr})
  }

  sortPricically(){
    let newArr = this.state.stocks
    newArr.sort((a, b) => {
      let price1 = a.price
      let price2 = b.price
      if (price1 < price2) {
          return -1;
        }
        if (price1 > price2) {
          return 1;
        }
    })
    console.log(newArr)
    this.setState({stocks: newArr})
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortAlphabetically={this.sortAlphabetically} sortPricically={this.sortPricically}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addToPortfolio={this.addToPortfolio}/>

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

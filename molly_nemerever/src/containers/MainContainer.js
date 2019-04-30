import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(props){
    super(props)
    this.purchaseStock=this.purchaseStock.bind(this)
    this.state=({stocks:[], myPortfolio: [], displayStocks: []})
  }

  componentDidMount(){
    let url = 'http://localhost:3000/stocks'
    fetch(url)
    .then(resp => resp.json())
    .then(data =>
      this.setState({stocks: data, displayStocks: data}))
  }

  purchaseStock = (stock) => {
    console.log('stock clicked')
    if((!this.state.myPortfolio.includes(stock))){ //if user doesnt already have stock, buy
      this.setState({myPortfolio: [...this.state.myPortfolio,stock]})
    } else { //if user has stock already then sell(remove)
      let filteredStocks = this.state.myPortfolio.filter(ownedStock => {
        return ownedStock !== stock
      })
      this.setState({myPortfolio: filteredStocks})
    }
  }

  filterByType = (event) => {
    if(event.target.value === 'Finance'){
      let filterType = this.state.stocks.filter(stock => {
        return stock.type === 'Finance'
      })
      this.setState({displayStocks: filterType})
    } else if (event.target.value === 'Tech') {
      let filterType = this.state.stocks.filter(stock => {
        return stock.type === 'Tech'
      })
      this.setState({displayStocks: filterType})
    } else {
      let filterType = this.state.stocks.filter(stock => {
        return stock.type === 'Sportswear'
      })
      this.setState({displayStocks: filterType})
    }
    console.log(event.target.value)
  }

  sortStocks = (event) => {
    console.log('need to sort')
    console.log(event.target.value)
    if(event.target.value === 'Price'){
      let priceSort = this.state.displayStocks.sort((a,b) => {
                return a.price - b.price
      })
      this.setState({displayStocks: priceSort})
    }
    if(event.target.value === 'Alphabetically'){
      let alphaSort = this.state.displayStocks.sort((a,b) => {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
      })
      this.setState({displayStocks: alphaSort})
    }
  }

  render() {


    return (
      <div>
        <SearchBar filter={this.filterByType} sort={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} purchaseStock={this.purchaseStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.myPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

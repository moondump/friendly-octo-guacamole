import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      stocks: [],
      displayedStocks: [],
      purchasedStocks: [],
    }
  }

  componentDidMount() {
    this.fetchStockData()
  }

  //fetch stocks from API
  fetchStockData = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp=>resp.json())
    .then(stocks=>this.setState({
      stocks: stocks,
      displayedStocks: stocks
    },()=>console.table(this.state.displayedStocks)))
  }

  //helper to update state when stock clicked
  addPurchasedStock = (stockToAdd) => {
    if (!this.state.purchasedStocks.includes(stockToAdd)){
      this.setState((prevState)=>({
        purchasedStocks: [...prevState.purchasedStocks, stockToAdd]
      }))
      this.setState((prevState)=>({
        stocks: [...prevState.stocks].filter(stock=> stock !==stockToAdd)
      }))
    }
  }

  removePurchasedStock = (stockToRemove) => {
    this.setState((prevState)=>({
      purchasedStocks: [...prevState.purchasedStocks].filter(stock=> stock !==stockToRemove)
    }))
    this.setState((prevState)=>({
      stocks: [...prevState.stocks, stockToRemove]
    }))
  }

  handleReorder = (sortVal) => {
    this.setState({
      purchasedstocks: this.state.purchasedStocks.sort((stockA,stockB)=>{
        return (stockA[sortVal] < stockB[sortVal]) ? -1 : 1
      })
    })

    this.setState({
      stocks: this.state.stocks.sort((stockA,stockB)=>{
        return (stockA[sortVal] < stockB[sortVal]) ? -1 : 1
      })
    })
  }

  handleFilter = (filterVal)=>{
    this.setState({
      purchasedStocks: this.state.purchasedStocks.filter(stock=> stock.type ===filterVal)
    })

    this.setState({
      displayedStocks: this.state.stocks.filter(stock=> stock.type === filterVal)
    })
  }

  render() {
    return (
      <div>
        <SearchBar onReorder={this.handleReorder} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayedStocks} handleClick={this.addPurchasedStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.purchasedStocks} handleClick={this.removePurchasedStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

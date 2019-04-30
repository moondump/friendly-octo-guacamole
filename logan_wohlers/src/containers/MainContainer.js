import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state={
      allStocks: [],
      stockList: [],
      portfolioStocks:[]
    }
  }

	getAllStocks(){
    fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(stockList=>{
		 console.log(stockList)
		this.setState({allStocks: stockList})
      this.setState({stockList})
    })
	}

	onButtonFilter = e => {
		let filtered=[]
		if(e.target.value==="Alphabetically"){
			filtered=this.state.stockList.sort((a,b)=> {
					let textA = a.name.toUpperCase();
					let textB = b.name.toUpperCase();
					return textA.localeCompare(textB);
			})
		}else{
			filtered=this.state.stockList.sort((a,b) => a.price-b.price)
		}
		this.setState({
			stockList: filtered
		})
	}
	

  onSelectFilterStock = (e) => {
   	const filtered=this.state.allStocks.filter((ss) => {
        return ss.type===e.target.value
      })
      this.setState({stockList: filtered})
  }
  
  componentDidMount(){
    this.getAllStocks()
  }

  onStockBuy=(stock)=>{
    console.log(stock)
    this.setState({
      portfolioStocks: [
        ...this.state.portfolioStocks,
        stock
      ]
    })
  }

  onStockSell=(stock)=>{
    const removed=this.state.portfolioStocks.filter((ss)=>{
      return ss!==stock
    })
    //be careful w/ updating if it's an array OR object-- make sure yo have correct {}/[] or neither like in this case
    this.setState({
      portfolioStocks: removed
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSelectChange={this.onSelectFilterStock} onButtonFilter={this.onButtonFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stockList={this.state.stockList} onStockBuy={this.onStockBuy}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} onStockSell={this.onStockSell} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

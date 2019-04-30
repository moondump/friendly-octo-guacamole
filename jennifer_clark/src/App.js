import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import StockContainer from "./containers/StockContainer";
import PortfolioContainer from "./containers/PortfolioContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolio: [],
      displayedStocks: []
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => this.setState({ stocks: data, displayedStocks: data }));
  };
  buyStock = stock => {
    this.setState({ portfolio: [...this.state.portfolio, stock] });
  };

  alphaSort = () => {
    let sorted = this.state.displayedStocks.sort(this.compareAlpha);
    this.setState({ displayedStocks: sorted });
  };

  priceSort = () => {
    let sorted = this.state.displayedStocks.sort(this.comparePrice);
    this.setState({ displayedStocks: sorted });
  };

  sellStock = stock => {
    let filtered = this.state.portfolio.filter(function(value) {
      return stock !== value;
    });
    this.setState({ portfolio: filtered });
  };

  filterStocks = cat => {
    let filtered = this.state.stocks.filter(function(value) {
      return value.type === cat;
    });
    this.setState({ displayedStocks: filtered });
  };

  compareAlpha(a, b) {
    const nameA = a["name"];
    const nameB = b["name"];

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  comparePrice(a, b) {
    const priceA = a["price"];
    const priceB = b["price"];

    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.displayedStocks}
          buyStock={this.buyStock}
          portfolio={this.state.portfolio}
          sellStock={this.sellStock}
          alphaSort={this.alphaSort}
          priceSort={this.priceSort}
          filterStocks={this.filterStocks}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchBar
          alphaSort={this.props.alphaSort}
          priceSort={this.props.priceSort}
          filterStocks={this.props.filterStocks}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              buyStock={this.props.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              sellStock={this.props.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;

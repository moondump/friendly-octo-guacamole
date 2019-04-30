import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  handleAlphaSort = ev => {
    this.props.alphaSort(ev.target.value);
    this.setState({ selected: "Alphabetically" });
  };

  handlePriceSort = ev => {
    this.props.priceSort(ev.target.value);
    this.setState({ selected: "Price" });
  };

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            checked={this.state.selected === "Alphabetically" ? true : false}
            onChange={ev => this.handleAlphaSort(ev)}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            checked={this.state.selected === "Price" ? true : false}
            onChange={ev => this.handlePriceSort(ev)}
          />
          Price
        </label>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={ev => this.props.filterStocks(ev.target.value)}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SearchBar;

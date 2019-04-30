import React, {Component} from 'react';

class SearchBar extends Component {

  handleRadioChange = (ev) => {
    if (ev.target.checked) {

      if (ev.target.value === "Alphabetically") {
        this.props.sortStocksByAlphabet()
      }
      else if (ev.target.value === "Price") {
        this.props.sortStocksByPrice()
      }

    }
  }

  handleFilterChange = (ev) => {
    this.props.filterByType(ev.target.value)
  }

  render() {
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            name="sort-by"
            value="Alphabetically"
            checked={null}
            onChange={this.handleRadioChange}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            name="sort-by"
            value="Price"
            checked={null}
            onChange={this.handleRadioChange}
          />
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleFilterChange}>
            <option value="All">All Stocks</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    )
  }

}


export default SearchBar;

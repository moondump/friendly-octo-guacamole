import React from 'react';

class SearchBar extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: null
    }
  }

  handleAlphaChange(ev) {
    this.props.sortAlpha();
    this.setState({ selected: ev.target.value })
  }

  handlePriceChange(ev) {
    this.props.sortPrice();
    this.setState({ selected: ev.target.value })
  }

  render() {
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            checked={this.state.selected === 'Alphabetically' ? true : false}
            onChange={(ev) => this.handleAlphaChange(ev)}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            checked={this.state.selected === 'Price' ? true : false}
            onChange={(ev) => this.handlePriceChange(ev)}
          />
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={(ev) => this.props.filter(ev.target.value)}>
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

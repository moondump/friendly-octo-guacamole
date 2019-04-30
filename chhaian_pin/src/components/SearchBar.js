import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      sortBy: 'Alphabetically',
    }
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleCheckChange(e) {
    this.setState({sortBy: e.target.value})
    this.props.sortBy(e.target.value)
  }

  handleFilter(e) {
    let filter = e.target.value;
    this.props.filter(filter)
  }

  render() {
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio"
          value="Alphabetically"
          checked={this.state.sortBy === 'Alphabetically'}
          onChange={this.handleCheckChange}/>
          Alphabetically
        </label>
        <label>
          <input type="radio"
          value="Price"
          checked={this.state.sortBy === 'Price'}
          onChange={this.handleCheckChange}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={ e => {this.handleFilter(e)}}>
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

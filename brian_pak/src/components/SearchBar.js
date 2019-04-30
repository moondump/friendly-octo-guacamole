import React, {Component} from 'react';

// WE WERE TOLD TO USE CONTROLLED FORMS 
export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterVal: undefined,
      sortVal: undefined
    }
  }

  handleSortChange = (e) => {
    this.setState({sortVal: e.target.value})
    this.props.handleSortChange(e.target.value)
  }

  handleFilterChange = (e) => {
    this.setState({filterVal: e.target.value})
    this.props.handleFilterChange(e.target.value)
  }

  render() {
    const { sortVal, filterVal } = this.state

    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={sortVal === "Alphabetically"} onChange={this.handleSortChange} />
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={sortVal === "Price"} onChange={this.handleSortChange}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select value={filterVal} onChange={this.handleFilterChange}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );
  }
}

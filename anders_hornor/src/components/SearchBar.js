import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={(ev) => props.sortAlphabetically()} onChange={(ev) => props.sortAlphabetically(ev)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={(ev) => props.sortPricically()} onChange={(ev) => props.sortPricically()}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(ev) => props.filterStocks(ev)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

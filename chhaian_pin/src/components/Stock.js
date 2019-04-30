import React from 'react'
// id: 1,
// ticker: "GOOG",
// name: "Google",
// type: "Tech",
// price: 1194.8
const Stock = (props) => (
  <div onClick={() => props.handleClick(props.stock)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {props.stock.name}
        </h5>
        <p className="card-text">
          {props.stock.ticker + ': ' + props.stock.price}
        </p>
      </div>
    </div>


  </div>
);

export default Stock

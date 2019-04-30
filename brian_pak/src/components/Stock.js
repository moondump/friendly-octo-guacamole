import React from 'react'

const Stock = (props) => (
  
  <div onClick={() => {
      if (props.buyStock) props.buyStock(props.stock)
      else if (props.sellStock) props.sellStock(props.stock)
    }} 
  >
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {props.stock.name} ({props.stock.ticker})
        </h5>
        <p className="card-text">
          Type: {props.stock.type}<br />
          Price: {props.stock.price}
        </p>
      </div>
    </div>


  </div>
);

export default Stock
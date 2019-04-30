import React from 'react'

const Stock = (props) => (
  <div >
    <div className="card"   >
      <div className="card-body"  >
        <h5 className="card-title" onClick={()=>props.onStockMethod(props.stock)} id={props.stock.id}>{
            props.stock.name
          }</h5>
        <p className="card-text" >
          {props.stock.ticker}: {props.stock.price}
        </p>
      </div>
    </div>


  </div>
);

export default Stock

// id: 1
// name: "Google"
// price: 1194.8
// ticker: "GOOG"
// type: "Tech"
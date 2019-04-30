import React from 'react'

class Stock extends React.Component {

  render(){
    return(
  <div>
    <div className="card" onClick={(ev)=>this.props.handleClick(this.props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{
            this.props.stock.name
          }</h5>
        <p className="card-text">{
            this.props.stock.price
          }</p>
      </div>
    </div>


  </div>
)}
}

export default Stock

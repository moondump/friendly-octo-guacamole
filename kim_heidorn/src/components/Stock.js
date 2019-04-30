import React from 'react'

class Stock extends React.Component {
  render() {
    const {stock, buyOrRemoveStock} = this.props
    return (
      <div>
        <div className="card" onClick={()=>buyOrRemoveStock(stock)}>
          <div className="card-body">
            <h5 className="card-title">
              {stock.name}
            </h5>
            <p className="card-text">
                {stock.ticker}: {stock.price}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Stock

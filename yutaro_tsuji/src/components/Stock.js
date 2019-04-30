import React from 'react'

class Stock extends React.Component {

  handleClick = ev => {
    if (ev.target.parentElement.parentElement.parentElement.firstElementChild.textContent === 'Stocks') {
      this.props.addStocks(this.props.stock)
    } else if (ev.target.parentElement.parentElement.parentElement.firstElementChild.textContent === 'My Portfolio') {
      this.props.removeStocks(this.props.stock)
    }
  }

  render() {

    const {name, ticker, price} = this.props.stock

    return (
      <div>
        <div className="card" onClick={(ev) => this.handleClick(ev)}>
          <div className="card-body">
            <h5 className="card-title">
              {name}
            </h5>
            <p className="card-text">
              {ticker}: ${price}
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default Stock

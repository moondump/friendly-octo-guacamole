import React, {Component} from 'react'





class Stock extends Component  {

  handleClick = () => {
    this.props.handleClick(this.props.stock)
  }



  render() {
    return (
      <div>

        <div className="card" onClick={this.handleClick}>
          <div className="card-body">
            <h5 className="card-title">
              {this.props.stock.name}
            </h5>
            <p className="card-text">
                Ticker: {this.props.stock.ticker}<br />
                Type: {this.props.stock.type}<br />
                Price: {this.props.stock.price}
              </p>
          </div>
        </div>

      </div>
    )
  }

}


export default Stock

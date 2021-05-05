import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stockObj => <Stock key={stockObj.id} clickAction={this.props.addToPortfolio} stock={stockObj}/>)
        }
      </div>
    );
  }

}

export default StockContainer;

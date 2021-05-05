import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map(stockObj => <Stock clickAction={this.props.removeFromPortfolio} key={stockObj.id} stock={stockObj}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;

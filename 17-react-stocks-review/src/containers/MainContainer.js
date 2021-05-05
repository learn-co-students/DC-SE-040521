import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = "http://localhost:3001/stocks"
class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sort: "",
    filter: "All"
  }

  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then(stocks => this.setState({stocks: stocks}))
  }

  addToPortfolio = stock => {
    if(!this.state.portfolio.includes(stock)){
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }
  }

  removeFromPortfolio = stock => this.setState({portfolio: this.state.portfolio.filter(portS => portS.id !== stock.id)})

  changeFilter = (filter) => this.setState({filter: filter})

  changeSort = (sort) => this.setState({sort: sort})

  stocksToDisplay = () => {
    let displayStocks = [...this.state.stocks]

    //See if the filter is NOT all 
    // Checkthe type of filter from state and filter based on that
    if(this.state.filter !== "All"){
      displayStocks = this.state.stocks.filter(stock => stock.type === this.state.filter)
    }

    //Check the sort
    // If the sort is alph, we'll sort that way
    // if the sort is price, we'll sort with that
    // else we'll just return the filtered array

    if(this.state.sort === "Alphabetically"){
      return displayStocks.sort((stock1, stock2) => stock1.name > stock2.name ? 1 : -1 )
    }else if(this.state.sort === "Price"){
      return displayStocks.sort((stock1, stock2) => stock1.price > stock2.price ? 1 : -1 )
    } else {
      return displayStocks
    }
  }

  render() {

    return (
      <div>
        <SearchBar
          changeFilter={this.changeFilter}
          changeSort={this.changeSort}
          sort={this.state.sort}
        />
          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.stocksToDisplay()}
                addToPortfolio={this.addToPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.state.portfolio}
                removeFromPortfolio={this.removeFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

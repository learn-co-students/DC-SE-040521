import React, { Component } from 'react'

//Components
import Navbar  from './Navbar'
import CardContainer from './CardContainer'

export default class App extends Component {

  state = {
    showCardContainer: false
  }

  showContainer = () => {
    this.setState({showCardContainer: !this.state.showCardContainer})
  }

  render(){
    return (
      <div className="bg-dark">
        <Navbar show={this.state.showCardContainer} showContainer={this.showContainer}/>
        { this.state.showCardContainer ? <CardContainer /> : null}
      </div>
    )
  }
}




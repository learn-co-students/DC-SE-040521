import React, { Component } from 'react'

//Components
import Navbar  from './Navbar'
import CardContainer from './CardContainer'
import Home from './Home'

export default class App extends Component {

  state = {
    display: "Home"
  }

  


  render(){
    return (
      <div className="bg-dark">
        <Navbar />
        <Home/> 
  
      </div>
    )
  }
}




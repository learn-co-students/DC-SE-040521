import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi: [],
    position: 0,
    money: 100
  }

  componentDidMount(){
    console.log("mounting component")
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => this.setState({
        sushis: sushis
      }))
  }

  moreSushi = () => {
    this.setState({
      position: this.state.position + 4 
    })
  }

  eatSushi = (sushi) => {
    if(!this.state.eatenSushi.includes(sushi) && sushi.price < this.state.money){
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        money: this.state.money - sushi.price 
      })
    }else{
      alert("no mo money")
    }
  }

  render() {
    console.log("Rendering")
    const displaySushi = this.state.sushis.slice(this.state.position, this.state.position + 4)
 
    return (
      <div className="app">
        <SushiContainer eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi} moreSushi={this.moreSushi}  sushis={displaySushi} />
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
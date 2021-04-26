import { Component } from 'react'
import paintingData from '../data/paintings'
// Components 
import { Navbar } from './Navbar'
import CardContainer from './CardContainer'


export default class App extends Component {

  state = {
    showContainer: false,
    paintings: paintingData
  }

  flipContainer = () => this.setState({showContainer: !this.state.showContainer})

  render(){
    return (
      <>
      <div className="bg-dark">
      <Navbar flipContainer={this.flipContainer}/>
      { this.state.showContainer ? <CardContainer /> : null }
      </div>
      </>
    );
  }
}



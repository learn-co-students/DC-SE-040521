import React, { Component } from 'react'
import paintingData from '../data/paintings'

//Components
import Navbar  from './Navbar'
import CardContainer from './CardContainer'
import Home from './Home'

export default class App extends Component {

  state = {
    display: "Home",
    searchText: "",
    paintings: paintingData
  }

  changeToPaintings = () => {
    this.setState({display: "Paintings"})
  }

  changeToHome = () => {
    this.setState({display: "Home"})
  }

  handleSearchText = (data) => {
    this.setState({
      searchText: data
    })
  }

  deletePainting = (paintingObj) => {
    const newPaintings = this.state.paintings.filter(painting => painting.id !== paintingObj.id)
    this.setState({
      paintings: newPaintings
    })

  }


  render(){

    const filteredNamePaintings = this.state.paintings.filter(painting => painting.artist.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
    const filteredTitlePaintings =  this.state.paintings.filter(painting => painting.title.toLowerCase().includes(this.state.searchText.toLowerCase()))

    const combined = [...filteredNamePaintings, ...filteredTitlePaintings]

    const newCombined = [... new Set(combined)]

    return (
      <div className="bg-dark">
        <Navbar handleSearchText={this.handleSearchText} display={this.state.display} changeToHome={this.changeToHome} />
        { this.state.display === "Home" ? <Home changeToPaintings={this.changeToPaintings}/> : null }
        { this.state.display === "Paintings" ? <CardContainer deletePainting={this.deletePainting} paintings={newCombined}  /> : null}
      </div>
    )
  }
}




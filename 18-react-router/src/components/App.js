import React, { Component } from 'react'

//Components
import Navbar  from './Navbar'
import PokeContainer from './PokeContainer'
import Home from './Home'

const BASE_URL = "http://localhost:3001/pokemon/"

export default class App extends Component {
  
 

  state = {
    display: "Home",
    searchText: "",
    pokemons: []
  }

  componentDidMount(){
    fetch(BASE_URL)
      .then(res => res.json())
      .then(pokemons => this.setState({ pokemons }))
  }

  // Takes in a new pokemon object and adds it state
  createPokemon = (pokemonObj) => {
    this.setState({pokemons: [pokemonObj, ...this.state.pokemons]})
  }

  // Changes the display to the pokemon container
  changeToPokemon = () => {
    this.setState({display: "Pokemon"})
  }

   // Changes the display to the Home page
  changeToHome = () => {
    this.setState({display: "Home"})
  }

  // Takes in user input from the navbar and sets it to state
  handleSearchText = (data) => {
    this.setState({
      searchText: data
    })
  }

  // Takes in a pokemon and removes it from state 
  deletePokemon = (pokemonObj) => {
    const newPokemons = this.state.pokemons.filter(pokemon=> pokemon.id !== pokemonObj.id)

    // delete id of the object we are trying to delete
    // tell the server that the request is a DELETE request 

    fetch(BASE_URL+pokemonObj.id, {method: "DELETE"})
      .then(() => this.setState({
      pokemons: newPokemons
    }))
  }

  feedPokemon = (pokemonObj) => {
    //Find the pokemon we clicked on 
    const oldPoke = this.state.pokemons.find(pokemon => pokemonObj.id === pokemon.id )

    //update the pokemon object
    const updatedPoke = {...oldPoke, weight: oldPoke.weight + 10}

    //array to update state with
    const updatedArray = this.state.pokemons.map(poke => poke.id === pokemonObj.id ? updatedPoke : poke)

    const reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(updatedPoke)
    }


    fetch(BASE_URL+pokemonObj.id, reqObj)
      .then(r => r.json())
      .then(() => this.setState({ pokemons: updatedArray}))

  }


  render(){

   const filteredPokemon = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchText))


    return (
      <div className="bg-dark">
        <Navbar handleSearchText={this.handleSearchText} display={this.state.display} changeToHome={this.changeToHome} />
        { this.state.display === "Home" ? <Home changeToPokemon={this.changeToPokemon}/> : null }
        { this.state.display === "Pokemon" ? <PokeContainer feedPokemon={this.feedPokemon} deletePokemon={this.deletePokemon} createPokemon={this.createPokemon} pokemons={filteredPokemon}/> : null}
      </div>
    )
  }
}




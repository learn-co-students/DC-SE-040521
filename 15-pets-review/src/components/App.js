import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) => {
    // Takes in event.target.value === "cat" , "dog" etc

    // Use the type to set to state
    // this.setState({...this.state, filters: { type: type }})
    
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPets = async () => {
    // Fetch a list of pets where the URL = /api/pets
    const BASE_URL = "/api/pets"

    // fetch(BASE_URL)
    //   .then(r => r.json())
    //   .then(petData => console.log(petData))

    // If the filter type is 'all' fetch all pets {} 

    if(this.state.filters.type === 'all'){
  
      const res = await fetch(BASE_URL)
      const pets = await res.json()

      // this.setState({ pets: pets })
      this.setState({ pets })
    } else {

      const res = await fetch(`${BASE_URL}?type=${this.state.filters.type}`)
      const pets = await res.json()

      this.setState({ pets: pets })
    }

  }

  adoptPet = (id) => {
    console.log("adopting!")
    // Use the pet id to find the pet in state 

   // Once we've found it, we'll flip its isAdopted attribute 

   // .map( (soloPet) => is soloPet the pet I clicked on? if so we'll change it)
   const newPets = this.state.pets.map((soloPet) => soloPet.id === id ? {...soloPet, isAdopted: !soloPet.isAdopted} : soloPet)
   
   this.setState({pets: newPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPets={this.onFindPets} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                petData={this.state.pets}
                adoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

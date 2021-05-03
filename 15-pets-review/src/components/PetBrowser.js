import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // this.props.petData === [{pet}, {pet}, {pet}]
    // map over the array
    // each individual pet is passed to our callback as an argument 
    // for each pet object we return a Pet component and pass the individual pet
    // object as a prop
    return <div className="ui cards">{this.props.petData.map((pet) => <Pet adoptPet={this.props.adoptPet}  key={pet.id} petData={pet}/>)}</div>
  }
}

export default PetBrowser

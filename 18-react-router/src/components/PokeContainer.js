import React from 'react'


//Components
import { Card } from './Card'
import Form from './Form'

export default class PokeContainer extends React.Component {

 

    render(){ 

        return(
            <>
            <Form createPokemon={this.props.createPokemon}/>
            <div className="row ml-3">
              { this.props.pokemons.map(pokemon => <Card feedPokemon={this.props.feedPokemon}  deletePokemon={this.props.deletePokemon} key={pokemon.id} pokemon={pokemon}/>) }
            </div>
            </>
        )
    }

}
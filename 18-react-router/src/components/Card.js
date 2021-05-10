

export const Card = ({ pokemon, deletePokemon, feedPokemon }) => {

    const {sprite, name} = pokemon

    // const sprite = pokemon.sprite
    // const name = pokemon.name
    return (
        <div className="card m-2 p-2 rounded">
            <img src={sprite} className="card-img-top" alt="..." />
            <div className="card-header">
                <h4>Current weight: {pokemon.weight} lbs</h4>
            </div>
            <div className="card-body overflow-auto">
                <h4 className="card-title">{name}</h4>
                <p className="card-text overflow-hidden">{pokemon.description}</p>
                <div className="s">
                    <button onClick={() => deletePokemon(pokemon)} className="btn btn-danger">Release</button>
                    <button onClick={() => feedPokemon(pokemon)} className="btn btn-primary">Feed</button>
                </div>
            </div>
        </div>
    )
}



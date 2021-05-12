import { Link } from 'react-router-dom'

export const Card = ({ pokemon }) => {

    const {sprite, name, id} = pokemon

    // const sprite = pokemon.sprite
    // const name = pokemon.name
    return (
        <div className="card m-2 p-2 rounded">
            <Link to={`/pokemons/${id}`}>
                <img src={sprite} className="card-img-top" alt="..." />
            </Link>
            <div className="card-title">
                <h4>{name}</h4>
            </div>
        </div>
    )
}



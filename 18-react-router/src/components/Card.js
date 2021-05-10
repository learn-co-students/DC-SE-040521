

export const Card = ({ pokemon }) => {

    const {sprite, name} = pokemon

    // const sprite = pokemon.sprite
    // const name = pokemon.name
    return (
        <div className="card m-2 p-2 rounded">
            <img src={sprite} className="card-img-top" alt="..." />
            <div className="card-title">
                <h4>{name}</h4>
            </div>
        </div>
    )
}



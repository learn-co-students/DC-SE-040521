

export const Details = ({pokeData}) => {
    return (
        <div className="card mb-3 m-auto">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img className="detail-img "src={pokeData.sprite} alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{pokeData.name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
    )
}

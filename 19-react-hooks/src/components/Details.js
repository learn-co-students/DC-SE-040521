

export const Details = ({pokeData}) => {
    return (
        <div className="card detail-card mb-3 m-auto">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="detail-img" src={pokeData.sprite} alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{pokeData.name}</h5>
                        <p className="card-text">{pokeData.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <button className="btn btn-danger">Release</button>
                        <button className="btn btn-primary">Feed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
